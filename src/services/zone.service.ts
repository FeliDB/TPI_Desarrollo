import { Injectable } from '@nestjs/common';
import { ZoneController } from 'src/controllers/zone.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { zoneEntity } from '../entities/zone.entity';
import { locationEntity } from 'src/entities/location.entity';


@Injectable()
export class ZoneService {
    constructor(
    @InjectRepository(zoneEntity)
    private zoneRepository: Repository<zoneEntity>,

    @InjectRepository(locationEntity)
    private locationRepository: Repository<locationEntity>, //
  ) {}


//POST
async postZonaEntrega(data: Partial<zoneEntity>) {
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
    const newZone = this.zoneRepository.create(data); // Crear la entidad zona
    return await this.zoneRepository.save(newZone);   // Guardar en la base de datos
  } catch (error) {
    console.error(error);
    throw new Error('Error al guardar la zona');
  }
}


//GET
async getZonaEntrega() {
  try {
    return await this.zoneRepository.find({ relations: ['location'] });
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener las zonas');
  }
}


//PUT
async putZonaEntrega(id: number, data:Partial<zoneEntity>) {
    const zone = await this.zoneRepository.findOne({
         where: { idZone: id },
         relations: ['location'],
        
    });

    if (!zone){
        throw new Error('Zona no encontrada')
    }

    zone.name = data.name ?? zone.name;
    zone.radius = data.radius ?? zone.radius;

    // Si incluye location, actualizá la entidad relacionada
    if (data.location) {
        if (zone.location) {
        zone.location.lat = data.location.lat ?? zone.location.lat;
        zone.location.lng = data.location.lng ?? zone.location.lng;
        await this.locationRepository.save(zone.location);
        } else {
        const newLoc = this.locationRepository.create(data.location);
        zone.location = await this.locationRepository.save(newLoc);
        }
    }

    return await this.zoneRepository.save(zone);

}

//PATCH

async patchZonaEntrega(id: number, data: Partial<zoneEntity>){
    try {
        const zone = await this.zoneRepository.findOne({ where: { idZone: id } });
        if (!zone) {
            throw new Error('Zona no encontrada');
        }

        // Actualizar solo los campos proporcionados en el cuerpo de la solicitud
        if (data.name !== undefined) {
            zone.name = data.name;
        }
        if (data.radius !== undefined) {
            zone.radius = data.radius;
        }

        // Guardar los cambios en la base de datos
        await this.zoneRepository.save(zone);

        return zone;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar la zona');
    }

}

//DELETE
async deleteZonaEntrega(id: number) {
    try {
        const zone = await this.zoneRepository.findOne({ where: { idZone: id } });
        if (!zone) {
            throw new Error('Zona no encontrada');
        }

        await this.zoneRepository.remove(zone);
        return { message: 'Zona eliminada correctamente' };
    } catch (error) {
        console.error(error);
        throw new Error('Error al eliminar la zona');
    }
}

}