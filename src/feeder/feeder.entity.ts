// src/feeder/feeder.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { EventLogEntity } from 'src/Eventlog/event-log.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { PowerOutageEntity } from 'src/Power-Outage/power-outage.entity';
import { AlarmLogEntity } from 'src/AlarmLog/alarm-log.entity';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { TransformerEntity } from 'src/transformer/transformer.entity';
import { PowerMeterEntity } from 'src/powermeter/power-meter.entity';
import { CircuitBreakerEntity } from 'src/circuit-breaker/circuit-breaker.entity';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';

@Entity('Feeder')
export class FeederEntity {
  @PrimaryGeneratedColumn()
  feederId: number;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  type: string;

  @Column()
  capacity: number;

  @OneToMany(() => TransformerEntity, transformer => transformer.feeder1)
  @JoinColumn({ name: 'transformerId' })
  transformer: TransformerEntity;
  @ManyToOne(() => NewSubStationEntity, substation => substation.feeder)
  @JoinColumn({ name: 'substationId' })
substation: NewSubStationEntity;
  // One feeder can be associated with many event logs
  @OneToMany(() => CircuitBreakerEntity, breaker => breaker.feeder)
  @JoinColumn({ name: 'breakerId' })
  breaker: CircuitBreakerEntity;

  // One feeder can be associated with many schedule maintenance records
  // @OneToMany(() => ScheduleMaintenanceEntity, scheduleMaintenance => scheduleMaintenance.feeder)
  // @JoinColumn({ name: 'maintenanceId' })
  // scheduleMaintenances: ScheduleMaintenanceEntity;

  // One feeder can be associated with many power outages
  @OneToMany(() => PowerOutageEntity, powerOutage => powerOutage.feeder)
  @JoinColumn({ name: 'outageId' })
  powerOutages: PowerOutageEntity;

  // One feeder can be associated with many alarm logs
  @OneToMany(() => AlarmLogEntity, alarmLog => alarmLog.feeder)
  @JoinColumn({ name: 'alarmId' })
  alarmLogs: AlarmLogEntity;

  // One feeder can be associated with many maintenance logs
  @OneToMany(() => MaintenanceLogEntity, maintenanceLog => maintenanceLog.feeder)
  @JoinColumn({ name: 'mainId' })
  maintenanceLogs: MaintenanceLogEntity;
  
}
