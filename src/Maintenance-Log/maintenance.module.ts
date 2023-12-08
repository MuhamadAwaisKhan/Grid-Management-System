import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { MaintenanceLogEntity } from "./maintenance-log.entity";
import { MaintenanceLogController } from "./maintenance-log.controller";
import { MaintenanceLogService } from "./maintenance-log.service";
import { ScheduleMaintenanceEntity } from "src/Schedule-Maintenance/schedule-maintenance.entity";
@Module({
    imports: [TypeOrmModule.forFeature([MaintenanceLogEntity,ScheduleMaintenanceEntity])],
    controllers: [MaintenanceLogController],
    providers: [MaintenanceLogService],
  })
  export class maintenancemodule {}
  