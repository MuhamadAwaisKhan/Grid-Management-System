// src/asset-inventory/dto/asset-inventory.dto.ts

import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateAssetInventoryDto {
  @IsNotEmpty()
  @IsString()
  assetType: string;

  @IsNotEmpty()
  @IsString()
  srNumber: string;

  @IsNotEmpty()
  @IsDate()
  installationDate: Date;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsNumber()
  substationId: number;
}
