import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne } from 'typeorm';

@Entity('provinces') // Nombre de la tabla en la base de datos
export class Province {
  @PrimaryGeneratedColumn()
  idProvince: number;

  @Column()
  name_province: string;

  @Column()
  description_province: string;

    @Column()
  location_province: string; //CAMBIAR A FORANEA

}