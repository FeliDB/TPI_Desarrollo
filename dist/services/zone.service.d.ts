import { Repository } from 'typeorm';
import { zoneEntity } from '../entities/zone.entity';
import { locationEntity } from 'src/entities/location.entity';
export declare class ZoneService {
    private zoneRepository;
    private locationRepository;
    constructor(zoneRepository: Repository<zoneEntity>, locationRepository: Repository<locationEntity>);
    postZonaEntrega(data: Partial<zoneEntity>): Promise<zoneEntity>;
    getZonaEntrega(): Promise<zoneEntity[]>;
    putZonaEntrega(id: number, data: Partial<zoneEntity>): Promise<zoneEntity>;
    patchZonaEntrega(id: number, data: Partial<zoneEntity>): Promise<zoneEntity>;
    deleteZonaEntrega(id: number): Promise<{
        message: string;
    }>;
}
