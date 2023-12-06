// src/substation/dto/substation.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubstationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  capacity: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  voltageLevel: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  gridId: number;
}
