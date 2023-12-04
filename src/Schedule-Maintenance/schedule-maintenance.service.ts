// src/schedule-maintenance/schedule-maintenance.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleMaintenanceEntity } from './schedule-maintenance.entity';
import { CreateScheduleMaintenanceDto } from './dto/schedule-maintenance.dto';

@Injectable()
export class ScheduleMaintenanceService {
  constructor(
    @InjectRepository(ScheduleMaintenanceEntity)
    private readonly maintenanceRepository: Repository<ScheduleMaintenanceEntity>,
  ) {}

  async create(createMaintenanceDto: CreateScheduleMaintenanceDto): Promise<ScheduleMaintenanceEntity> {
    const maintenance = this.maintenanceRepository.create(createMaintenanceDto);
    return await this.maintenanceRepository.save(maintenance);
  }

  async findAll(): Promise<ScheduleMaintenanceEntity[]> {
    return await this.maintenanceRepository.find();
  }

  async findOne(id: number): Promise<ScheduleMaintenanceEntity> {
    return await this.maintenanceRepository.findOne({where:{maintenanceId:id}});
  }

  async update(id: number, updateMaintenanceDto: CreateScheduleMaintenanceDto): Promise<ScheduleMaintenanceEntity> {
    const maintenance = await this.maintenanceRepository.findOne({where:{maintenanceId:id}});
    if (!maintenance) {
      throw new Error('Maintenance record not found');
    }

    this.maintenanceRepository.merge(maintenance, updateMaintenanceDto);
    return await this.maintenanceRepository.save(maintenance);
  }

  async remove(id: number): Promise<void> {
    await this.maintenanceRepository.delete(id);
  }
}
