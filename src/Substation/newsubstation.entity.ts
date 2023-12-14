// src/substation/substation.entity.ts

import { AssetInventoryEntity } from 'src/AssetInventory/asset-inventory.entity';
import { EventLogEntity } from 'src/Eventlog/event-log.entity';
import { GridStationEntity } from 'src/GridStation/grid-station.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { EmployeeEntity } from 'src/employee/employee.entity';
import { FaultEntity } from 'src/fault/fault.entity';
import { FeederEntity } from 'src/feeder/feeder.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany } from 'typeorm';
@Entity('NewSubStationEntity')
export class NewSubStationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  capacity: string;

  @Column()
  voltageLevel: string;
  @ManyToOne(() => GridStationEntity, gridStation => gridStation.substations, {nullable: true})
  @JoinColumn({ name: 'gridId' })
  gridStation: GridStationEntity;
  
  @OneToMany(() => FaultEntity, fault => fault.substation, {nullable: true})
  @JoinColumn({ name: 'faultId' })
  faults: FaultEntity;
  @OneToMany(() => FeederEntity, feeder => feeder.substation, {nullable: true})
  @JoinColumn({ name: 'feederId' })
  feeder: FeederEntity;
  @OneToMany(() => ScheduleMaintenanceEntity, maintenance => maintenance.substation, {nullable: true})
  @JoinColumn({ name: 'mainId' })
  scheduledMaintenances: ScheduleMaintenanceEntity;


  @OneToMany(() => AssetInventoryEntity, assetInventory => assetInventory.substation, {nullable: true})
  @JoinColumn({ name: 'assetId' })
  assetInventories: AssetInventoryEntity;

 

  @OneToMany(() => EmployeeEntity, employee => employee.substation, {nullable: true})
  @JoinColumn({ name: 'employeeId' })
  employees: EmployeeEntity;
  @OneToMany(() => EventLogEntity, eventLog => eventLog.substation, {nullable: true})
  @JoinColumn({ name: 'eventId' })
  eventLogs: EventLogEntity;
 
 

}
