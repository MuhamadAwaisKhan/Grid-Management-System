// src/transformer/transformer.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { SubstationEntity } from '../substation/substation.entity';
import { GridStationEntity } from 'src/GridStation/grid-station.entity';
import { AlarmLogEntity } from 'src/AlarmLog/alarm-log.entity';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { EventLogEntity } from 'src/Eventlog/event-log.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { PowerOutageEntity } from 'src/Power-Outage/power-outage.entity';
import { FeederEntity } from 'src/feeder/feeder.entity';
import { PowerMeterEntity } from 'src/powermeter/power-meter.entity';

@Entity('Transformer')
export class TransformerEntity {
  @PrimaryGeneratedColumn()
  transformerId: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  capacity: number;

  @Column()
  voltageLevel: number;

  @ManyToOne(() => FeederEntity, feeder => feeder.transformer)
 @JoinColumn({ name: 'feederId' })
  feeder: FeederEntity;

    @OneToMany(() => PowerMeterEntity, meter => meter.transformer)
    @JoinColumn({ name: 'meterId' })
    meter: PowerMeterEntity;
  
    // @OneToMany(() => MaintenanceLogEntity, maintenanceLog => maintenanceLog.transformer)
    // @JoinColumn({ name: 'mainId' })
    // maintenanceLogs: MaintenanceLogEntity;
  
    // @OneToMany(() => EventLogEntity, eventLogs => eventLogs.transformer)
   // @JoinColumn({ name: 'eventId' })
    // eventLogs: EventLogEntity;
  
    // @OneToMany(() => ScheduleMaintenanceEntity, scheduleMaintenance => scheduleMaintenance.transformer)
    // @JoinColumn({ name: 'maintenanceId' })
    // scheduledMaintenances: ScheduleMaintenanceEntity;
  
    // @OneToMany(() => PowerOutageEntity, powerOutage => powerOutage.transformer)
    // @JoinColumn({ name: 'outageId' })
    // powerOutages: PowerOutageEntity;
}
