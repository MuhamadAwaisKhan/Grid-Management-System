import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  Put,
} from '@nestjs/common';
import { AuthorizeService } from './authorize.service';
import {
  CreateUserDto,
  AuthUserDto,
  AuthUpdatePasswordDto,
} from './dto/authorize.dto';

@Controller('authorize')
export class AuthorizeController {
  constructor(private readonly authorizeService: AuthorizeService) {}

  @Post('register')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const result = await this.authorizeService.createUser(createUserDto);
    return { message: result.message, user: result.authorize };
  }

  @Get('profile')
  async getAllUsers() {
    const users = await this.authorizeService.getAllUsers();
    return { users };
  }

  @Post('login')
  async authUser(@Body() authUserDto: AuthUserDto) {
    const result = await this.authorizeService.authUser(authUserDto);
    return { token: result.token };
  }

  @Put('forget-password/:username')
  async forgetPassword(
    @Param('username') username: string,
    @Body() updatePasswordDto: AuthUpdatePasswordDto,
  ): Promise<object> {
    const result = await this.authorizeService.forgetPassword(
      username, 
      updatePasswordDto,
    );
    return result;
  }
}
