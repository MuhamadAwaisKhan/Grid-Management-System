import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { ScheduleMaintenanceEntity } from "./schedule-maintenance.entity";
import { ScheduleMaintenanceController } from "./schedule-maintenance.controller";
import { ScheduleMaintenanceService } from "./schedule-maintenance.service";

@Module({
    imports: [TypeOrmModule.forFeature([ScheduleMaintenanceEntity])],
    controllers: [ScheduleMaintenanceController],
    providers: [ScheduleMaintenanceService],
  })
  export class schedulemodule {}
  