// src/substation/dto/substation.dto.ts

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubstationDto {
  @IsNotEmpty()
  @IsString()
 readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  capacity: number;

  @IsNotEmpty()
  @IsNumber()
  voltageLevel: number;

  @IsNotEmpty()
  @IsNumber()
 readonly gridId: number;
}
