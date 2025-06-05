import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { deliveryEntity } from './delivery.entity';

@Entity('Status')
export class statusEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idStatus: number;

    @Column()
    status: string;

    @OneToMany(() => deliveryEntity, (delivery) => delivery.status)
    deliveries: deliveryEntity[];
}