// src/circuit-breaker/circuit-breaker.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { EventLogEntity } from 'src/Eventlog/event-log.entity';
import { FeederEntity } from 'src/feeder/feeder.entity';
export enum CircuitBreakerStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DEFAULT = 'default',
}
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

  @Column({
    type: 'enum',
    enum: CircuitBreakerStatus,
    default: CircuitBreakerStatus.DEFAULT,
  })
  status: CircuitBreakerStatus;


  @ManyToOne(() => FeederEntity, feeder => feeder.breaker,{onDelete: 'CASCADE'})
  @JoinColumn({ name: 'breakerId' })
  feeder: FeederEntity;
  @ManyToOne(() => MaintenanceLogEntity, maintenanceLog => maintenanceLog.circuitBreakers, { nullable: true,onDelete: 'CASCADE'})
  @JoinColumn({ name: 'mainId' })
  maintenanceLog: MaintenanceLogEntity;
  
  // One circuit breaker can be associated with many schedule maintenance records
  // @OneToMany(() => ScheduleMaintenanceEntity, scheduleMaintenance => scheduleMaintenance.circuitBreaker)
  // @JoinColumn({ name: 'maintenanceId' })
  // scheduleMaintenances: ScheduleMaintenanceEntity;

  // One circuit breaker can be associated with many event logs
//   @OneToMany(() => EventLogEntity, eventLog => eventLog.circuitBreaker)
//   @JoinColumn({ name: 'eventId' })
//   eventLogs: EventLogEntity;
 }
