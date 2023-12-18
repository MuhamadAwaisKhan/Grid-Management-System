import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { PowerMeterEntity } from "./power-meter.entity";
import { PowerMeterController } from "./power-meter.controller";
import { PowerMeterService } from "./power-meter.service";

import { CustomerEntity } from "src/customer/customer.entity";
import { NewTransformerEntity } from "src/Transformer/newtransformer.entity";


@ Module({
    imports: [TypeOrmModule.forFeature([PowerMeterEntity,NewTransformerEntity,CustomerEntity])],
    controllers: [PowerMeterController],
    providers: [PowerMeterService],
  })
  export class metermodule {}
  