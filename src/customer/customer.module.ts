import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { CustomerEntity } from "./customer.entity";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { PowerMeterEntity } from "src/powermeter/power-meter.entity";
import { BillingEntity } from "src/billing/billing.entity";

@ Module({
    imports: [TypeOrmModule.forFeature([CustomerEntity,PowerMeterEntity,BillingEntity])],
    controllers: [CustomerController],
    providers: [CustomerService],
  })
  export class customermodule {}
  