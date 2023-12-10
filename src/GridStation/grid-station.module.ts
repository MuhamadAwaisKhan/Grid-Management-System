// grid-station/grid-station.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GridStationEntity } from './grid-station.entity';
import { GridStationController } from './grid-station.controller';
import { GridStationService } from './grid-station.service';
import { PowerSupplierEntity } from 'src/PowerSupplier/power-supplier.entity';
import { SubstationEntity } from 'src/substation/substation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GridStationEntity,PowerSupplierEntity,SubstationEntity])],
  controllers: [GridStationController],

  exports: [GridStationService],
  providers: [GridStationService],
})
export class GridStationModule {}
