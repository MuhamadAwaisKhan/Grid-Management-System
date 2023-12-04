import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { PowerSupplierEntity } from "./power-supplier.entity";
import { PowerSupplierController } from "./power-supplier.controller";
import { PowerSupplierService } from "./power-supplier.service";

@Module({
    imports: [TypeOrmModule.forFeature([PowerSupplierEntity])],
    controllers: [PowerSupplierController],
    providers: [PowerSupplierService],
  })
  export class suppliermodule {}
  