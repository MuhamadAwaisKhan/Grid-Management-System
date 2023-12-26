// src/customer/customer.entity.ts

import { BillingEntity } from 'src/billing/billing.entity';
import { PowerMeterEntity } from 'src/powermeter/power-meter.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity('Customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  customerId: number;

  @Column()
  name: string;

  @Column()
  contact: string;

  

  @Column()
  address: string;

  @Column()
  tariffPlan: string;
  
  @OneToMany(() => BillingEntity, billing => billing.customer, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'billingId' })
  billing: BillingEntity;
  // @ManyToOne(() => SubstationEntity, substation => substation.customer)
  // @JoinColumn({ name: 'substationId' })
  // substation: SubstationEntity;
  @OneToMany(() => PowerMeterEntity, powermeter => powermeter.customer)
  @JoinColumn({ name: 'meterId' })
  powermeter: PowerMeterEntity;
}
