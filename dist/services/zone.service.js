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
exports.ZoneService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const zone_entity_1 = require("../entities/zone.entity");
const location_entity_1 = require("../entities/location.entity");
let ZoneService = class ZoneService {
    zoneRepository;
    locationRepository;
    constructor(zoneRepository, locationRepository) {
        this.zoneRepository = zoneRepository;
        this.locationRepository = locationRepository;
    }
    async postZone(body) {
        const { name, location, radius } = body;
        const newLocation = new location_entity_1.locationEntity();
        newLocation.lat = location.lat;
        newLocation.lng = location.lng;
        const savedLocation = await this.locationRepository.save(newLocation);
        const newZone = new zone_entity_1.zoneEntity();
        newZone.name = name;
        newZone.radius = radius;
        newZone.location = savedLocation;
        const savedZone = await this.zoneRepository.save(newZone);
        return savedZone;
    }
    async getZones() {
        return this.zoneRepository.find({ relations: ['location'] });
    }
    async getZone(id) {
        return this.zoneRepository.findOne({ where: { idZone: id }, relations: ['location'] });
    }
    async putZone(id, body) {
        const { name, location, radius } = body;
        const existingZone = await this.zoneRepository.findOne({
            where: { idZone: id },
            relations: ['location'],
        });
        if (!existingZone) {
            throw new Error(`Zone with id ${id} not found`);
        }
        if (existingZone.location) {
            existingZone.location.lat = location.lat;
            existingZone.location.lng = location.lng;
            await this.locationRepository.save(existingZone.location);
        }
        else {
            const newLocation = new location_entity_1.locationEntity();
            newLocation.lat = location.lat;
            newLocation.lng = location.lng;
            const savedLocation = await this.locationRepository.save(newLocation);
            existingZone.location = savedLocation;
        }
        existingZone.name = name;
        existingZone.radius = radius;
        const updatedZone = await this.zoneRepository.save(existingZone);
        return updatedZone;
    }
    async patchZone(id, body) {
        const zone = await this.zoneRepository.findOne({
            where: { idZone: id },
            relations: ['location'],
        });
        if (!zone) {
            throw new Error(`Zone with id ${id} not found`);
        }
        if (body.name !== undefined) {
            zone.name = body.name;
        }
        if (body.radius !== undefined) {
            zone.radius = body.radius;
        }
        const updatedZone = await this.zoneRepository.save(zone);
        return updatedZone;
    }
    async deleteZone(id) {
        const zone = await this.zoneRepository.findOne({
            where: { idZone: id },
            relations: ['location'],
        });
        if (!zone) {
            throw new Error(`Zone with id ${id} not found`);
        }
        await this.zoneRepository.remove(zone);
        return {
            "message": "Zone deleted"
        };
    }
};
exports.ZoneService = ZoneService;
exports.ZoneService = ZoneService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(zone_entity_1.zoneEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(location_entity_1.locationEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ZoneService);
//# sourceMappingURL=zone.service.js.map