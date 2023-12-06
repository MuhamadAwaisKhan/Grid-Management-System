// src/power-meter/dto/power-meter.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreatePowerMeterDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  meterid: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  serialNumber: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  installationDate: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  customerId: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  transformerId: number;
}
