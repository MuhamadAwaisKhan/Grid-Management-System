import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { PowerMeterEntity } from "./power-meter.entity";
import { PowerMeterController } from "./power-meter.controller";
import { PowerMeterService } from "./power-meter.service";


@ Module({
    imports: [TypeOrmModule.forFeature([PowerMeterEntity])],
    controllers: [PowerMeterController],
    providers: [PowerMeterService],
  })
  export class metermodule {}
  