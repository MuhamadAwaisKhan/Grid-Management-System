// src/grid-station/dto/grid-station.dto.ts

import { ArrayNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreatePowerSupplierDto } from 'src/PowerSupplier/dto/power-supplier.dto';

export class CreateGridStationDto {
  @IsString()
  @IsNotEmpty()
   name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNumber()
  @IsNotEmpty()
  capacity: number;

  @IsNumber()
  @IsNotEmpty()
  voltageLevel: number;
  @IsOptional()
  @IsNumber()
  supplierId: number;
 
  
   //powersupplier: CreatePowerSupplierDto;
}
export class UpdateGridStationDto {
  @IsNotEmpty()
  @IsString()
   name: string;
  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNumber()
  @IsNotEmpty()
  capacity: number;

  @IsNumber()
  @IsNotEmpty()
  voltageLevel: number;
  @IsOptional()
  @IsNumber()
  supplierId: number;

 
}


 