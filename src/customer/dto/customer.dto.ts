// src/customer/dto/customer.dto.ts

import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  contact: string;

  @IsNotEmpty()
  @IsNumber()
  accountNumber: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  tariffPlan: string;
}
