// src/fault/dto/fault.dto.ts

import { IsNotEmpty, IsString, IsDate, IsBoolean, IsNumber } from 'class-validator';

export class CreateFaultDto {
  @IsNotEmpty()
  @IsBoolean()
  faulted: boolean;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsNumber()
  substationId: number;
}
