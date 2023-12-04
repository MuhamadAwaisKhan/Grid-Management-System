// src/customer/customer.entity.ts

import { BillingEntity } from 'src/billing/billing.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';

@Entity('Customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  customerId: number;

  @Column()
  name: string;

  @Column()
  contact: string;

  @Column()
  accountNumber: number;

  @Column()
  address: string;

  @Column()
  tariffPlan: string;
  @OneToMany(() => BillingEntity, billing => billing.customer)
  @JoinColumn({ name: 'billingId' })
  billing: BillingEntity;
}
