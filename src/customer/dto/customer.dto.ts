// src/customer/dto/customer.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  @IsNotEmpty()

  name: string;

  @ApiProperty()
  @IsNotEmpty()
  
  contact: string;
  
  @ApiProperty()
  @IsNotEmpty()
 address: string;
 
  @ApiProperty()
  @IsNotEmpty()
  tariffPlan: string;
 
}
