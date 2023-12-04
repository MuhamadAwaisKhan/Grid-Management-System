// src/event-log/event-log.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventLogEntity } from './event-log.entity';
import { CreateEventLogDto } from './dto/event-log.dto';

@Injectable()
export class EventLogService {
  constructor(
    @InjectRepository(EventLogEntity)
    private readonly eventLogRepository: Repository<EventLogEntity>,
  ) {}

  async create(createEventLogDto: CreateEventLogDto): Promise<EventLogEntity> {
    const eventLog = this.eventLogRepository.create(createEventLogDto);
    return await this.eventLogRepository.save(eventLog);
  }

  async findAll(): Promise<EventLogEntity[]> {
    return await this.eventLogRepository.find();
  }

  async findOne(id: number): Promise<EventLogEntity> {
    return await this.eventLogRepository.findOne({where:{eventId:id}});
  }

  async update(id: number, updateEventLogDto: CreateEventLogDto): Promise<EventLogEntity> {
    const eventLog = await this.eventLogRepository.findOne({where:{eventId:id}});
    if (!eventLog) {
      throw new Error('EventLog not found');
    }

    this.eventLogRepository.merge(eventLog, updateEventLogDto);
    return await this.eventLogRepository.save(eventLog);
  }

  async remove(id: number): Promise<void> {
    await this.eventLogRepository.delete(id);
  }
}
