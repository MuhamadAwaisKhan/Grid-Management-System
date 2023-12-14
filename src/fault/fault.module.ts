import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { FaultEntity } from "./fault.entity";
import { FaultController } from "./fault.controller";
import { FaultService } from "./fault.service";
import { NewSubStationEntity } from "src/Substation/newsubstation.entity";



@ Module({
    imports: [TypeOrmModule.forFeature([FaultEntity,NewSubStationEntity])],
    controllers: [FaultController],
    providers: [FaultService],
  })
  export class faultmodule {}
  