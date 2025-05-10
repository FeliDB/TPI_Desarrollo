import { Body, Controller, Post, Get, Put, Param, Patch, Delete } from '@nestjs/common';
import { ZoneService } from '../services/zone.service';
import { identity } from 'rxjs';

@Controller('zone')
export class ZoneController {

    constructor(private zoneService: ZoneService){}
    @Post()
    postZonaEntrega(@Body() body: any){
        return this.zoneService.postZonaEntrega(body);
    }

    @Get()
    getZonaEntrega(){
        return this.zoneService.getZonaEntrega();
    }

    @Put(':id')
    putZonaEntrega(@Param('id') id: number, @Body() body: any){
        return this.zoneService.putZonaEntrega(id, body);
    }

    @Patch(':id')
    patchZonaEntrega(@Param('id') id: number, @Body() body: any){
        return this.zoneService.patchZonaEntrega(id, body);
    }

    @Delete(':id')
    deleteZonaEntrega(@Param('id') id: number){
        return this.zoneService.deleteZonaEntrega(id);
    }

}