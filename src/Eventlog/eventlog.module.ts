import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { EventLogEntity } from "./event-log.entity";
import { EventLogController } from "./event-log.controller";
import { EventLogService } from "./event-log.service";
import { NewSubStationEntity } from "src/Substation/newsubstation.entity";


@ Module({
    imports: [TypeOrmModule.forFeature([EventLogEntity,NewSubStationEntity])],
    controllers: [EventLogController],
    providers: [EventLogService],
  })
  export class eventmodule {}
  