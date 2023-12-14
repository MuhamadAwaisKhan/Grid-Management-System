// src/asset-inventory/dto/asset-inventory.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateAssetInventoryDto {
  @ApiProperty()
  @IsNotEmpty()

  assetType: string;
  @ApiProperty()
  @IsNotEmpty()

  srNumber: string;
  @ApiProperty()
  @IsNotEmpty()
 
  installationDate: string;
  @ApiProperty()
  @IsNotEmpty()
  
  status: string;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // substationId: number;
}
