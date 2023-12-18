// src/employee/employee.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';

@Entity('New Employee')
export class NewEmployeeEntity {
  @PrimaryGeneratedColumn()
  employeeId: number;

  @Column()
  name: string;

  @Column()
  Role: string;

  @Column()
  contactInfo: string;

  @ManyToOne(() => NewSubStationEntity, substation => substation.employees,{onDelete: 'CASCADE'})
  @JoinColumn({ name: 'substationId' })
  substation: NewSubStationEntity;
  // One employee can be associated with many maintenance logs
  @OneToMany(() => MaintenanceLogEntity, maintenanceLog => maintenanceLog.employee)
  @JoinColumn({ name: 'mainId' })
  maintenanceLogs: MaintenanceLogEntity;

  // One employee can be associated with many schedule maintenance records
//   @OneToMany(() => ScheduleMaintenanceEntity, scheduleMaintenance => scheduleMaintenance.employee)
//   @JoinColumn({ name: 'maintenanceId' })
//   scheduleMaintenances: ScheduleMaintenanceEntity;
 }
