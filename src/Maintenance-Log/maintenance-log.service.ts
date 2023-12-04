// src/maintenance-log/maintenance-log.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaintenanceLogEntity } from './maintenance-log.entity';
import { CreateMaintenanceLogDto } from './dto/maintenance-log.dto';

@Injectable()
export class MaintenanceLogService {
  constructor(
    @InjectRepository(MaintenanceLogEntity)
    private readonly maintenanceLogRepository: Repository<MaintenanceLogEntity>,
  ) {}

  async create(createMaintenanceLogDto: CreateMaintenanceLogDto): Promise<MaintenanceLogEntity> {
    const maintenanceLog = this.maintenanceLogRepository.create(createMaintenanceLogDto);
    return await this.maintenanceLogRepository.save(maintenanceLog);
  }

  async findAll(): Promise<MaintenanceLogEntity[]> {
    return await this.maintenanceLogRepository.find();
  }

  async findOne(id: number): Promise<MaintenanceLogEntity> {
    return await this.maintenanceLogRepository.findOne({where:{mainId:id}});
  }

  async update(id: number, updateMaintenanceLogDto: CreateMaintenanceLogDto): Promise<MaintenanceLogEntity> {
    const maintenanceLog = await this.maintenanceLogRepository.findOne({where:{mainId:id}});
    if (!maintenanceLog) {
      throw new Error('MaintenanceLog not found');
    }

    this.maintenanceLogRepository.merge(maintenanceLog, updateMaintenanceLogDto);
    return await this.maintenanceLogRepository.save(maintenanceLog);
  }

  async remove(id: number): Promise<void> {
    await this.maintenanceLogRepository.delete(id);
  }
}
