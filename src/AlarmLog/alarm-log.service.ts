// src/alarm-log/alarm-log.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlarmLogEntity } from './alarm-log.entity';
import { CreateAlarmLogDto } from './dto/alarm-log.dto';
import { FeederEntity } from 'src/feeder/feeder.entity';

@Injectable()
export class AlarmLogService {
  constructor(
    @InjectRepository(FeederEntity)
    private readonly feederRepository: Repository<FeederEntity>,

    @InjectRepository(AlarmLogEntity)
    private readonly alarmLogRepository: Repository<AlarmLogEntity>,
  ) {}

  async create(createAlarmLogDto: CreateAlarmLogDto,
    feederId: number, 
    ): Promise<AlarmLogEntity | object> {
    const createdAlarmLog = this.alarmLogRepository.create(createAlarmLogDto);
  if (feederId) {
    const feeder = await this.feederRepository.findOneBy({feederId: feederId});
    if (!feeder) {
      throw new Error('Feeder not found');
    }
    createdAlarmLog.feeder = feeder;
  }
  console.log('createdAlarmLog -> ', createdAlarmLog);
//   return {message: "In Development"}

  return await this.alarmLogRepository
    .save(createdAlarmLog)
    .then((res) => {
      return {
        message: 'AlarmLog Created Successfully',
        data: res,
      };
    })
    .catch((err) => {
      return {
        message: 'AlarmLog Created Successfully',
        data: null,
        error: err,
      };
    });
  } 
  async findAll(): Promise<AlarmLogEntity[]> {
    return await this.alarmLogRepository.find({ relations: ['feeder']});
  }

  async findOne(id: number): Promise<AlarmLogEntity> {
    return await this.alarmLogRepository.findOne({ where: { alarmId: id },relations: ['feeder']  });
  }

  async update(
    id: number,
    updateAlarmLogDto: CreateAlarmLogDto,
  ): Promise<AlarmLogEntity|object > {
    const alarmLog = await this.alarmLogRepository.findOne({
      where: { alarmId: id },
    });
    if (!alarmLog) {
      throw new Error('Alarm Log not found');
    }

    this.alarmLogRepository.merge(alarmLog, updateAlarmLogDto);
    const updatedalarmlog= await this.alarmLogRepository.save(alarmLog);
return {
  message: 'Alarm Log Updated Successfully',data: updatedalarmlog,
  }
  }
  async remove(id: number): Promise<object> {
    await this.alarmLogRepository.delete(id);
    return {
      message: 'Alarm Log Deleted Successfully',
    };

  }
}
