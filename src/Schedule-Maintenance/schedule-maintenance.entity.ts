// src/schedule-maintenance/schedule-maintenance.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { EmployeeEntity } from '../employee/employee.entity';
import { SubstationEntity } from '../substation/substation.entity';
import { TransformerEntity } from '../transformer/transformer.entity';
import { CircuitBreakerEntity } from 'src/circuit-breaker/circuit-breaker.entity';
import { FeederEntity } from '../feeder/feeder.entity';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';

@Entity('ScheduleMaintenance')
export class ScheduleMaintenanceEntity {
  @PrimaryGeneratedColumn()
  maintenanceId: number;

  @Column()
  description: string;

  @Column()
  date: Date;

  @ManyToOne(() => EmployeeEntity, employee => employee.scheduleMaintenances)
  @JoinColumn({ name: 'employeeId' })
  employee: EmployeeEntity;

  @ManyToOne(() => SubstationEntity, substation => substation.scheduledMaintenances)
  @JoinColumn({ name: 'substationId' })
  substation: SubstationEntity;

  @ManyToOne(() => TransformerEntity, transformer => transformer.scheduledMaintenances)
  @JoinColumn({ name: 'transformerId' })
  transformer: TransformerEntity;
  @ManyToOne(() => MaintenanceLogEntity, maintenanceLog => maintenanceLog.scheduleMaintenances)
  maintenanceLog: MaintenanceLogEntity;

  // Many schedule maintenance records can be associated with one circuit breaker
  @ManyToOne(() => CircuitBreakerEntity, circuitBreaker => circuitBreaker.scheduleMaintenances)
  @JoinColumn({ name: 'breakerId' })
  circuitBreaker: CircuitBreakerEntity;




  @ManyToOne(() => FeederEntity, feeder => feeder.scheduleMaintenances)
  @JoinColumn({ name: 'feederId' })
  feeder: FeederEntity;
}
