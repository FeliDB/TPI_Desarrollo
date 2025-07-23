import { DeliveryService } from '../services/delivery.service';
export declare const Roles: import("@nestjs/core").ReflectableDecorator<string[], string[]>;
export declare class DeliveryController {
    private deliveryService;
    constructor(deliveryService: DeliveryService);
    getDelivery(): Promise<import("../entities/delivery.entity").deliveryEntity[]>;
    postDelivery(body: any): Promise<import("../entities/delivery.entity").deliveryEntity>;
    putDeliveryLocation(id: number, body: any): Promise<import("../entities/delivery.entity").deliveryEntity>;
    putDeliveryStatus(id: number, body: any): Promise<import("../entities/delivery.entity").deliveryEntity>;
    findByProximity(body: any): Promise<import("../entities/delivery.entity").deliveryEntity[]>;
    assignZone(id: number, body: any): Promise<import("../entities/delivery.entity").deliveryEntity>;
    findByZone(body: any): Promise<import("../entities/delivery.entity").deliveryEntity[]>;
    getZones(id: number): Promise<import("../entities/zone.entity").zoneEntity[]>;
    deleteDeliveryZone(id: number, zoneId: number): Promise<{
        message: string;
    }>;
    deleteDelivery(id: number): Promise<{
        message: string;
    }>;
}
