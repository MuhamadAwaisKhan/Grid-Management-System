import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";

import { TransformerController } from "./transformer.controller";
import { TransformerService } from "./transformer.service";
import { FeederEntity } from "src/feeder/feeder.entity";
import { PowerMeterEntity } from "src/powermeter/power-meter.entity";
import { NewTransformerEntity } from "./newtransformer.entity";



@Module({
    imports: [TypeOrmModule.forFeature([NewTransformerEntity,FeederEntity,PowerMeterEntity])],
    controllers: [TransformerController],
    providers: [TransformerService],
  })
  export class transformermodule {}
  