// src/authorize/dto/authorize.dto.ts

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
     username: string;
     @ApiProperty()  
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(30)
     password: string;
  }
  
  export class AuthUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
     username: string;
     
     @ApiProperty()
    @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(30)
     password: string;
     
  }
  export class AuthUpdatePasswordDto {
   @ApiProperty()
   currentPassword: string;
   @ApiProperty()
   newPassword: string;
 }
  