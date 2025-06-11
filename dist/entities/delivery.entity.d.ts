import { zoneEntity } from './zone.entity';
import { locationEntity } from './location.entity';
export declare class deliveryEntity {
    idDelivery: number;
    personId: number;
    radius: number;
    status: string;
    zones: zoneEntity[];
    location: locationEntity;
}
