import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne } from 'typeorm';

@Entity('delivery') // Nombre de la tabla en la base de datos
export class Delivery {
  @PrimaryGeneratedColumn()
  idDelivery: number;

  @Column()
  name_delivery: string;

  @Column()
  lastname: string;

  @Column()
  cuit: string;

  @Column()
  location_delivery: string;

  @Column()
  radius: number;

  @Column()
  status: string;

}