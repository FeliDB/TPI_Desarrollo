import { Body, Controller, Post, Get } from '@nestjs/common';
import { ZoneService } from '../service/zone.service';

@Controller('zone')
export class ZoneController {

    constructor(private zoneService: ZoneService){}
    @Post()
    postZonaEntrega(@Body() body: any){
        return this.zoneService.postZone(body);
    }

    // @Get()
    // getZonaEntrega(){
    //     return this.zoneService.getZone();
    // }
}
