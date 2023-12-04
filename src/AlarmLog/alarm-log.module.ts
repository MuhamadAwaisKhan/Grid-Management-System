import { TypeOrmModule } from "@nestjs/typeorm";
import { AlarmLogController } from "./alarm-log.controller";
import { AlarmLogEntity } from "./alarm-log.entity";
import { AlarmLogService } from "./alarm-log.service";
import { Module } from "@nestjs/common";

@ Module({
    imports: [TypeOrmModule.forFeature([AlarmLogEntity])],
    controllers: [AlarmLogController],
    providers: [AlarmLogService],
  })
  export class alarmmodule {}
  