import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZoneController } from './controller/zone.controller';
import { ZoneService } from './service/zone.service';
import { DeliveryController } from './controller/delivery.controller';
import { DeliveryService } from './service/delivery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from './entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'deliverydb',
      username: 'felipe',
      password: 'dni44900185',
      synchronize: true,
      entities: Object.values(entities),
      port: 5432,
      host: 'localhost',
    }),
    TypeOrmModule.forFeature(Object.values(entities)) // entidades por cada modulo
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }