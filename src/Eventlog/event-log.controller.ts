// src/event-log/event-log.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventLogService } from './event-log.service';
import { CreateEventLogDto } from './dto/event-log.dto';
import { EventLogEntity } from './event-log.entity';
import { ApiTags } from '@nestjs/swagger';
@UsePipes(ValidationPipe)
@Controller('event-log')
@ApiTags('event-log')
export class EventLogController {
  constructor(private readonly eventLogService: EventLogService) {}
  @Post(':substationId')
  async create(
    @Body() createEventLogDto: CreateEventLogDto,
    @Param('substationId') substationId: number,
  ) {
    return this.eventLogService.create(createEventLogDto, substationId);
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
  ) {
    return this.eventLogService.update(+id, updateEventLogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.eventLogService.remove(+id);
  }
}
