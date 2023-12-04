import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuthorizeService } from './authorize.service';
import { CreateUserDto, AuthUserDto } from './dto/authorize.dto';

@Controller('authorize')
export class AuthorizeController {
  constructor(private readonly authorizeService: AuthorizeService
    
    ) {}

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

  @Post('forget-password/:username')
  async forgetPassword(@Param('username') username: string) {
    try {
      await this.authorizeService.forgetPassword(username);
      return { message: 'Forget password process initiated. Check your email for further instructions.' };
    } catch (error) {
      // Handle any errors and return an appropriate response
      console.error(error);
      throw error;
    }
}
}
