import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";

import { PowerMeterEntity } from "src/powermeter/power-meter.entity";
import { PowerMeterController } from "src/powermeter/power-meter.controller";
import { PowerMeterService } from "src/powermeter/power-meter.service";

@ Module({
    imports: [TypeOrmModule.forFeature([PowerMeterEntity])],
    controllers: [PowerMeterController],
    providers: [PowerMeterService],
  })
  export class poweroutagemodule {}
  