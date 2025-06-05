import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { locationEntity } from './location.entity';
import { deliveryEntity } from './delivery.entity';

@Entity('zone')
export class zoneEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idZone: number;

    @Column()
    name: string;

    @Column('float')
    radius: number;

    @ManyToOne(() => locationEntity, (location) => location.zones)
    location: locationEntity;

    @OneToMany(() => deliveryEntity, (delivery) => delivery.zone)
    deliveries: deliveryEntity[];
}