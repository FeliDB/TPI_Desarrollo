import { Body, Controller, Post, Get, Put, Param, Patch, Delete } from '@nestjs/common';
import { stat } from 'fs';
import { DeliveryService } from 'src/services/delivery.service';


@Controller("delivery")
export class DeliveryController {

    constructor(private deliveryService: DeliveryService){}

    @Post()
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

    @Get()
    findByProximity(@Body() body: any){
        return this.deliveryService.findByProximity(body);
    }

}

