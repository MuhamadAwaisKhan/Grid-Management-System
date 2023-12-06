// src/feeder/dto/feeder.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFeederDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  capacity: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  substationId: number;
}
