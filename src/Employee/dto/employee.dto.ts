// src/employee/dto/employee.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  role: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  contactInfo: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  substationId: number;
}
