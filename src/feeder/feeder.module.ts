import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { FeederEntity } from './feeder.entity';
import { FeederController } from './feeder.controller';
import { FeederService } from './feeder.service';

import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { PowerOutageEntity } from 'src/Power-Outage/power-outage.entity';
import { AlarmLogEntity } from 'src/AlarmLog/alarm-log.entity';

import { PowerMeterEntity } from 'src/powermeter/power-meter.entity';
import { CircuitBreakerEntity } from 'src/circuit-breaker/circuit-breaker.entity';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';
import { NewTransformerEntity } from 'src/Transformer/newtransformer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FeederEntity,
      NewSubStationEntity,
      MaintenanceLogEntity,
    PowerOutageEntity,
    AlarmLogEntity,
    NewTransformerEntity,
    PowerMeterEntity,
    CircuitBreakerEntity
    ]),
  ],
  controllers: [FeederController],
  providers: [FeederService],
})
export class feedermodule {}
