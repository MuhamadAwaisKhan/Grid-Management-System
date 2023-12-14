// src/event-log/dto/event-log.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateEventLogDto {
  @ApiProperty()
  @IsNotEmpty()
 description: string;

  @ApiProperty()
  @IsNotEmpty()
  date: string;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // substationId: number;
 
}
