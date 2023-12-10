// src/asset-inventory/dto/asset-inventory.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateAssetInventoryDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  assetType: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  srNumber: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  installationDate: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // substationId: number;
}
