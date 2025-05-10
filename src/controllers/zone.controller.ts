import { Body, Controller, Post, Get } from '@nestjs/common';
import { ZoneService } from '../services/zone.service';

@Controller('zone')
export class ZoneController {

    constructor(private zoneService: ZoneService){}
    @Post()
    postZonaEntrega(@Body() body: any){
        return this.zoneService.postZonaEntrega(body);
    }

}