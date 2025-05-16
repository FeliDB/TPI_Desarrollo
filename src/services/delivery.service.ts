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
  ) {}

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
  async putDeliveryLocation(id: number, data: Partial<locationEntity>) {
    try {
      const delivery = await this.deliveryRepository.findOne({
        where: { idDelivery: id },
        relations: ['location'],
      });

      if (!delivery) {
        throw new Error('Delivery no encontrado');
      }

      // Actualizar solo los campos proporcionados en el cuerpo de la solicitud
      if (data.lat !== undefined) {
        delivery.location.lat = data.lat;
      }
      if (data.lng !== undefined) {
        delivery.location.lng = data.lng;
      }

      await this.locationRepository.save(delivery.location);

      // Guardar los cambios en la base de datos
      await this.deliveryRepository.save(delivery);


    //   const response = {
    //     idDelivery: delivery.idDelivery,
    //     personId: delivery.personId,
    //     location: {
    //         lat: delivery.location.lat,
    //         lng: delivery.location.lng,
    //     },
    //     radius: delivery.radius,
    //     status: delivery.status,
    // };
    return delivery;

    } catch (error) {
      console.error(error);
      throw new Error('Error al actualizar la ubicación del delivery');
    }
  }






}
