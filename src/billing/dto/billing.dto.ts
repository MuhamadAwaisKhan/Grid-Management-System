// src/billing/dto/billing.dto.ts

import { IsNotEmpty, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateBillingDto {
  @IsNotEmpty()
  @IsNumber()
  customerId: number;

  @IsNotEmpty()
  @IsDate()
  billingDate: Date;

  @IsNotEmpty()
  @IsString()
  usagePeriod: string;

  @IsNotEmpty()
  @IsNumber()
  dueAmount: number;

  @IsNotEmpty()
  @IsString()
  paymentStatus: string;
}
