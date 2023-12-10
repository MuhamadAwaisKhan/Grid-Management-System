import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";

import { PowerMeterEntity } from "src/powermeter/power-meter.entity";
import { PowerMeterController } from "src/powermeter/power-meter.controller";
import { PowerMeterService } from "src/powermeter/power-meter.service";
import { FeederEntity } from "src/feeder/feeder.entity";
import { PowerOutageEntity } from "./power-outage.entity";
import { PowerOutageService } from "./power-outage.service";
import { PowerOutageController } from "./power-outage.controller";

@ Module({
    imports: [TypeOrmModule.forFeature([PowerOutageEntity,FeederEntity])],
    controllers: [PowerOutageController],
    providers: [PowerOutageService],
  })
  export class poweroutagemodule {}
  