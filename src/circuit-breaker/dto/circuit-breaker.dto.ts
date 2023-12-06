// src/circuit-breaker/dto/circuit-breaker.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCircuitBreakerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
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
  @IsString()
  status: string;

  // @IsNotEmpty()
  // @IsNumber()
  // substationId: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  mainId: number;
}
