// src/event-log/event-log.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventLogService } from './event-log.service';
import { CreateEventLogDto } from './dto/event-log.dto';
import { EventLogEntity } from './event-log.entity';
@UsePipes(ValidationPipe)
@Controller('event-log')
export class EventLogController {
  constructor(private readonly eventLogService: EventLogService) {}

  @Post()
  async create(@Body() createEventLogDto: CreateEventLogDto): Promise<EventLogEntity> {
    return this.eventLogService.create(createEventLogDto);
  }

  @Get()
  async findAll(): Promise<EventLogEntity[]> {
    return this.eventLogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EventLogEntity> {
    return this.eventLogService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventLogDto: CreateEventLogDto,
  ): Promise<EventLogEntity> {
    return this.eventLogService.update(+id, updateEventLogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.eventLogService.remove(+id);
  }
}
