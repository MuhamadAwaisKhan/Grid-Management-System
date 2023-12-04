// src/schedule-maintenance/schedule-maintenance.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ScheduleMaintenanceService } from './schedule-maintenance.service';
import { CreateScheduleMaintenanceDto } from './dto/schedule-maintenance.dto';
import { ScheduleMaintenanceEntity } from './schedule-maintenance.entity';
@UsePipes(ValidationPipe)
@Controller('schedule-maintenance')
export class ScheduleMaintenanceController {
  constructor(private readonly scheduleMaintenanceService: ScheduleMaintenanceService) {}

  @Post()
  async create(@Body() createScheduleMaintenanceDto: CreateScheduleMaintenanceDto): Promise<ScheduleMaintenanceEntity> {
    return this.scheduleMaintenanceService.create(createScheduleMaintenanceDto);
  }

  @Get()
  async findAll(): Promise<ScheduleMaintenanceEntity[]> {
    return this.scheduleMaintenanceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ScheduleMaintenanceEntity> {
    return this.scheduleMaintenanceService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateScheduleMaintenanceDto: CreateScheduleMaintenanceDto,
  ): Promise<ScheduleMaintenanceEntity> {
    return this.scheduleMaintenanceService.update(+id, updateScheduleMaintenanceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.scheduleMaintenanceService.remove(+id);
  }
}
