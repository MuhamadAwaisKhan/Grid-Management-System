import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';

import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';
import { NewEmployeeEntity } from './newemployee.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NewEmployeeEntity,
      NewSubStationEntity,
      MaintenanceLogEntity,
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class employeemodule {}
