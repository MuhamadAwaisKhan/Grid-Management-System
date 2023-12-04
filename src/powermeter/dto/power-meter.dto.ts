// src/power-meter/dto/power-meter.dto.ts

import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreatePowerMeterDto {
  @IsNotEmpty()
  @IsString()
  meterid: number;

  @IsNotEmpty()
  @IsString()
  serialNumber: string;

  @IsNotEmpty()
  @IsDate()
  installationDate: Date;

  @IsNotEmpty()
  @IsNumber()
  substationId: number;

  @IsNotEmpty()
  @IsNumber()
  feederId: number;
}
