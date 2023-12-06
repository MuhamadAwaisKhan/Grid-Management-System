// src/maintenance-log/dto/maintenance-log.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMaintenanceLogDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  employeeId: number;

  // @IsNotEmpty()
  // @IsNumber()
  // substationId: number;
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
