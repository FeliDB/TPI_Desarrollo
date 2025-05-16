import { Body, Controller, Post, Get, Put, Param, Patch, Delete } from '@nestjs/common';
import { DeliveryService } from 'src/services/delivery.service';


@Controller()
export class DeliveryController {

    constructor(private deliveryService: DeliveryService){}
    @Post("delivery")
    postDelivery(@Body() body: any){
        return this.deliveryService.postDelivery(body);
    }

    @Put(":id/location")
    putDeliveryLocation(@Param('id') id: number, @Body() body: any){
        console.log('PUT /delivery/:id/location called with id:', id, 'body:', body);
        return this.deliveryService.putDeliveryLocation(id, body);
    }


}

