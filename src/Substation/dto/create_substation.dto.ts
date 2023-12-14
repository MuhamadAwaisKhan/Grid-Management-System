import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export default class CreateSubstationDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @ApiProperty()
  capacity: string;
  @ApiProperty()
  @IsNotEmpty()
  voltageLevel: string;
}
