import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { deliveryEntity } from './delivery.entity';
import { zoneEntity } from './zone.entity';

@Entity('location')
export class locationEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idLocation: number;

    @Column()
    lat: number;

    @Column()
    lng: number;

    @OneToMany(() => deliveryEntity, (delivery) => delivery.location)
    deliveries: deliveryEntity[];

    @OneToMany(() => zoneEntity, (zone) => zone.location)
    zones: zoneEntity[];
}
