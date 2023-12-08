// src/grid-station/dto/grid-station.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PowerSupplierEntity } from 'src/PowerSupplier/power-supplier.entity';

export class CreateGridStationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  location: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  capacity: number;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  voltageLevel: number;

  // @IsOptional()
  // @IsNumber()
  // supplier: PowerSupplierEntity;
}
export class UpdateGridStationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  location: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  capacity: number;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  voltageLevel: number;

  
  // @IsOptional()
  // @IsNumber()
  // supplier: PowerSupplierEntity;
}
