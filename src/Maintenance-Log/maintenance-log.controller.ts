// src/maintenance-log/maintenance-log.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { MaintenanceLogService } from './maintenance-log.service';
import { CreateMaintenanceLogDto } from './dto/maintenance-log.dto';
import { MaintenanceLogEntity } from './maintenance-log.entity';
@UsePipes(ValidationPipe)
@Controller('maintenance-log')
export class MaintenanceLogController {
  constructor(private readonly maintenanceLogService: MaintenanceLogService) {}
  @Post(':feederId')
  async create(
    @Body() createMaintenanceLogDto: CreateMaintenanceLogDto,
      @Param('feederId') feederId: number,
      ) {
    return this.maintenanceLogService.create(createMaintenanceLogDto,feederId);
  }
  // @Post(':employeeId')
  // async create(
  //   @Body() createMaintenanceLogDto: CreateMaintenanceLogDto,
  //   @Param('employeeId') employeeId: number,
  // ) {
  //   return this.maintenanceLogService.create(createMaintenanceLogDto, employeeId);
  // }
 
  @Get()
  async findAll(): Promise<MaintenanceLogEntity[]> {
    return this.maintenanceLogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MaintenanceLogEntity> {
    return this.maintenanceLogService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMaintenanceLogDto: CreateMaintenanceLogDto,
  ) {
    return this.maintenanceLogService.update(+id, updateMaintenanceLogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string){
     this.maintenanceLogService.remove(+id);
      return {message:"MaintenanceLog Deleted Successfully"}
  }
}
