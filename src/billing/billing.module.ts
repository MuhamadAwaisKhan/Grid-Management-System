import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { BillingEntity } from "./billing.entity";
import { BillingController } from "./billing.controller";
import { BillingService } from "./billing.service";

@ Module({
    imports: [TypeOrmModule.forFeature([BillingEntity])],
    controllers: [BillingController],
    providers: [BillingService],
  })
  export class billingmodule {}
  