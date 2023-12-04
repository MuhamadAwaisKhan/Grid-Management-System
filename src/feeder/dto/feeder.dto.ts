// src/feeder/dto/feeder.dto.ts

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFeederDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsNumber()
  capacity: number;

  @IsNotEmpty()
  @IsNumber()
  substationId: number;
}
