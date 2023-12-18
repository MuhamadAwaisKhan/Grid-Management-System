import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';

import { SubstationService } from './substation.service';
import { SubstationController } from './substation.controller';
import { GridStationEntity } from 'src/GridStation/grid-station.entity';
import { FeederEntity } from 'src/feeder/feeder.entity';

import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { AssetInventoryEntity } from 'src/AssetInventory/asset-inventory.entity';
import { FaultEntity } from 'src/fault/fault.entity';
import { EventLogEntity } from 'src/Eventlog/event-log.entity';
import { NewSubStationEntity } from './newsubstation.entity';
import { NewEmployeeEntity } from 'src/Employee/newemployee.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      NewSubStationEntity,
      GridStationEntity,
      FeederEntity,
      NewEmployeeEntity,
      ScheduleMaintenanceEntity,
      AssetInventoryEntity,
      FaultEntity,
      EventLogEntity,
    ]),
  ],
  controllers: [SubstationController],
  providers: [SubstationService],
})
export class submodule {}
