// src/fault/dto/fault.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsBoolean, IsNumber } from 'class-validator';

export class CreateFaultDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  faulted: boolean;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  date: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  substationId: number;
}
