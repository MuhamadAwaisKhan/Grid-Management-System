// src/transformer/dto/transformer.dto.ts

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransformerDto {
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
  @IsNumber()
  voltageLevel: number;

  @IsNotEmpty()
  @IsNumber()
  substationId: number;
  @IsNotEmpty()
  @IsNumber()
  gridId: number;
}
