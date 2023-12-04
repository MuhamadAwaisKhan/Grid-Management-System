// src/circuit-breaker/circuit-breaker.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { SubstationEntity } from '../substation/substation.entity';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { EventLogEntity } from 'src/Eventlog/event-log.entity';

@Entity('CircuitBreaker')
export class CircuitBreakerEntity {
  @PrimaryGeneratedColumn()
  breakerId: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  capacity: number;

  @Column()
  status: string;

  @ManyToOne(() => SubstationEntity, substation => substation.circuitBreakers)
  @JoinColumn({ name: 'substationId' })
  substation: SubstationEntity;
  @ManyToOne(() => MaintenanceLogEntity, maintenanceLog => maintenanceLog.circuitBreakers, { nullable: true })
  @JoinColumn({ name: 'mainId' })
  maintenanceLog: MaintenanceLogEntity;
  
  // One circuit breaker can be associated with many schedule maintenance records
  @OneToMany(() => ScheduleMaintenanceEntity, scheduleMaintenance => scheduleMaintenance.circuitBreaker)
  @JoinColumn({ name: 'maintenanceId' })
  scheduleMaintenances: ScheduleMaintenanceEntity;

  // One circuit breaker can be associated with many event logs
  @OneToMany(() => EventLogEntity, eventLog => eventLog.circuitBreaker)
  @JoinColumn({ name: 'eventId' })
  eventLogs: EventLogEntity;
}
