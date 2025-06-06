import { Injectable } from '@nestjs/common';
import { DeliveryController } from 'src/controllers/delivery.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { deliveryEntity } from '../entities/delivery.entity';
import { locationEntity } from 'src/entities/location.entity';
import { zoneEntity } from 'src/entities/zone.entity';

@Injectable()
export class DeliveryService {
    constructor(
        @InjectRepository(deliveryEntity)
        private deliveryRepository: Repository<deliveryEntity>,

        @InjectRepository(locationEntity)
        private locationRepository: Repository<locationEntity>, //
    ) { }

    async postDelivery(data: Partial<deliveryEntity>) {
        try {
            // Verificar que location exista en los datos
            if (data.location) {
                // Crear la entidad location
                const location = new locationEntity();
                location.lat = data.location.lat;
                location.lng = data.location.lng;

                // Guardar la ubicación en la base de datos
                await this.locationRepository.save(location); // Asegúrate de inyectar la repository de location

                // Asignar la ubicación a la zona
                data.location = location; // La relación se mantiene correctamente
            }

            // Crear la zona
            const newDelivery = this.deliveryRepository.create(data); // Crear la entidad zona
            return await this.deliveryRepository.save(newDelivery);   // Guardar en la base de datos
        } catch (error) {
            console.error(error);
        }
    }

    async putDeliveryStatus(id: number, status: string) {
        const delivery = await this.deliveryRepository.findOne({ where: { idDelivery: id } });
        if (!delivery) {
            throw new Error('Delivery no encontrado');
        }
        delivery.status = status;
        return await this.deliveryRepository.save(delivery);
    }

    async putDeliveryLocation(id: number, location: locationEntity) {
        const delivery = await this.deliveryRepository.findOne({ where: { idDelivery: id } });
        if (!delivery) {
            throw new Error('Delivery no encontrado');
        }
        delivery.location = location;
        return await this.deliveryRepository.save(delivery);
    }
}