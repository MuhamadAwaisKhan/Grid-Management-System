// src/employee/dto/employee.dto.ts

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsString()
  contactInfo: string;

  @IsNotEmpty()
  @IsNumber()
  substationId: number;
}
