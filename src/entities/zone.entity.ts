import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { locationEntity } from './location.entity';

@Entity('zone')
export class zoneEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idZone: number;

    @Column()
    radius: number;

    @Column()
    name: string;

    @OneToOne(() => locationEntity)
    @JoinColumn() // Esto indica que `Zone` tendrá la foreign key
    location: locationEntity;
}