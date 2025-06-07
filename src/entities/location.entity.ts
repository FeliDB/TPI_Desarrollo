<<<<<<< HEAD
// import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
// import { deliveryEntity } from './delivery.entity';
// import { zoneEntity } from './zone.entity';

// @Entity('Location')
// export class locationEntity extends BaseEntity {
//     @PrimaryGeneratedColumn()
//     idLocation: number;
//     @Column('float')
//     lat: number;
//     @Column('float')
//     lng: number;

//     @OneToMany(() => deliveryEntity, (delivery) => delivery.status)
//     deliveries: deliveryEntity[];

//     @OneToMany(() => zoneEntity, (zone) => zone.location)
//     zones: zoneEntity[]
// }

// export { deliveryEntity };
=======
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { deliveryEntity } from './delivery.entity';
import { zoneEntity } from './zone.entity';

@Entity('location')
export class locationEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    idLocation: number;

    @Column()
    nameLocation: string;

    @OneToMany(() => deliveryEntity, (delivery) => delivery.location)
    deliveries: deliveryEntity[];

    @OneToMany(() => zoneEntity, (zone) => zone.location)
    zones: zoneEntity[];
}
>>>>>>> main
