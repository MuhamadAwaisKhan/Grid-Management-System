// src/event-log/dto/event-log.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateEventLogDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  date: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  substationId: number;
  @ApiProperty()
  @IsNumber()
  transformerId: number;
  @ApiProperty()
  @IsNumber()
  breakerId: number;
  @ApiProperty()
  @IsNumber()
  feederId: number;
}
