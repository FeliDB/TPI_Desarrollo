import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { locationEntity } from './location.entity';

@Entity('delivery')
export class deliveryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idDelivery: number;

    @Column()
    personId: number;

    @Column()
    radius: number;

    @Column()
    status: string;

    @ManyToMany(() => locationEntity, (location) => location.delivery)
    location: locationEntity;
}