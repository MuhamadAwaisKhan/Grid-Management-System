// src/power-outage/dto/power-outage.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsString, IsNumber } from 'class-validator';

export class CreatePowerOutageDto {
  @ApiProperty()
  @IsNotEmpty()
  outageStartTime: string;
  @ApiProperty()
  @IsNotEmpty()
   outageEndTime: string;
  @ApiProperty()
  @IsNotEmpty()
   cause: string;

  
}
