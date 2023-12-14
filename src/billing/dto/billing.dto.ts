// src/billing/dto/billing.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateBillingDto {
  @ApiProperty()
  @IsNotEmpty()
 

  
  billingDate: string;
  @ApiProperty()
  @IsNotEmpty()
  
  usagePeriod: string;
  @ApiProperty()
  @IsNotEmpty()
 
  dueAmount: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  paymentStatus: string;
}
