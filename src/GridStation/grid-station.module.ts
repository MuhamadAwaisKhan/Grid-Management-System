// grid-station/grid-station.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GridStationEntity } from './grid-station.entity';
import { GridStationController } from './grid-station.controller';
import { GridStationService } from './grid-station.service';

@Module({
  imports: [TypeOrmModule.forFeature([GridStationEntity])],
  controllers: [GridStationController],

  exports: [GridStationService],
  providers: [GridStationService],
})
export class GridStationModule {}
