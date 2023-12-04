import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { SubstationEntity } from "./substation.entity";
import { SubscriptionLoggable } from "rxjs/internal/testing/SubscriptionLoggable";
import { SubstationService } from "./substation.service";
import { SubstationController } from "./substation.controller";


@Module({
    imports: [TypeOrmModule.forFeature([SubstationEntity])],
    controllers: [SubstationController],
    providers: [SubstationService],
  })
  export class submodule {}
  