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

  async postZone(body: any) {
    const { name, location } = body;
    const newZone = this.zoneRepository.create({
      name,
      location,
    });
    return this.zoneRepository.save(newZone);
  }

  async getZone() {
    return this.zoneRepository.find();
  }

  async getZoneId(id: number) {
    return this.zoneRepository.findOne({
      where: { idZone: id },
      relations: ['location'],
    });
  }

  async putZone(id: number, body: any) {
    const { name, location } = body;
    const zone = await this.zoneRepository.findOne({
      where: { idZone: id },
      relations: ['location'],
    });
    if (!zone) {
      throw new Error('Zone not found');
    }
    zone.name = name;
    zone.location = location;
    return this.zoneRepository.save(zone);
  }

  async patchZone(id: number, body: any) {
    const zone = await this.zoneRepository.findOne({
      where: { idZone: id },
      relations: ['location'],
    });
    if (!zone) {
      throw new Error('Zone not found');
    }
    const { name, location } = body;
    if (name) {
      zone.name = name;
    }
    if (location) {
      zone.location = location;
    }
    return this.zoneRepository.save(zone);
  }

  async deleteZone(id: number) {
    const zone = await this.zoneRepository.findOne({
      where: { idZone: id },
      relations: ['location'],
    });
    if (!zone) {
      throw new Error('Zone not found');
    }
    return this.zoneRepository.remove(zone);
  }

}