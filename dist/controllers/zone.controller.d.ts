import { ZoneService } from '../services/zone.service';
import { zoneEntity } from 'src/entities/zone.entity';
export declare class ZoneController {
    private zoneService;
    constructor(zoneService: ZoneService);
    postZone(body: any): Promise<zoneEntity>;
    getZones(): Promise<zoneEntity[]>;
    getZone(id: number): Promise<zoneEntity | null>;
    putZone(id: number, body: any): Promise<zoneEntity>;
    patchZone(id: number, body: any): Promise<zoneEntity>;
    deleteZone(id: number): Promise<{
        message: string;
    }>;
}
