import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { deliveryEntity } from './delivery.entity';

@Entity('location')
export class locationEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idLocation: number;
    @Column('float')
    lat: number;
    @Column('float')
    lng: number;
}

export { deliveryEntity };