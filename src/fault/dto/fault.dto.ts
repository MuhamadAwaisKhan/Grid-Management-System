// src/fault/dto/fault.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsBoolean, IsNumber } from 'class-validator';

export class CreateFaultDto {
  @ApiProperty()
  @IsNotEmpty()
  
  faulted: boolean;

  @ApiProperty()
  @IsNotEmpty()
  
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  date: string;
  @ApiProperty()
  @IsNotEmpty()
  
  status: string;

  @ApiProperty()
  @IsNotEmpty()

  type: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // substationId: number;
}
