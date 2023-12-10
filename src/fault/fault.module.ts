import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { FaultEntity } from "./fault.entity";
import { FaultController } from "./fault.controller";
import { FaultService } from "./fault.service";
import { SubstationEntity } from "src/substation/substation.entity";


@ Module({
    imports: [TypeOrmModule.forFeature([FaultEntity,SubstationEntity])],
    controllers: [FaultController],
    providers: [FaultService],
  })
  export class faultmodule {}
  