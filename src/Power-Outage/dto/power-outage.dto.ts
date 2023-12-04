// src/power-outage/dto/power-outage.dto.ts

import { IsNotEmpty, IsDate, IsString, IsNumber } from 'class-validator';

export class CreatePowerOutageDto {
  @IsNotEmpty()
  @IsDate()
  outageStartTime: Date;

  @IsNotEmpty()
  @IsDate()
  outageEndTime: Date;

  @IsNotEmpty()
  @IsString()
  cause: string;

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
