// src/maintenance-log/maintenance-log.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { EmployeeEntity } from '../employee/employee.entity';
import { SubstationEntity } from '../substation/substation.entity';
import { TransformerEntity } from '../transformer/transformer.entity';
import { CircuitBreakerEntity } from '../circuit-breaker/circuit-breaker.entity';
import { FeederEntity } from '../feeder/feeder.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';

@Entity('MaintenanceLog')
export class MaintenanceLogEntity {
  @PrimaryGeneratedColumn()
  mainId: number;

  @Column()
  description: string;

  @ManyToOne(() => EmployeeEntity, employee => employee.maintenanceLogs)
  @JoinColumn({ name: 'employeeId' })
 employee: EmployeeEntity;

//   @ManyToOne(() => SubstationEntity, substation => substation.maintenanceLogs)
//   @JoinColumn({ name: 'substationId' })
//  substation: SubstationEntity;

//   @ManyToOne(() => TransformerEntity, transformer => transformer.maintenanceLogs)
//   @JoinColumn({ name: 'transformerId' })
//  transformer: TransformerEntity;
  // One maintenance log can be associated with many circuit breakers
  @OneToMany(() => CircuitBreakerEntity, circuitBreaker => circuitBreaker.maintenanceLog)
  @JoinColumn({ name: 'breakerId' })
  circuitBreakers: CircuitBreakerEntity;

  // One maintenance log can be associated with many schedule maintenance records
  // @OneToMany(() => ScheduleMaintenanceEntity, scheduleMaintenance => scheduleMaintenance.maintenanceLog)
  // @JoinColumn({ name: 'maintenanceId' })
  // scheduleMaintenances: ScheduleMaintenanceEntity;



  @ManyToOne(() => FeederEntity, feeder => feeder.maintenanceLogs)
  @JoinColumn({ name: 'feederId' })
 feeder: FeederEntity;
}
