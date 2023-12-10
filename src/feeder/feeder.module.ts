import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { FeederEntity } from './feeder.entity';
import { FeederController } from './feeder.controller';
import { FeederService } from './feeder.service';
import { SubstationEntity } from 'src/substation/substation.entity';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { PowerOutageEntity } from 'src/Power-Outage/power-outage.entity';
import { AlarmLogEntity } from 'src/AlarmLog/alarm-log.entity';
import { TransformerEntity } from 'src/transformer/transformer.entity';
import { PowerMeterEntity } from 'src/powermeter/power-meter.entity';
import { CircuitBreakerEntity } from 'src/circuit-breaker/circuit-breaker.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FeederEntity,
      SubstationEntity,
      MaintenanceLogEntity,
    PowerOutageEntity,
    AlarmLogEntity,
    TransformerEntity,
    PowerMeterEntity,
    CircuitBreakerEntity
    ]),
  ],
  controllers: [FeederController],
  providers: [FeederService],
})
export class feedermodule {}
