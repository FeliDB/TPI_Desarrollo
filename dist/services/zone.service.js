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
    async postZonaEntrega(data) {
        try {
            if (data.location) {
                const location = new location_entity_1.locationEntity();
                location.lat = data.location.lat;
                location.lng = data.location.lng;
                await this.locationRepository.save(location);
                data.location = location;
            }
            const newZone = this.zoneRepository.create(data);
            return await this.zoneRepository.save(newZone);
        }
        catch (error) {
            console.error(error);
            throw new Error('Error al guardar la zona');
        }
    }
    async getZonaEntrega() {
        try {
            return await this.zoneRepository.find({ relations: ['location'] });
        }
        catch (error) {
            console.error(error);
            throw new Error('Error al obtener las zonas');
        }
    }
    async putZonaEntrega(id, data) {
        const zone = await this.zoneRepository.findOne({
            where: { idZone: id },
            relations: ['location'],
        });
        if (!zone) {
            throw new Error('Zona no encontrada');
        }
        zone.name = data.name ?? zone.name;
        zone.radius = data.radius ?? zone.radius;
        if (data.location) {
            if (zone.location) {
                zone.location.lat = data.location.lat ?? zone.location.lat;
                zone.location.lng = data.location.lng ?? zone.location.lng;
                await this.locationRepository.save(zone.location);
            }
            else {
                const newLoc = this.locationRepository.create(data.location);
                zone.location = await this.locationRepository.save(newLoc);
            }
        }
        return await this.zoneRepository.save(zone);
    }
    async patchZonaEntrega(id, data) {
        try {
            const zone = await this.zoneRepository.findOne({ where: { idZone: id } });
            if (!zone) {
                throw new Error('Zona no encontrada');
            }
            if (data.name !== undefined) {
                zone.name = data.name;
            }
            if (data.radius !== undefined) {
                zone.radius = data.radius;
            }
            await this.zoneRepository.save(zone);
            return zone;
        }
        catch (error) {
            console.error(error);
            throw new Error('Error al actualizar la zona');
        }
    }
    async deleteZonaEntrega(id) {
        try {
            const zone = await this.zoneRepository.findOne({ where: { idZone: id } });
            if (!zone) {
                throw new Error('Zona no encontrada');
            }
            await this.zoneRepository.remove(zone);
            return { message: 'Zona eliminada correctamente' };
        }
        catch (error) {
            console.error(error);
            throw new Error('Error al eliminar la zona');
        }
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