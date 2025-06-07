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

//     //POST
//     async postDelivery(data: Partial<deliveryEntity>) {
//         try {
//             // Verificar que location exista en los datos
//             if (data.location) {
//                 // Crear la entidad location
//                 const location = new locationEntity();
//                 location.lat = data.location.lat;
//                 location.lng = data.location.lng;

//                 // Guardar la ubicación en la base de datos
//                 await this.locationRepository.save(location); // Asegúrate de inyectar la repository de location

//                 // Asignar la ubicación al delivery
//                 data.location = location; // La relación se mantiene correctamente
//             }

//             if (!data.status) {
//                 data.status = 'available';
//             }

//             // Crear el delivery
//             const newDelivery = this.deliveryRepository.create(data); // Crear la entidad delivery
//             await this.deliveryRepository.save(newDelivery); // Guardar en la base de datos

//             const response = {
//                 idDelivery: newDelivery.idDelivery,
//                 personId: newDelivery.personId,
//                 location: {
//                     lat: newDelivery.location.lat,
//                     lng: newDelivery.location.lng,
//                 },
//                 radius: newDelivery.radius,
//                 status: newDelivery.status
//             };

//             return response;
//         } catch (error) {
//             console.error(error);
//             throw new Error('Error al guardar el delivery');
//         }
//     }

//     //--------------------------------------------------------------------------------------------------------------------------------------

//     //PUT DELIVERY LOCATION
//     async putDeliveryLocation(id: number, data: Partial<deliveryEntity>) {
//         console.log("ERROR0")
//         console.log('BODY RECIBIDO:', data);
//         try {
//             const delivery = await this.deliveryRepository.findOne({
//                 where: { idDelivery: id },
//                 relations: ['location'],
//             });

//             console.log("ERROR1")
//             if (!delivery) {
//                 console.log("ERROR2")
//                 throw new Error('Delivery no encontrado');
//             }

//             console.log("LOCATION ACTUAL:", delivery.location);


//             if (data.location) {
//                 if (data.location.lat !== undefined) {
//                     console.log("ERROR3");
//                     delivery.location.lat = data.location.lat;
//                 }
//                 if (data.location.lng !== undefined) {
//                     console.log("ERROR4");
//                     delivery.location.lng = data.location.lng;
//                 }
//             }

//             console.log('Guardando locadvadabamkbdamoation:', delivery.location);
//             await this.locationRepository.update(delivery.location.idLocation, {
//                 lat: delivery.location.lat,
//                 lng: delivery.location.lng,
//             });

//             console.log('Guardando location:', delivery.location);


//             return delivery;

//         } catch (error) {
//             console.error(error);
//             throw new Error('Error al actualizar la ubicación del delivery');
//         }
//     }


// //---------------------------------------------------------------------------------------------------------------------------

// //PUT DELIVERY STATUS

//     async putDeliveryStatus(id: number, data: Partial<deliveryEntity>) {
//         try {
//             const delivery = await this.deliveryRepository.findOne({ where: { idDelivery: id } });
//             if (!delivery) {
//                 throw new Error('Delivery no encontrado');
//             }

//             delivery.status = data.status ?? delivery.status;

//             await this.deliveryRepository.save(delivery);

//             return delivery;
//         } catch (error) {
//             console.error(error);
//             throw new Error('Error al actualizar el estado del delivery');
//         }
//     }


// //----------------------------------------------------------------------------------------------------------------------------------

// //FIND DELIVERY BY PROXIMITY

//     async getDeliveryByProximity(data: Partial<deliveryEntity>) {
//         try {
//             const lat = data.location?.lat;
//             const lng = data.location?.lng;
//             const radius = data.radius;

//             const deliveries = await this.deliveryRepository
//                 .createQueryBuilder('delivery')
//                 .innerJoinAndSelect('delivery.location', 'location')
//                 .where('location.lat = :lat', { lat })
//                 .andWhere('location.lng = :lng', { lng })
//                 .andWhere('delivery.radius = :radius', { radius })
//                 .getMany();
            
//             return deliveries;


//         } catch(error) {
//             console.error(error)
//             throw new Error('Error al obtener el delivery por proximidad');
//         }
//     }


// //----------------------------------------------------------------------------------------------------------------------------------

// //FIND DELIVERY BY ZONE

//     async getDeliveryByZone(data: Partial<zoneEntity>) {
//         try {
//             const idZone = data.idZone

//             const deliveries = await this.deliveryRepository.find({
//                 where: { zones: {idZone}},
//                 relations: ['zone', 'location']
//             })

//             return deliveries

//         } catch(error) {
//             console.error(error)
//             throw new Error('Error al obtener el delivery por zona');
//         }
//     }

//     //----------------------------------------------------------------------------------------------------------------------------------

// //ASSIGN ZONE

//     async assignZone(id: number, data: Partial<deliveryEntity>) {
//         try {
//             const delivery = await this.deliveryRepository.findOne({ where: { idDelivery: id } });
//             if (!delivery) {
//                 throw new Error('Delivery no encontrado');
//             }

//             delivery.zones = data.zones ?? delivery.zones;

//             await this.deliveryRepository.save(delivery);

//             return delivery;
//         } catch (error) {
//             console.error(error);
//             throw new Error('Error al asignar la zona al delivery');
//         }
//     }

//     //Obtiene el delivery con la ID que le pasamos y me devuelve las zonas que tiene asociadas dicho delivery
//     async getDeliveryForIDByZone(id: number) {
//         try {
//             const delivery = await this.deliveryRepository.findOne({
//                 where: { idDelivery: id },
//                 relations: ['zones'],
//             });

//             if (!delivery) {
//                 throw new Error('Delivery no encontrado');
//             }
//             return delivery.zones;
//         } catch (error) {
//             console.error(error);
//             throw new Error('Error al obtener las zonas del delivery');
//         }
//     }

}
