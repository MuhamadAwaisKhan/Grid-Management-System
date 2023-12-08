// src/maintenance-log/dto/maintenance-log.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { CreateScheduleMaintenanceDto } from 'src/Schedule-Maintenance/dto/schedule-maintenance.dto';

export class CreateMaintenanceLogDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;
 
  @IsNotEmpty()
  @IsNumber()
  employeeId: number;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  timestamp: Date;
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
  schedule:CreateScheduleMaintenanceDto
}
