// src/schedule-maintenance/dto/schedule-maintenance.dto.ts

import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateScheduleMaintenanceDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  employeeId: number;

  @IsNotEmpty()
  @IsNumber()
  substationId: number;

  @IsNotEmpty()
  @IsNumber()
  transformerId: number;

  @IsNotEmpty()
  @IsNumber()
  breakerId: number;

  @IsNotEmpty()
  @IsNumber()
  feederId: number;
  @IsNotEmpty()
  @IsNumber()
  mainId: number;
}
