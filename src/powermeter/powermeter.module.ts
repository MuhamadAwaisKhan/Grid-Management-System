import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { PowerMeterEntity } from "./power-meter.entity";
import { PowerMeterController } from "./power-meter.controller";
import { PowerMeterService } from "./power-meter.service";
import { TransformerEntity } from "src/transformer/transformer.entity";
import { CustomerEntity } from "src/customer/customer.entity";


@ Module({
    imports: [TypeOrmModule.forFeature([PowerMeterEntity,TransformerEntity,CustomerEntity])],
    controllers: [PowerMeterController],
    providers: [PowerMeterService],
  })
  export class metermodule {}
  