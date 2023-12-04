import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { EmployeeEntity } from "./employee.entity";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";


@ Module({
    imports: [TypeOrmModule.forFeature([EmployeeEntity])],
    controllers: [EmployeeController],
    providers: [EmployeeService],
  })
  export class employeemodule {}
  

