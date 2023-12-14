// grid-station/grid-station.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GridStationEntity } from './grid-station.entity';
import { GridStationController } from './grid-station.controller';
import { GridStationService } from './grid-station.service';
import { PowerSupplierEntity } from 'src/PowerSupplier/power-supplier.entity';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';


@Module({
  imports: [TypeOrmModule.forFeature([GridStationEntity,PowerSupplierEntity,NewSubStationEntity])],
  controllers: [GridStationController],

  exports: [GridStationService],
  providers: [GridStationService],
})
export class GridStationModule {}
