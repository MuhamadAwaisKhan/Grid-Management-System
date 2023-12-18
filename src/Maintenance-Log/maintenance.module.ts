import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { MaintenanceLogEntity } from "./maintenance-log.entity";
import { MaintenanceLogController } from "./maintenance-log.controller";
import { MaintenanceLogService } from "./maintenance-log.service";
import { ScheduleMaintenanceEntity } from "src/Schedule-Maintenance/schedule-maintenance.entity";
import { FeederEntity } from "src/feeder/feeder.entity";
import { NewEmployeeEntity } from "src/Employee/newemployee.entity";

@Module({
    imports: [TypeOrmModule.forFeature([MaintenanceLogEntity,ScheduleMaintenanceEntity,FeederEntity,NewEmployeeEntity,ScheduleMaintenanceEntity] )],
    controllers: [MaintenanceLogController],
    providers: [MaintenanceLogService],
  })
  export class maintenancemodule {}
  