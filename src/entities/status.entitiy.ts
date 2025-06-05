import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { deliveryEntity } from './delivery.entity';

@Entity('status')
export class statusEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idStatus: number;

    @Column()
    status: string;

    @OneToMany(() => deliveryEntity, (delivery) => delivery.status)
    deliveries: deliveryEntity[];
}