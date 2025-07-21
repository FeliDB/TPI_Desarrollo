import { Repository } from 'typeorm';
import { zoneEntity } from '../entities/zone.entity';
import { locationEntity } from '../entities/location.entity';
export declare class ZoneService {
    private zoneRepository;
    private locationRepository;
    constructor(zoneRepository: Repository<zoneEntity>, locationRepository: Repository<locationEntity>);
    postZone(body: any): Promise<zoneEntity>;
    getZones(): Promise<zoneEntity[]>;
    getZone(id: number): Promise<zoneEntity | null>;
    putZone(id: number, body: any): Promise<zoneEntity>;
    patchZone(id: number, body: any): Promise<zoneEntity>;
    deleteZone(id: number): Promise<{
        message: string;
    }>;
}
