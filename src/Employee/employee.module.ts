import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { EmployeeEntity } from './employee.entity';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EmployeeEntity,
      NewSubStationEntity,
      MaintenanceLogEntity,
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class employeemodule {}
