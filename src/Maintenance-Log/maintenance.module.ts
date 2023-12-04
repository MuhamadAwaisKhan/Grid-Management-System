import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { MaintenanceLogEntity } from "./maintenance-log.entity";
import { MaintenanceLogController } from "./maintenance-log.controller";
import { MaintenanceLogService } from "./maintenance-log.service";
@Module({
    imports: [TypeOrmModule.forFeature([MaintenanceLogEntity])],
    controllers: [MaintenanceLogController],
    providers: [MaintenanceLogService],
  })
  export class maintenancemodule {}
  