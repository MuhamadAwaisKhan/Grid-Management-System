// src/substation/substation.entity.ts

import { AlarmLogEntity } from 'src/AlarmLog/alarm-log.entity';
import { AssetInventoryEntity } from 'src/AssetInventory/asset-inventory.entity';
import { EventLogEntity } from 'src/Eventlog/event-log.entity';
import { GridStationEntity } from 'src/GridStation/grid-station.entity';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';
import { PowerOutageEntity } from 'src/Power-Outage/power-outage.entity';
import { ScheduleMaintenanceEntity } from 'src/Schedule-Maintenance/schedule-maintenance.entity';
import { CircuitBreakerEntity } from 'src/circuit-breaker/circuit-breaker.entity';
import { CustomerEntity } from 'src/customer/customer.entity';
import { EmployeeEntity } from 'src/employee/employee.entity';
import { FaultEntity } from 'src/fault/fault.entity';
import { FeederEntity } from 'src/feeder/feeder.entity';
import { PowerMeterEntity } from 'src/powermeter/power-meter.entity';
import { TransformerEntity } from 'src/transformer/transformer.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany } from 'typeorm';
@Entity('Substation')
export class SubstationEntity {
  @PrimaryGeneratedColumn()
  substationId: number;

  @Column()
  name: string;

  @Column()
  capacity: number;

  @Column()
  voltageLevel: number;
  @ManyToOne(() => GridStationEntity, gridStation => gridStation.substations)
  @JoinColumn({ name: 'gridId' })
  gridStation: GridStationEntity;
  //  @OneToMany(() => TransformerEntity, transformer => transformer.substation)
  //  @JoinColumn({ name: 'substationId' })
  // substations: TransformerEntity;
  transformer: any;
  @OneToMany(() => FaultEntity, fault => fault.substation)
  @JoinColumn({ name: 'faultId' })
  faults: FaultEntity;
  @OneToMany(() => FeederEntity, feeder => feeder.substation)
  @JoinColumn({ name: 'feederId' })
  feeder: FeederEntity;
  @OneToMany(() => ScheduleMaintenanceEntity, maintenance => maintenance.substation)
  @JoinColumn({ name: 'mainId' })
  scheduledMaintenances: ScheduleMaintenanceEntity;
  // @OneToMany(() => PowerMeterEntity, powerMeter => powerMeter.substation)
  // @JoinColumn({ name: 'meterId' })
  // powerMeters: PowerMeterEntity;
  // @OneToMany(() => PowerOutageEntity, powerOutage => powerOutage.substation)
  // @JoinColumn({ name: 'outageId' })
  // powerOutages: PowerOutageEntity;

  @OneToMany(() => AssetInventoryEntity, assetInventory => assetInventory.substation)
  @JoinColumn({ name: 'assetId' })
  assetInventories: AssetInventoryEntity;

  // @OneToMany(() => AlarmLogEntity, alarmLog => alarmLog.substation)
  // @JoinColumn({ name: 'alarmId' })
  // alarmLogs: AlarmLogEntity;

  // @OneToMany(() => MaintenanceLogEntity, maintenanceLog => maintenanceLog.substation)
  // @JoinColumn({ name: 'maintenanceId' })
  // maintenanceLogs: MaintenanceLogEntity;

  @ManyToMany(() => EmployeeEntity, employee => employee.substation)
  @JoinColumn({ name: 'employeeId' })
  employees: EmployeeEntity;
  @OneToMany(() => EventLogEntity, eventLog => eventLog.substation)
  @JoinColumn({ name: 'eventId' })
  eventLogs: EventLogEntity;
 
  // @OneToMany(() => CircuitBreakerEntity, circuitBreaker => circuitBreaker.substation)
  // @JoinColumn({ name: 'breakerId' })
  // circuitBreakers: CircuitBreakerEntity;
  
  // @OneToMany(() => CustomerEntity, customer => customer.substation)
  // @JoinColumn({ name: 'customerId' })
  // customer: CustomerEntity;

}
