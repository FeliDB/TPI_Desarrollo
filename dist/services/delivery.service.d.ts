import { Repository } from 'typeorm';
import { deliveryEntity } from '../entities/delivery.entity';
import { locationEntity } from 'src/entities/location.entity';
export declare class DeliveryService {
    private deliveryRepository;
    private locationRepository;
    constructor(deliveryRepository: Repository<deliveryEntity>, locationRepository: Repository<locationEntity>);
}
