// src/employee/dto/employee.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  Role: string;
  
  @ApiProperty()
  @IsNotEmpty()
  
  contactInfo: string;
  
}
