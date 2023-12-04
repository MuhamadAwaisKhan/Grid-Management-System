// src/transformer/transformer.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { SubstationEntity } from '../substation/substation.entity';
import { GridStationEntity } from 'src/GridStation/grid-station.entity';
import { AlarmLogEntity } from 'src/AlarmLog/alarm-log.entity';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { EventLogEntity } from 'src/Eventlog/event-log.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { PowerOutageEntity } from 'src/Power-Outage/power-outage.entity';

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

  @ManyToOne(() => SubstationEntity, substation => substation.transformer)
 @JoinColumn({ name: 'substationId' })
  substation: SubstationEntity;
  @ManyToOne(() => GridStationEntity, gridstation => gridstation.transformer)
    @JoinColumn({ name: 'gridId' })
    gridstation: GridStationEntity;
    @OneToMany(() => AlarmLogEntity, alarmLog => alarmLog.transformer)
    alarmLogs: AlarmLogEntity[];
  
    @OneToMany(() => MaintenanceLogEntity, maintenanceLog => maintenanceLog.transformer)
    maintenanceLogs: MaintenanceLogEntity[];
  
    @OneToMany(() => EventLogEntity, eventLogs => eventLogs.transformer)
    eventLogs: EventLogEntity[];
  
    @OneToMany(() => ScheduleMaintenanceEntity, scheduleMaintenance => scheduleMaintenance.transformer)
    scheduledMaintenances: ScheduleMaintenanceEntity[];
  
    @OneToMany(() => PowerOutageEntity, powerOutage => powerOutage.transformer)
    powerOutages: PowerOutageEntity[];
}
