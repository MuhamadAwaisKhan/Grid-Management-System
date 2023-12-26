// src/event-log/event-log.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventLogEntity } from './event-log.entity';
import { CreateEventLogDto } from './dto/event-log.dto';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';


@Injectable()
export class EventLogService {
  constructor(
    @InjectRepository(NewSubStationEntity)
    private readonly substationRepository: Repository<NewSubStationEntity>,

    @InjectRepository(EventLogEntity)
    private readonly eventLogRepository: Repository<EventLogEntity>,
  ) {}

  async create(
    createEventLogDto: CreateEventLogDto,
    substationId: number, // Accept substationId as an argument
    ): Promise<EventLogEntity
    |object> {
    const createdEventLog = this.eventLogRepository.create(createEventLogDto);
  if (substationId) {
    const substation = await this.substationRepository.findOneBy(
      { id: substationId },
    );
    if (!substation) {
      throw new Error('Substation not found');
    }
     createdEventLog.substation = substation;
  }
  console.log('createdEventLog -> ', createdEventLog);
  // return {message: "In Development"}
  return await this.eventLogRepository
    .save(createdEventLog)
    .then((res) => {
      return {
        message: 'EventLog Created Successfully',
        data: res,
      };
    })
    .catch((err) => {
      return {
        message: 'EventLog Created Successfully',
        data: null,
        error: err,
      };
    });
  }

  async findAll(): Promise<EventLogEntity[]> {
    return await this.eventLogRepository.find({ relations: ['substation']});
  }

  async findOne(id: number): Promise<EventLogEntity> {
    return await this.eventLogRepository.findOne({ where: { eventId: id },relations: ['substation'] });
  }

  async update(
    id: number,
    updateEventLogDto: CreateEventLogDto,
  ): Promise<EventLogEntity> {
    const eventLog = await this.eventLogRepository.findOne({
      where: { eventId: id },
    });
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
