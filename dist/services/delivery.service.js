"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const delivery_entity_1 = require("../entities/delivery.entity");
const location_entity_1 = require("../entities/location.entity");
const zone_entity_1 = require("../entities/zone.entity");
let DeliveryService = class DeliveryService {
    deliveryRepository;
    locationRepository;
    zoneRepository;
    constructor(deliveryRepository, locationRepository, zoneRepository) {
        this.deliveryRepository = deliveryRepository;
        this.locationRepository = locationRepository;
        this.zoneRepository = zoneRepository;
    }
    async postDelivery(body) {
        const { personId, radius, location } = body;
        const newLocation = new location_entity_1.locationEntity();
        newLocation.lat = location.lat;
        newLocation.lng = location.lng;
        const savedLocation = await this.locationRepository.save(newLocation);
        const newDelivery = new delivery_entity_1.deliveryEntity();
        newDelivery.personId = personId;
        newDelivery.radius = radius;
        newDelivery.location = savedLocation;
        const savedDelivery = await this.deliveryRepository.save(newDelivery);
        return savedDelivery;
    }
    async putDeliveryStatus(id, body) {
        const { status } = body;
        const delivery = await this.deliveryRepository.findOne({
            where: { idDelivery: id },
        });
        if (!delivery) {
            throw new Error(`Delivery with id ${id} not found`);
        }
        delivery.status = status;
        const updatedDelivery = await this.deliveryRepository.save(delivery);
        return updatedDelivery;
    }
    async putDeliveryLocation(id, body) {
        const { location } = body;
        const delivery = await this.deliveryRepository.findOne({
            where: { idDelivery: id },
            relations: ['location'],
        });
        if (!delivery) {
            throw new Error(`Delivery with id ${id} not found`);
        }
        delivery.location.lat = location.lat;
        delivery.location.lng = location.lng;
        const updatedDelivery = await this.deliveryRepository.save(delivery);
        return updatedDelivery;
    }
    async findByProximity(body) {
        const { location, radius } = body;
        const { lat, lng } = location;
        const allDeliveries = await this.deliveryRepository.find({
            relations: ['location'],
        });
        const matchingDeliveries = allDeliveries.filter((delivery) => {
            const dLat = delivery.location.lat - lat;
            const dLng = delivery.location.lng - lng;
            const distance = Math.sqrt(dLat * dLat + dLng * dLng);
            return distance <= radius && delivery.radius <= radius;
        });
        return matchingDeliveries;
    }
    async assignZone(id, body) {
        const { zoneIds } = body;
        const delivery = await this.deliveryRepository.findOne({
            where: { idDelivery: id },
            relations: ['zones'],
        });
        if (!delivery) {
            throw new Error(`Delivery with id ${id} not found`);
        }
        const zones = await this.zoneRepository.findByIds(zoneIds || []);
        delivery.zones = zones;
        const updatedDelivery = await this.deliveryRepository.save(delivery);
        return updatedDelivery;
    }
    async findByZone(body) {
        const { zoneId } = body;
        const zone = await this.zoneRepository.findOne({ where: { idZone: zoneId } });
        if (!zone) {
            throw new Error(`Zone with id ${zoneId} not found`);
        }
        const deliveries = await this.deliveryRepository.find({
            where: { zones: { idZone: zoneId } },
            relations: ['location', 'zones'],
        });
        return deliveries;
    }
    async getZones(id) {
        const delivery = await this.deliveryRepository.findOne({
            where: { idDelivery: id },
            relations: ['zones'],
        });
        if (!delivery) {
            throw new Error(`Delivery with id ${id} not found`);
        }
        return delivery.zones;
    }
    async deleteDeliveryZone(idDelivery, zoneId) {
        await this.deliveryRepository
            .createQueryBuilder()
            .relation('zones')
            .of(idDelivery)
            .remove(zoneId);
        return {
            message: "Zone removed from delivery"
        };
    }
    async deleteDelivery(id) {
        const delivery = await this.deliveryRepository.findOne({
            where: { idDelivery: id },
        });
        if (!delivery) {
            throw new common_1.NotFoundException(`Delivery with id ${id} not found`);
        }
        await this.deliveryRepository.remove(delivery);
        return {
            message: "Delivery deleted"
        };
    }
    async getDeliveries() {
        return this.deliveryRepository.find({
            relations: ['location', 'zones'],
        });
    }
};
exports.DeliveryService = DeliveryService;
exports.DeliveryService = DeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(delivery_entity_1.deliveryEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(location_entity_1.locationEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(zone_entity_1.zoneEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DeliveryService);
//# sourceMappingURL=delivery.service.js.map