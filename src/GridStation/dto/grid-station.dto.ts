// src/grid-station/dto/grid-station.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreatePowerSupplierDto } from 'src/PowerSupplier/dto/power-supplier.dto';

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
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  supplierId: number;
 
  
   //powersupplier: CreatePowerSupplierDto;
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
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  supplierId: number;

 
}


 