import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { locationEntity } from './location.entity';

@Entity('zone')
export class zoneEntity {
  @PrimaryGeneratedColumn()
  idZone: number;

  @Column()
  name: string;

  @Column('float')
  radius: number;

  @ManyToOne(() => locationEntity)
  @JoinColumn({ name: 'location' })
  location: locationEntity;
}
