// src/alarm-log/dto/alarm-log.dto.ts

import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateAlarmLogDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsDate()
  timestamp: Date;

  @IsNotEmpty()
  @IsString()
  severityLevel: string;

  @IsNotEmpty()
  @IsNumber()
  substationId: number;

  @IsNotEmpty()
  @IsNumber()
  feederId: number;

  @IsNotEmpty()
  @IsNumber()
  transformerId: number;
}
