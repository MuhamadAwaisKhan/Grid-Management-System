// src/alarm-log/alarm-log.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlarmLogEntity } from './alarm-log.entity';
import { CreateAlarmLogDto } from './dto/alarm-log.dto';

@Injectable()
export class AlarmLogService {
  constructor(
    @InjectRepository(AlarmLogEntity)
    private readonly alarmLogRepository: Repository<AlarmLogEntity>,
  ) {}

  async create(createAlarmLogDto: CreateAlarmLogDto): Promise<AlarmLogEntity> {
    const alarmLog = this.alarmLogRepository.create(createAlarmLogDto);
    return await this.alarmLogRepository.save(alarmLog);
  }

  async findAll(): Promise<AlarmLogEntity[]> {
    return await this.alarmLogRepository.find();
  }

  async findOne(id: number): Promise<AlarmLogEntity> {
    return await this.alarmLogRepository.findOne({where:{alarmId:id}});
  }

  async update(id: number, updateAlarmLogDto: CreateAlarmLogDto): Promise<AlarmLogEntity> {
    const alarmLog = await this.alarmLogRepository.findOne({where:{alarmId:id}});
    if (!alarmLog) {
      throw new Error('Alarm Log not found');
    }

    this.alarmLogRepository.merge(alarmLog, updateAlarmLogDto);
    return await this.alarmLogRepository.save(alarmLog);
  }

  async remove(id: number): Promise<void> {
    await this.alarmLogRepository.delete(id);
  }
}
