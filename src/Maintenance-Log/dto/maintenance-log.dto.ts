// src/maintenance-log/dto/maintenance-log.dto.ts

import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMaintenanceLogDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  employeeId: number;

  @IsNotEmpty()
  @IsNumber()
  substationId: number;

  @IsNumber()
  transformerId: number;

  @IsNumber()
  breakerId: number;

  @IsNumber()
  feederId: number;
}
