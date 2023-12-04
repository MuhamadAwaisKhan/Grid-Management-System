// src/billing/billing.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CustomerEntity } from '../customer/customer.entity';

@Entity('Billing')
export class BillingEntity {
  @PrimaryGeneratedColumn()
  billingId: number;

  @ManyToOne(() => CustomerEntity, customer => customer.billing)
  @JoinColumn({ name: 'customerId' })
  customer: CustomerEntity;

  @Column()
  billingDate: Date;

  @Column()
  usagePeriod: string;

  @Column()
  dueAmount: number;

  @Column()
  paymentStatus: string;
}
