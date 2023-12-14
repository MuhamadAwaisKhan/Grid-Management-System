// src/alarm-log/dto/alarm-log.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateAlarmLogDto {
  @ApiProperty()
  @IsNotEmpty()
 
  description: string;
  @ApiProperty()
  @IsNotEmpty()

  timestamp: string;
  @ApiProperty()
  @IsNotEmpty()
 
  severityLevel: string;

  // @IsNotEmpty()
  // @IsNumber()
  // substationId: number;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // feederId: number;

  // @IsNotEmpty()
  // @IsNumber()
  // transformerId: number;
}
