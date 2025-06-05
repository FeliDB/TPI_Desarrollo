import { BaseEntity } from 'typeorm';
import { locationEntity } from './location.entity';
import { statusEntity } from './status.entitiy';
export declare class deliveryEntity extends BaseEntity {
    idDelivery: number;
    radius: number;
    personId: number;
    status: statusEntity;
    location: locationEntity;
    zone: any;
}
