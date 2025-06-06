import { Body, Controller, Post, Get, Put, Param, Patch, Delete } from '@nestjs/common';
import { stat } from 'fs';
import { DeliveryService } from 'src/services/delivery.service';


@Controller("delivery")
export class DeliveryController {

    constructor(private deliveryService: DeliveryService){}

}

