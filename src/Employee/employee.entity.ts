// src/employee/employee.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { SubstationEntity } from '../substation/substation.entity';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';

@Entity('Employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  employeeId: number;

  @Column()
  name: string;

  @Column()
  Role: string;

  @Column()
  contactInfo: string;

  @ManyToOne(() => SubstationEntity, substation => substation.employees)
  @JoinColumn({ name: 'substationId' })
  substation: SubstationEntity;
  // One employee can be associated with many maintenance logs
  @OneToMany(() => MaintenanceLogEntity, maintenanceLog => maintenanceLog.employee)
  @JoinColumn({ name: 'mainId' })
  maintenanceLogs: MaintenanceLogEntity;

  // One employee can be associated with many schedule maintenance records
//   @OneToMany(() => ScheduleMaintenanceEntity, scheduleMaintenance => scheduleMaintenance.employee)
//   @JoinColumn({ name: 'maintenanceId' })
//   scheduleMaintenances: ScheduleMaintenanceEntity;
 }
