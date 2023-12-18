// src/power-meter/power-meter.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CustomerEntity } from 'src/customer/customer.entity';
import { NewTransformerEntity } from 'src/Transformer/newtransformer.entity';


@Entity('PowerMeter')
export class PowerMeterEntity {
  @PrimaryGeneratedColumn()
  meterid: number;
@Column()
units:Number;
  @Column()
  serialNumber: string;

  @Column()
  installationDate: string;

  @ManyToOne(() => CustomerEntity, customer => customer.powermeter, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'customerId' })
  customer: CustomerEntity;
  
  @ManyToOne(() => NewTransformerEntity, transformer => transformer.meter, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'transformerId' })
  transformer1: NewTransformerEntity;

}
