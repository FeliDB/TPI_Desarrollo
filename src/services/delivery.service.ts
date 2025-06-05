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
            throw new Error('Error al guardar la zona');
        }
    }

    async putDeliveryLocation(id: number, data: Partial<locationEntity>) {
        try {
            const delivery = await this.deliveryRepository.findOne({ where: { idDelivery: id }, relations: ['location'] });

            if (!delivery) {
                throw new Error('Zona no encontrada');
            }

            // Actualizar solo los campos proporcionados en el cuerpo de la solicitud
            if (data.lat !== undefined) {
                delivery.location.lat = data.lat;
            }
            if (data.lng !== undefined) {
                delivery.location.lng = data.lng;
            }

            // Guardar los cambios en la base de datos
            await this.deliveryRepository.save(delivery);

            return delivery;
        } catch (error) {
            console.error(error);
            throw new Error('Error al actualizar la ubicación de la zona');
        }
    }

    async putDeliveryStatus(id: number, data: Partial<deliveryEntity>) {
        try {
            const delivery = await this.deliveryRepository.findOne({ where: { idDelivery: id } });

            if (!delivery) {
                throw new Error('Zona no encontrada');
            }

            // Actualizar solo los campos proporcionados en el cuerpo de la solicitud
            if (data.status !== undefined) {
                delivery.status = data.status;
            }

            // Guardar los cambios en la base de datos
            await this.deliveryRepository.save(delivery);

            return delivery;
        } catch (error) {
            console.error(error);
            throw new Error('Error al actualizar el estado de la zona');
        }
    }

}