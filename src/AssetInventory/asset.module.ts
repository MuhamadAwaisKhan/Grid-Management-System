import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { AssetInventoryEntity } from "./asset-inventory.entity";
import { AssetInventoryController } from "./asset-inventory.controller";
import { AssetInventoryService } from "./asset-inventory.service";

@ Module({
    imports: [TypeOrmModule.forFeature([AssetInventoryEntity])],
    controllers: [AssetInventoryController],
    providers: [AssetInventoryService],
  })
  export class AssetModule {}
  