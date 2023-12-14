// src/schedule-maintenance/dto/schedule-maintenance.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';
import { CreateMaintenanceLogDto } from 'src/Maintenance-Log/dto/maintenance-log.dto';

export class CreateScheduleMaintenanceDto {
  @ApiProperty()
  @IsNotEmpty()
  
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  
  date: string;

  main:CreateMaintenanceLogDto
}
