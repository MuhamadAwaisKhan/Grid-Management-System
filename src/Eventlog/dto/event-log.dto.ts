// src/event-log/dto/event-log.dto.ts

import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateEventLogDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  substationId: number;

  @IsNumber()
  transformerId: number;

  @IsNumber()
  breakerId: number;

  @IsNumber()
  feederId: number;
}
