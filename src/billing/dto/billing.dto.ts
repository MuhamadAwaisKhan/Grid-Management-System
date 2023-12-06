// src/billing/dto/billing.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateBillingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  customerId: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  billingDate: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  usagePeriod: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  dueAmount: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  paymentStatus: string;
}
