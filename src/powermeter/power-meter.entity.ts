// src/power-meter/power-meter.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SubstationEntity } from '../substation/substation.entity';
import { FeederEntity } from '../feeder/feeder.entity';

@Entity('PowerMeter')
export class PowerMeterEntity {
  @PrimaryGeneratedColumn()
  meterid: number;


  @Column()
  serialNumber: string;

  @Column()
  installationDate: Date;

  @ManyToOne(() => SubstationEntity, substation => substation.powerMeters)
  @JoinColumn({ name: 'substationId' })
  substation: SubstationEntity;

}
