// src/power-meter/power-meter.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SubstationEntity } from '../substation/substation.entity';
import { FeederEntity } from '../feeder/feeder.entity';
import { CustomerEntity } from 'src/customer/customer.entity';
import { TransformerEntity } from 'src/transformer/transformer.entity';

@Entity('PowerMeter')
export class PowerMeterEntity {
  @PrimaryGeneratedColumn()
  meterid: number;
@Column()
units:Number;
  @Column()
  serialNumber: string;

  @Column()
  installationDate: Date;

  @ManyToOne(() => CustomerEntity, customer => customer.powermeter)
  @JoinColumn({ name: 'customerId' })
  customer: CustomerEntity;
  @ManyToOne(() => TransformerEntity, transformer => transformer.meter)
  @JoinColumn({ name: 'transformerId' })
  transformer: FeederEntity;

}
