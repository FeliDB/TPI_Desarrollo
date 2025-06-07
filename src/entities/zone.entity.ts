<<<<<<< HEAD
// import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
// import { locationEntity } from './location.entity';
// import { deliveryEntity } from './location.entity';

// @Entity('Zone')
// export class zoneEntity extends BaseEntity {
//     @PrimaryGeneratedColumn()
//     idZone: number;

//     @Column()
//     radius: number;

//     @Column()
//     name: string;

//     @OneToOne(() => locationEntity)
//     @JoinColumn() // Esto indica que `Zone` tendrá la foreign key
//     location: locationEntity;

//     @OneToMany(() => deliveryEntity, delivery => delivery.zone)
//     deliveries: deliveryEntity[];

    
// }
=======
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { locationEntity } from './location.entity';
import { deliveryEntity } from './delivery.entity';

@Entity('zone')
export class zoneEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idZone: number;

    @Column()
    name: string;

    @Column('float')
    radius: number;

    @ManyToOne(() => locationEntity, (location) => location.zones)
    location: locationEntity;

    @OneToMany(() => deliveryEntity, (delivery) => delivery.zone)
    deliveries: deliveryEntity[];
}
>>>>>>> main
