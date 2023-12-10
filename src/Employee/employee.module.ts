import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { EmployeeEntity } from "./employee.entity";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";
import { SubstationEntity } from "src/substation/substation.entity";
import { MaintenanceLogEntity } from "src/Maintenance-Log/maintenance-log.entity";


@ Module({
    imports: [TypeOrmModule.forFeature([EmployeeEntity,SubstationEntity,MaintenanceLogEntity])],
    controllers: [EmployeeController],
    providers: [EmployeeService],
  })
  export class employeemodule {}
  

