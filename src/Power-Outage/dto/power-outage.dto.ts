// src/power-outage/dto/power-outage.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsString, IsNumber } from 'class-validator';

export class CreatePowerOutageDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  outageStartTime: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  outageEndTime: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cause: string;

  // @IsNotEmpty()
  // @IsNumber()
  // substationId: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  feederId: number;

  // @IsNotEmpty()
  // @IsNumber()
  // transformerId: number;
}
