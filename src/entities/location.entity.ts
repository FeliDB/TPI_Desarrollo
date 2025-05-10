import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { deliveryEntity } from './delivery.entity';

@Entity('location')
export class locationEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idLocation: number;
    @Column('float')
    lat: number;
    @Column('float')
    lng: number;

    @OneToMany(() => deliveryEntity, (delivery) => delivery.location)
    delivery: deliveryEntity[];
}

export { deliveryEntity };