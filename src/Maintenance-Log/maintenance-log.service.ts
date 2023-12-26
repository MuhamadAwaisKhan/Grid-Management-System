// src/maintenance-log/maintenance-log.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaintenanceLogEntity } from './maintenance-log.entity';
import { CreateMaintenanceLogDto } from './dto/maintenance-log.dto';
import { FeederEntity } from 'src/feeder/feeder.entity';

import { scheduled } from 'rxjs';
import { NewEmployeeEntity } from 'src/Employee/newemployee.entity';

@Injectable()
export class MaintenanceLogService {
  constructor(
    @InjectRepository(NewEmployeeEntity)
    private readonly employeeRepository: Repository<NewEmployeeEntity>,

    @InjectRepository(FeederEntity)
    private readonly feederRepository: Repository<FeederEntity>,

    @InjectRepository(MaintenanceLogEntity)
    private readonly maintenanceLogRepository: Repository<MaintenanceLogEntity>,
  ) {}

  async create(createMaintenanceLogDto: CreateMaintenanceLogDto,
    feederId: number, // Accept feederId as an argument
    employeeId: number, // Accept feederId as an argument
    ): Promise<MaintenanceLogEntity| object
    > {
    const createdMaintenanceLog = this.maintenanceLogRepository.create(createMaintenanceLogDto);
  if (feederId) {
    const feeder = await this.feederRepository.findOneBy({feederId: feederId});
    if (!feeder) {
      throw new Error('Feeder not found');
    }
    createdMaintenanceLog.feeder = feeder;
  }

  if (employeeId) {
    const emplyee = await this.employeeRepository.findOneBy({employeeId: employeeId});
    if (!emplyee) {
      throw new Error('Feeder not found');
    }
    createdMaintenanceLog.employee = emplyee;
  }
  console.log('createdMaintenanceLog -> ', createdMaintenanceLog);
//   return {message: "In Development"}
  return await this.maintenanceLogRepository
    .save(createdMaintenanceLog)
    .then((res) => {
      return {
        message: 'MaintenanceLog Created Successfully',
        data: res,
      };
    })
    .catch((err) => {
      return {
        message: 'MaintenanceLog Created Successfully',
        data: null,
        error: err,
      };
    });
  }

//   async create(createMaintenanceLogDto: CreateMaintenanceLogDto,
//     employeeId: number, // Accept feederId as an argument
//     ): Promise<MaintenanceLogEntity| object
//     > { 
//     const createdMaintenanceLog = this.maintenanceLogRepository.create(createMaintenanceLogDto);
//   if (employeeId) {
//     const employee = await this.employeeRepository.findOneBy({employeeId: employeeId});
//     if (!employee) {
//       throw new Error('Employee not found');}
//     createdMaintenanceLog.employee = employee;
//   }
//   console.log('createdMaintenanceLog -> ', createdMaintenanceLog);
// //   return {message: "In Development"}
//   return await this.maintenanceLogRepository
//     .save(createdMaintenanceLog)
//     .then((res) => {
//       return {
//         message: 'MaintenanceLog Created Successfully',
//         data: res,
//       };
//     })
//     .catch((err) => {
//       return {
//         message: 'MaintenanceLog Created Successfully',
//         data: null,
//         error: err,
//       };
//     });
//   }

  async findAll(): Promise<MaintenanceLogEntity[]> {
    return await this.maintenanceLogRepository.find({ 
      relations:['feeder','employee','circuitBreakers','schedule']
    });
  }

  async findOne(id: number): Promise<MaintenanceLogEntity> {
    return await this.maintenanceLogRepository.findOne({where:{mainId:id}, relations:['feeder','employee','circuitBreakers','schedule']});
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
