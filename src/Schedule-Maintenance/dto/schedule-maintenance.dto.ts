// src/schedule-maintenance/dto/schedule-maintenance.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';
import { CreateMaintenanceLogDto } from 'src/Maintenance-Log/dto/maintenance-log.dto';

export class CreateScheduleMaintenanceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  date: Date;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // employeeId: number;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // substationId: number;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // transformerId: number;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // breakerId: number;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // feederId: number;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // mainId: number;
  main:CreateMaintenanceLogDto
}
