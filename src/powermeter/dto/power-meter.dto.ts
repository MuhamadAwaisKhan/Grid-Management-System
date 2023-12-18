// src/power-meter/dto/power-meter.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreatePowerMeterDto {
  
  @ApiProperty()
  @IsNotEmpty()

  serialNumber: string;
  @ApiProperty()
  @IsNotEmpty()
 
  units: number;
  @ApiProperty()
  @IsNotEmpty()
 
  installationDate: string;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // customerId: number;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // transformerId: number;
}
