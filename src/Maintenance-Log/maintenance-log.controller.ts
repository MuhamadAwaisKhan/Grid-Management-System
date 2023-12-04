// src/maintenance-log/maintenance-log.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { MaintenanceLogService } from './maintenance-log.service';
import { CreateMaintenanceLogDto } from './dto/maintenance-log.dto';
import { MaintenanceLogEntity } from './maintenance-log.entity';
@UsePipes(ValidationPipe)
@Controller('maintenance-log')
export class MaintenanceLogController {
  constructor(private readonly maintenanceLogService: MaintenanceLogService) {}

  @Post()
  async create(@Body() createMaintenanceLogDto: CreateMaintenanceLogDto): Promise<MaintenanceLogEntity> {
    return this.maintenanceLogService.create(createMaintenanceLogDto);
  }

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
  ): Promise<MaintenanceLogEntity> {
    return this.maintenanceLogService.update(+id, updateMaintenanceLogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.maintenanceLogService.remove(+id);
  }
}
