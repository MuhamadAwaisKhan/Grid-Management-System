// src/schedule-maintenance/schedule-maintenance.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { EmployeeEntity } from '../employee/employee.entity';

import { TransformerEntity } from '../transformer/transformer.entity';
import { CircuitBreakerEntity } from 'src/circuit-breaker/circuit-breaker.entity';
import { FeederEntity } from '../feeder/feeder.entity';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';

@Entity('ScheduleMaintenance')
export class ScheduleMaintenanceEntity {
  @PrimaryGeneratedColumn()
  maintenanceId: number;

  @Column()
  description: string;

  @Column()
  date: string;

 

  @ManyToOne(() => NewSubStationEntity, substation => substation.scheduledMaintenances)
  @JoinColumn({ name: 'substationId' })
  substation: NewSubStationEntity;

 
  // @ManyToOne(() => MaintenanceLogEntity, maintenanceLog => maintenanceLog.scheduleMaintenances)
  // maintenanceLog: MaintenanceLogEntity;
  @OneToOne(() => MaintenanceLogEntity, (maintenanceLog) => maintenanceLog.schedule)
  @JoinColumn({ name: 'mainId' })
  maintenanceLog: MaintenanceLogEntity;

  // @OneToOne(()=> MaintenanceLogEntity, (main) => main.schedule)
  // main: MaintenanceLogEntity

 


}
