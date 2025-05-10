import { Injectable } from '@nestjs/common';
import { ZoneController } from 'src/controllers/zone.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { zoneEntity } from '../entities/zone.entity';


@Injectable()
export class ZoneService {
    constructor(
    @InjectRepository(zoneEntity)
    private zoneRepository: Repository<zoneEntity>,
  ) {}

  async postZonaEntrega(data: Partial<zoneEntity>) {
    const newZone = this.zoneRepository.create(data); // Crea la instancia (pero no guarda aún)
    return await this.zoneRepository.save(newZone);   // Guarda en la base de datos
  }
}