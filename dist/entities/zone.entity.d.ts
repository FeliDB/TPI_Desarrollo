import { locationEntity } from './location.entity';
import { deliveryEntity } from './delivery.entity';
export declare class zoneEntity {
    idZone: number;
    name: string;
    radius: number;
    location: locationEntity;
    deliveries: deliveryEntity[];
}
