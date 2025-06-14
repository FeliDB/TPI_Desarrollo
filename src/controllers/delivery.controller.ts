import { Body, Controller, Post, Get, Put, Param, Patch, Delete, UseGuards} from '@nestjs/common';
import { stat } from 'fs';
import { DeliveryService } from 'src/services/delivery.service';


import { AuthGuard } from 'src/middlewares/auth.middleware';
import { Reflector } from '@nestjs/core';
import { Permissions } from 'src/middlewares/decorators/permissions.decorator';

export const Roles = Reflector.createDecorator<string[]>();



@Controller("delivery")
export class DeliveryController {

    constructor(private deliveryService: DeliveryService){}

    @Post()
    @Roles(['admin']) //Verificar
    postDelivery(@Body() body: any){
        return this.deliveryService.postDelivery(body);
    }

    @Put(":id/location")
    putDeliveryLocation(@Param("id") id: number, @Body() body: any){
        return this.deliveryService.putDeliveryLocation(id, body);
    }

    @Put(":id/status")
    putDeliveryStatus(@Param("id") id: number, @Body() body: any){
        return this.deliveryService.putDeliveryStatus(id, body);
    }
    
    @UseGuards(AuthGuard)
    @Get("findByProximity")
    findByProximity(@Body() body: any){
        return this.deliveryService.findByProximity(body);
    }

    @Post(":id/assignZone")
    assignZone(@Param("id") id: number, @Body() body: any){
        return this.deliveryService.assignZone(id, body);
    }
    @UseGuards(AuthGuard)

    @Get("findByZone")
    findByZone(@Body() body: any){
        return this.deliveryService.findByZone(body);
    }
    
    @UseGuards(AuthGuard)
    @Get(":id/zones")
    getZones(@Param("id") id: number){
        return this.deliveryService.getZones(id);
    }

    @Delete(":id/zone/:zoneId")
    deleteDeliveryZone(@Param("id") id: number, @Param("zoneId") zoneId: number){
        return this.deliveryService.deleteDeliveryZone(id, zoneId);
    }

    @Delete(":id")
    deleteDelivery(@Param("id") id: number){
        return this.deliveryService.deleteDelivery(id);
    }

}

