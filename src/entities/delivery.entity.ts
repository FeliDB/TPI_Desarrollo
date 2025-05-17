import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { locationEntity } from './location.entity';
import { zoneEntity } from './zone.entity';

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

    @OneToOne(() => locationEntity, {cascade: true})
    @JoinColumn() // Esto indica que `Zone` tendrá la foreign key
    location: locationEntity;

    @ManyToMany(() => zoneEntity, (zone) => zone.deliveries, { cascade: true })
    @JoinTable()
    zones: zoneEntity[];

}