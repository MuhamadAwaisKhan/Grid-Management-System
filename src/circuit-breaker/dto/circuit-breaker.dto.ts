// src/circuit-breaker/dto/circuit-breaker.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CircuitBreakerStatus } from '../circuit-breaker.entity';

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
  @IsEnum(CircuitBreakerStatus)
  status: CircuitBreakerStatus;
  // @IsNotEmpty()
  // @IsNumber()
  // substationId: number;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // mainId: number;
}
