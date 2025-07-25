import { Body, Controller, Post, Get, Put, Param, Patch, Delete, UseGuards, Headers} from '@nestjs/common';
import { stat } from 'fs';
import { DeliveryService } from '../services/delivery.service';


import { AuthGuard } from '../middlewares/auth.middleware';
import { Reflector } from '@nestjs/core';
import { Permissions } from 'src/middlewares/decorators/permissions.decorator';

export const Roles = Reflector.createDecorator<string[]>();



@Controller("delivery")
export class DeliveryController {

    constructor(private deliveryService: DeliveryService){}

    @Get()
    getDelivery(){
        return this.deliveryService.getDeliveries();
    }

    @Post()
    // @Roles(['admin']) 
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
    findByProximity(@Body() body: any) {
        return this.deliveryService.findByProximity(body);
    }

    @Roles(['admin']) 
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

