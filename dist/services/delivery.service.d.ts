import { Repository } from 'typeorm';
import { deliveryEntity } from '../entities/delivery.entity';
import { locationEntity } from '../entities/location.entity';
import { zoneEntity } from '../entities/zone.entity';
export declare class DeliveryService {
    private deliveryRepository;
    private locationRepository;
    private zoneRepository;
    constructor(deliveryRepository: Repository<deliveryEntity>, locationRepository: Repository<locationEntity>, zoneRepository: Repository<zoneEntity>);
    postDelivery(body: any): Promise<deliveryEntity>;
    putDeliveryStatus(id: number, body: any): Promise<deliveryEntity>;
    putDeliveryLocation(id: number, body: any): Promise<deliveryEntity>;
    findByProximity(body: any): Promise<deliveryEntity[]>;
    assignZone(id: number, body: any): Promise<deliveryEntity>;
    findByZone(body: any): Promise<deliveryEntity[]>;
    getZones(id: number): Promise<zoneEntity[]>;
    deleteDeliveryZone(idDelivery: number, zoneId: number): Promise<{
        message: string;
    }>;
    deleteDelivery(id: number): Promise<{
        message: string;
    }>;
    getDeliveries(): Promise<deliveryEntity[]>;
}
