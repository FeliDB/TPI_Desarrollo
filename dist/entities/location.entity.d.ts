import { BaseEntity } from 'typeorm';
import { deliveryEntity } from './delivery.entity';
import { zoneEntity } from './zone.entity';
export declare class locationEntity extends BaseEntity {
    idLocation: number;
    lat: number;
    lng: number;
    deliveries: deliveryEntity[];
    zones: zoneEntity[];
}
export { deliveryEntity };
