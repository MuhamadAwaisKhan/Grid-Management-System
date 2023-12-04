import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { FeederEntity } from "./feeder.entity";
import { FeederController } from "./feeder.controller";
import { FeederService } from "./feeder.service";


@ Module({
    imports: [TypeOrmModule.forFeature([FeederEntity])],
    controllers: [FeederController],
    providers: [FeederService],
  })
  export class feedermodule {}
  