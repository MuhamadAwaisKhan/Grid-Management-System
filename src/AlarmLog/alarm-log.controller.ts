// src/alarm-log/alarm-log.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AlarmLogService } from './alarm-log.service';
import { CreateAlarmLogDto } from './dto/alarm-log.dto';
import { AlarmLogEntity } from './alarm-log.entity';

@UsePipes(ValidationPipe)
@Controller('alarm-log')
export class AlarmLogController {
  constructor(private readonly alarmLogService: AlarmLogService) {}

  @Post()
  async create(@Body() createAlarmLogDto: CreateAlarmLogDto): Promise<AlarmLogEntity> {
    return this.alarmLogService.create(createAlarmLogDto);
  }

  @Get()
  async findAll(): Promise<AlarmLogEntity[]> {
    return this.alarmLogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AlarmLogEntity> {
    return this.alarmLogService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAlarmLogDto: CreateAlarmLogDto,
  ): Promise<AlarmLogEntity> {
    return this.alarmLogService.update(+id, updateAlarmLogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.alarmLogService.remove(+id);
  }
}
