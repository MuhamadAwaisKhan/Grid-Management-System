import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { EventLogEntity } from "./event-log.entity";
import { EventLogController } from "./event-log.controller";
import { EventLogService } from "./event-log.service";

@ Module({
    imports: [TypeOrmModule.forFeature([EventLogEntity])],
    controllers: [EventLogController],
    providers: [EventLogService],
  })
  export class eventmodule {}
  