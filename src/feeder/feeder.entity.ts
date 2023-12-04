// src/feeder/feeder.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { SubstationEntity } from '../substation/substation.entity';
import { EventLogEntity } from 'src/Eventlog/event-log.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { PowerOutageEntity } from 'src/Power-Outage/power-outage.entity';
import { AlarmLogEntity } from 'src/AlarmLog/alarm-log.entity';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';

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

  @ManyToOne(() => SubstationEntity, substation => substation.feeders)
  @JoinColumn({ name: 'substationId' })
  substation: SubstationEntity;
  // One feeder can be associated with many event logs
  @OneToMany(() => EventLogEntity, eventLog => eventLog.feeder)
  @JoinColumn({ name: 'eventId' })
  eventLogs: EventLogEntity;

  // One feeder can be associated with many schedule maintenance records
  @OneToMany(() => ScheduleMaintenanceEntity, scheduleMaintenance => scheduleMaintenance.feeder)
  @JoinColumn({ name: 'maintenanceId' })
  scheduleMaintenances: ScheduleMaintenanceEntity;

  // One feeder can be associated with many power outages
  @OneToMany(() => PowerOutageEntity, powerOutage => powerOutage.feeder)
  powerOutages: PowerOutageEntity[];

  // One feeder can be associated with many alarm logs
  @OneToMany(() => AlarmLogEntity, alarmLog => alarmLog.feeder)
  alarmLogs: AlarmLogEntity[];

  // One feeder can be associated with many maintenance logs
  @OneToMany(() => MaintenanceLogEntity, maintenanceLog => maintenanceLog.feeder)
  maintenanceLogs: MaintenanceLogEntity[];
}
