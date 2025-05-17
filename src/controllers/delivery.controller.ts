import { Body, Controller, Post, Get, Put, Param, Patch, Delete } from '@nestjs/common';
import { DeliveryService } from 'src/services/delivery.service';


@Controller("delivery")
export class DeliveryController {

    constructor(private deliveryService: DeliveryService){}
    @Post()
    postDelivery(@Body() body: any){
        return this.deliveryService.postDelivery(body);
    }

    @Put(":id/location")
    putDeliveryLocation(@Param('id') id: number, @Body() body: any){
        console.log('PUT /delivery/:id/location called with id:', id, 'body:', body);
        return this.deliveryService.putDeliveryLocation(id, body);
    }

    @Put(":id/status")
    putDeliveryStatus(@Param('id') id: number, @Body() body: any){
        return this.deliveryService.putDeliveryStatus(id, body);
    }

    @Get("findByProximity")
    getDeliveryByProximity(@Body() body: any){
        return this.deliveryService.getDeliveryByProximity(body);
    }

    @Get("findByZone")
    getDeliveryByZone(@Body() body: any){
        return this.deliveryService.getDeliveryByZone(body);
    }

    @Post(':id/assignZone')
    assignZone(@Param('id') id: number, @Body() body: any){
        return this.deliveryService.assignZone(id, body);
    }

}

