// src/circuit-breaker/dto/circuit-breaker.dto.ts

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCircuitBreakerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsNumber()
  capacity: number;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsNumber()
  substationId: number;
  @IsNotEmpty()
  @IsNumber()
  mainId: number;
}
