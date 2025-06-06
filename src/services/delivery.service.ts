import { Injectable } from '@nestjs/common';
import { DeliveryController } from 'src/controllers/delivery.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { deliveryEntity } from '../entities/delivery.entity';
import { locationEntity } from 'src/entities/location.entity';
import { zoneEntity } from 'src/entities/zone.entity';

@Injectable()
export class DeliveryService {

    constructor (
        @InjectRepository(deliveryEntity)
        private deliveryRepository: Repository<deliveryEntity>,
        @InjectRepository(locationEntity)
        private locationRepository: Repository<locationEntity>,
        @InjectRepository(zoneEntity)
        private zoneRepository: Repository<zoneEntity>
    ) {}

    async postDelivery(body: any) {
        const { personId, radius, location } = body;

        // Crear y guardar la ubicación
        const newLocation = new locationEntity();
        newLocation.lat = location.lat;
        newLocation.lng = location.lng;
        const savedLocation = await this.locationRepository.save(newLocation);

        // Crear y guardar el delivery
        const newDelivery = new deliveryEntity();
        newDelivery.personId = personId;
        newDelivery.radius = radius;
        newDelivery.location = savedLocation;
        // No se asigna zone ni status (status se asigna por defecto desde la entidad)
        // zone se deja como null automáticamente porque es opcional

        const savedDelivery = await this.deliveryRepository.save(newDelivery);

        return savedDelivery;
    }

    async putDeliveryLocation(id: number, body: any) {
        const { location } = body;

        // Buscar el delivery existente
        const delivery = await this.deliveryRepository.findOne({
            where: { idDelivery: id },
            relations: ['location'],
        });

        if (!delivery) {
            throw new Error(`Delivery with id ${id} not found`);
        }

        // Actualizar la ubicación
        delivery.location.lat = location.lat;
        delivery.location.lng = location.lng;

        // Guardar el delivery actualizado
        const updatedDelivery = await this.deliveryRepository.save(delivery);
        return updatedDelivery;
    }

    async findByProximity(body: any) {
        return 0;
    }

}