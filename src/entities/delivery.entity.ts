import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { locationEntity } from './location.entity';
import { statusEntity } from './status.entitiy';
import { zoneEntity } from './zone.entity';

@Entity('delivery')
export class deliveryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idDelivery: number;

    @Column('float')
    radius: number;

    @ManyToOne(() => statusEntity, (status) => status.deliveries)
    status: statusEntity;

    @ManyToOne(() => locationEntity, (location) => location.deliveries)
    location: locationEntity;

    @ManyToOne(() => zoneEntity, (zone) => zone.deliveries)
    zone: zoneEntity;
}

