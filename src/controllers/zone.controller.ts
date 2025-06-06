import { Body, Controller, Post, Get, Put, Param, Patch, Delete } from '@nestjs/common';
import { ZoneService } from '../services/zone.service';
import { identity } from 'rxjs';

@Controller('zone')
export class ZoneController {

    constructor(private zoneService: ZoneService){}
    @Post()
    postZone(@Body() body: any){
        return this.zoneService.postZone(body);
    }

    @Get()
    getZone(){
        return this.zoneService.getZone();
    }

    @Get(":id")
    getZoneId(@Param("id") id: number){
        return this.zoneService.getZoneId(id);
    }

    @Put(":id")
    putZone(@Param("id") id: number, @Body() body: any){
        return this.zoneService.putZone(id, body);
    }

    @Patch(":id")
    patchZone(@Param("id") id: number, @Body() body: any){
        return this.zoneService.patchZone(id, body);
    }

    @Delete(":id")
    deleteZone(@Param("id") id: number){
        return this.zoneService.deleteZone(id);
    }

}