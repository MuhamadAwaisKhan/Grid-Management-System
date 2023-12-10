// src/transformer/dto/transformer.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransformerDto {
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
  @IsNumber()
  voltageLevel: number;

}
