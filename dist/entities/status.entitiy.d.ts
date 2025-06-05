import { BaseEntity } from 'typeorm';
import { deliveryEntity } from './delivery.entity';
export declare class statusEntity extends BaseEntity {
    idStatus: number;
    status: string;
    deliveries: deliveryEntity[];
}
