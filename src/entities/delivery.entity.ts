import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { zoneEntity } from './zone.entity';
import { locationEntity } from './location.entity';

@Entity('delivery')
export class deliveryEntity {
  @PrimaryGeneratedColumn()
  idDelivery: number;

  @Column()
  personId: number;

  @Column('float')
  radius: number;

  @Column({default: "avaliable"})
  status: string;

  @ManyToOne(() => zoneEntity, {nullable: true})
  @JoinColumn({ name: 'zone' })
  zone: zoneEntity;

  @ManyToOne(() => locationEntity, )
  @JoinColumn({ name: 'location' })
  location: locationEntity;
}
