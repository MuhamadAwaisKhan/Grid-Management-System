// src/maintenance-log/maintenance-log.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';


import { CircuitBreakerEntity } from '../circuit-breaker/circuit-breaker.entity';
import { FeederEntity } from '../feeder/feeder.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { NewEmployeeEntity } from 'src/Employee/newemployee.entity';

@Entity('MaintenanceLog')
export class MaintenanceLogEntity {
  @PrimaryGeneratedColumn()
  mainId: number;

  @Column()
  description: string;
  @Column()
  timestamp: string;

  @ManyToOne(() => NewEmployeeEntity, (employee) => employee.maintenanceLogs,{onDelete: 'CASCADE'})
  @JoinColumn({ name: 'employeeId' })
  employee: NewEmployeeEntity;

  //   @ManyToOne(() => SubstationEntity, substation => substation.maintenanceLogs)
  //   @JoinColumn({ name: 'substationId' })
  //  substation: SubstationEntity;

  //   @ManyToOne(() => TransformerEntity, transformer => transformer.maintenanceLogs)
  //   @JoinColumn({ name: 'transformerId' })
  //  transformer: TransformerEntity;
  // One maintenance log can be associated with many circuit breakers
  @OneToMany(
    () => CircuitBreakerEntity,
    (circuitBreaker) => circuitBreaker.maintenanceLog,
  )
  @JoinColumn({ name: 'breakerId' })
  circuitBreakers: CircuitBreakerEntity;

  @OneToOne(() => ScheduleMaintenanceEntity, { cascade: true, nullable: true })
  @JoinColumn({ name: 'maintenanceId'})
  schedule: ScheduleMaintenanceEntity;

  // One maintenance log can be associated with many schedule maintenance records
  // @OneToMany(() => ScheduleMaintenanceEntity, scheduleMaintenance => scheduleMaintenance.maintenanceLog)
  // @JoinColumn({ name: 'maintenanceId' })
  // scheduleMaintenances: ScheduleMaintenanceEntity;

  @ManyToOne(() => FeederEntity, (feeder) => feeder.maintenanceLogs,{onDelete: 'CASCADE'})
  @JoinColumn({ name: 'feederId' })
  feeder: FeederEntity;
}
