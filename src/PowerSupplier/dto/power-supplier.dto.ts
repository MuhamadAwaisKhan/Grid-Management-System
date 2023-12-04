// src/power-supplier/dto/power-supplier.dto.ts

import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePowerSupplierDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  contactDetail: string;

 
}
