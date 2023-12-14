import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { AssetInventoryEntity } from "./asset-inventory.entity";
import { AssetInventoryController } from "./asset-inventory.controller";
import { AssetInventoryService } from "./asset-inventory.service";
import { NewSubStationEntity } from "src/Substation/newsubstation.entity";


@ Module({
    imports: [TypeOrmModule.forFeature([AssetInventoryEntity,NewSubStationEntity])],
    controllers: [AssetInventoryController],
    providers: [AssetInventoryService],
  })
  export class AssetModule {}
  