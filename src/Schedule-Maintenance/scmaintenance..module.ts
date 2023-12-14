import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { ScheduleMaintenanceEntity } from "./schedule-maintenance.entity";
import { ScheduleMaintenanceController } from "./schedule-maintenance.controller";
import { ScheduleMaintenanceService } from "./schedule-maintenance.service";
import { MaintenanceLogEntity } from "src/Maintenance-Log/maintenance-log.entity";
import { NewSubStationEntity } from "src/Substation/newsubstation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ScheduleMaintenanceEntity,MaintenanceLogEntity,NewSubStationEntity])],
    controllers: [ScheduleMaintenanceController],
    providers: [ScheduleMaintenanceService],
  })
  export class schedulemodule {}
  