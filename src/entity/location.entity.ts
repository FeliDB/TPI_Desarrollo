import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne } from 'typeorm';

@Entity('locations') // Nombre de la tabla en la base de datos
export class Location {
  @PrimaryGeneratedColumn()
  idLocation: number;

  @Column()
  lat: number;

  @Column()
  lng: number;

}