import { Injectable } from '@nestjs/common';
import { DeliveryController } from 'src/controllers/delivery.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { deliveryEntity } from '../entities/delivery.entity';
import { locationEntity } from 'src/entities/location.entity';

@Injectable()
export class DeliveryService {
    constructor(
        @InjectRepository(deliveryEntity)
        private deliveryRepository: Repository<deliveryEntity>,

        @InjectRepository(locationEntity)
        private locationRepository: Repository<locationEntity>, //
    ) { }

    //POST
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

                // Asignar la ubicación al delivery
                data.location = location; // La relación se mantiene correctamente
            }

            if (!data.status) {
                data.status = 'available';
            }

            // Crear el delivery
            const newDelivery = this.deliveryRepository.create(data); // Crear la entidad delivery
            await this.deliveryRepository.save(newDelivery); // Guardar en la base de datos

            const response = {
                idDelivery: newDelivery.idDelivery,
                personId: newDelivery.personId,
                location: {
                    lat: newDelivery.location.lat,
                    lng: newDelivery.location.lng,
                },
                radius: newDelivery.radius,
                status: newDelivery.status
            };

            return response;
        } catch (error) {
            console.error(error);
            throw new Error('Error al guardar el delivery');
        }
    }

    //--------------------------------------------------------------------------------------------------------------------------------------

    //PUT DELIVERY LOCATION
    async putDeliveryLocation(id: number, data: Partial<deliveryEntity>) {
        console.log("ERROR0")
        console.log('BODY RECIBIDO:', data);
        try {
            const delivery = await this.deliveryRepository.findOne({
                where: { idDelivery: id },
                relations: ['location'],
            });

            console.log("ERROR1")
            if (!delivery) {
                console.log("ERROR2")
                throw new Error('Delivery no encontrado');
            }

            console.log("LOCATION ACTUAL:", delivery.location);


            if (data.location) {
                if (data.location.lat !== undefined) {
                    console.log("ERROR3");
                    delivery.location.lat = data.location.lat;
                }
                if (data.location.lng !== undefined) {
                    console.log("ERROR4");
                    delivery.location.lng = data.location.lng;
                }
            }

            console.log('Guardando locadvadabamkbdamoation:', delivery.location);
            await this.locationRepository.update(delivery.location.idLocation, {
                lat: delivery.location.lat,
                lng: delivery.location.lng,
            });

            console.log('Guardando location:', delivery.location);


            return delivery;

        } catch (error) {
            console.error(error);
            throw new Error('Error al actualizar la ubicación del delivery');
        }
    }






}
