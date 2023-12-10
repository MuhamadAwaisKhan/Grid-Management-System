import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { SubstationEntity } from './substation.entity';

import { SubstationService } from './substation.service';
import { SubstationController } from './substation.controller';
import { GridStationEntity } from 'src/GridStation/grid-station.entity';
import { FeederEntity } from 'src/feeder/feeder.entity';
import { EmployeeEntity } from 'src/employee/employee.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { AssetInventoryEntity } from 'src/AssetInventory/asset-inventory.entity';
import { FaultEntity } from 'src/fault/fault.entity';
import { EventLogEntity } from 'src/Eventlog/event-log.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubstationEntity,
      GridStationEntity,
      FeederEntity,
      EmployeeEntity,
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
