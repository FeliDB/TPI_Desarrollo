import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { locationEntity } from './location.entity';
import { zoneEntity } from './zone.entity';
import { statusEntity } from './status.entitiy';

@Entity('Delivery')
export class deliveryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idDelivery: number;

    @Column()
    radius: number;

    @Column()
    personId: number;

    @ManyToOne(() => statusEntity, (status) => status.deliveries)
    status: statusEntity;

    @ManyToOne(() => locationEntity, (location) => location.deliveries)
    location: locationEntity;
    zone: any;
}