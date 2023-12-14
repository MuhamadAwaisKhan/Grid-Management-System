// src/schedule-maintenance/schedule-maintenance.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleMaintenanceEntity } from './schedule-maintenance.entity';
import { CreateScheduleMaintenanceDto } from './dto/schedule-maintenance.dto';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';

@Injectable()
export class ScheduleMaintenanceService {
  constructor(
    @InjectRepository(MaintenanceLogEntity)
    private readonly maintenanceLogRepository: Repository<MaintenanceLogEntity>,

    @InjectRepository(NewSubStationEntity)
    private readonly substationRepository: Repository<NewSubStationEntity>,
    @InjectRepository(ScheduleMaintenanceEntity)
    private readonly maintenanceRepository: Repository<ScheduleMaintenanceEntity>,
  ) {}

  async create(
    createMaintenanceDto: CreateScheduleMaintenanceDto,
    mainId: number, // Accept mainId as an argument
    substationId: number, // Accept substationId as an argument
  ): Promise<ScheduleMaintenanceEntity | object> {
    const createdMaintenance = this.maintenanceRepository.create(createMaintenanceDto);

    if (substationId) {
      const substation = await this.substationRepository.findOneBy({ id: substationId });
      if (!substation) {
        throw new Error('Substation not found');
      }
      createdMaintenance.substation = substation;
    }

    if (mainId) {
      const main = await this.maintenanceLogRepository.findOneBy({ mainId: mainId });
      if (!main) {
        throw new Error('Maintenance Log not found');
      }
      createdMaintenance.maintenanceLog = main;
    }

    console.log('createdMaintenance -> ', createdMaintenance);

    try {
      const savedMaintenance = await this.maintenanceRepository.save(createdMaintenance);
      return {
        message: 'Schedule Maintenance record Created Successfully',
        data: savedMaintenance,
      };
    } catch (err) {
      return {
        message: 'Failed to create Schedule Maintenance record',
        data: null,
        error: err.message || err,
      };
    }
  }

  async findAll(): Promise<ScheduleMaintenanceEntity[]> {
    return await this.maintenanceRepository.find({
      relations: ['substation','maintenanceLog'],
    });
  }

  async findOne(id: number): Promise<ScheduleMaintenanceEntity> {
    return await this.maintenanceRepository.findOne({where:{maintenanceId:id}});
  }

  async update(id: number, updateMaintenanceDto: CreateScheduleMaintenanceDto): Promise<ScheduleMaintenanceEntity | object > {
    const maintenance = await this.maintenanceRepository.findOne({where:{maintenanceId:id}});
    if (!maintenance) {
      throw new Error('Maintenance record not found');
    }

    this.maintenanceRepository.merge(maintenance, updateMaintenanceDto);
    const updatedschedule= await this.maintenanceRepository.save(maintenance);
    return {message: "Schdule Maintenance record updated successfully", data: updatedschedule};
  }

  async remove(id: number): Promise<object> {
    await this.maintenanceRepository.delete(id);
    return {message: "Schedule Maintenance record deleted successfully"};
  }
}
