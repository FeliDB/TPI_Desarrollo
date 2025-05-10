import { Injectable } from '@nestjs/common';
import { ZoneController } from 'src/controller/zone.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Zone } from '../entity/zone.entity';


@Injectable()
export class ZoneService {
    constructor(
    @InjectRepository(Zone)
    private zoneRepository: Repository<Zone>,
  ) {}

  async postZone(data: Partial<Zone>) {
    const newZone = this.zoneRepository.create(data); // Crea la instancia (pero no guarda aún)
    return await this.zoneRepository.save(newZone);   // Guarda en la base de datos
  }
}
