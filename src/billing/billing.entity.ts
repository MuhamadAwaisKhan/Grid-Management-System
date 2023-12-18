// src/billing/billing.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CustomerEntity } from '../customer/customer.entity';

@Entity('Billing')
export class BillingEntity {
  @PrimaryGeneratedColumn()
  billingId: number;

  @Column()
  billingDate: string;

  @Column()
  usagePeriod: string;

  @Column()
  dueAmount: number;

  @Column()
  paymentStatus: string;
  
  @ManyToOne(() => CustomerEntity, customer => customer.billing, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'customerId' })
  customer: CustomerEntity;

}
