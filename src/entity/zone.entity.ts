import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne } from 'typeorm';

@Entity('zone') // Nombre de la tabla en la base de datos
export class Zone {
  @PrimaryGeneratedColumn()
  idZone: number;

  @Column()
  name_zone: string;

  @Column()
  radius: number;
  
  @Column()
  location_zone: number; //CAMBIAR A FORANEA

}