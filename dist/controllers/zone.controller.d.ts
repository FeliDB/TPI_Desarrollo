import { ZoneService } from '../services/zone.service';
export declare class ZoneController {
    private zoneService;
    constructor(zoneService: ZoneService);
    postZonaEntrega(body: any): Promise<import("../entities/zone.entity").zoneEntity>;
    getZonaEntrega(): Promise<import("../entities/zone.entity").zoneEntity[]>;
    putZonaEntrega(id: number, body: any): Promise<import("../entities/zone.entity").zoneEntity>;
    patchZonaEntrega(id: number, body: any): Promise<import("../entities/zone.entity").zoneEntity>;
    deleteZonaEntrega(id: number): Promise<{
        message: string;
    }>;
}
