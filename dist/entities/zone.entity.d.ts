import { BaseEntity } from 'typeorm';
import { locationEntity } from './location.entity';
import { deliveryEntity } from './location.entity';
export declare class zoneEntity extends BaseEntity {
    idZone: number;
    radius: number;
    name: string;
    location: locationEntity;
    deliveries: deliveryEntity[];
}
