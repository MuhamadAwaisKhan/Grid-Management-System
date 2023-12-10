import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { TransformerEntity } from "./transformer.entity";
import { TransformerController } from "./transformer.controller";
import { TransformerService } from "./transformer.service";
import { FeederEntity } from "src/feeder/feeder.entity";
import { PowerMeterEntity } from "src/powermeter/power-meter.entity";



@Module({
    imports: [TypeOrmModule.forFeature([TransformerEntity,FeederEntity,PowerMeterEntity])],
    controllers: [TransformerController],
    providers: [TransformerService],
  })
  export class transformermodule {}
  