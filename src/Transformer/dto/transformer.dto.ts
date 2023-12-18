// src/transformer/dto/transformer.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransformerDto {
  @ApiProperty()
  @IsNotEmpty()
 
  name: string;
  @ApiProperty()
  @IsNotEmpty()

  type: string;
  @ApiProperty()
  @IsNotEmpty()
 
  capacity: number;


  @ApiProperty()
  @IsNotEmpty()

  voltageLevel: number;

}
