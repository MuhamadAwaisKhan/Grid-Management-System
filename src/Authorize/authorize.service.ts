import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import {  authorize } from './authorize.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { AuthUserDto, CreateUserDto } from './dto/authorize.dto';

@Injectable()
export class AuthorizeService {
  sendEmailService: any;
  constructor(
    @InjectRepository(authorize)
    private readonly userRepository: Repository<authorize>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<{ message: string; authorize: authorize }> {
    const { username, password } = createUserDto;
  
    // Check if the username is already taken
    const existingUser = await this.userRepository.findOne({ where: { username } });
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }
  

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.userRepository.create({ username, password: hashedPassword });
    const savedUser = await this.userRepository.save(user);

    return { message: 'User created successfully', authorize: savedUser };
  }

  async getAllUsers(): Promise<authorize[]> {
    return this.userRepository.find();
  }

  async authUser(authUserDto: AuthUserDto): Promise<{ token: string }> {
    const { username, password } = authUserDto;
  
    const user = await this.userRepository.findOne({ where: { username } });
  
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
  
    // Generate JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, 'your-secret-key', { expiresIn: '1h' });
  
    return { token };
  }
  async forgetPassword(username: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { username } } as FindOneOptions<authorize>);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Generate a unique reset token (you may use a library like `uuid` for this)
    const resetToken = this.generateUniqueResetToken();

    // Store the reset token and expiration time (in a real-world scenario, store it securely)
    user.resetToken = resetToken;
    user.resetTokenExpiration = new Date(Date.now() + 3600000); // Reset token valid for 1 hour
    await this.userRepository.save(user);
  }

  generateUniqueResetToken(): string {
    // Implement your logic to generate a unique reset token, for example, using a library like `uuid`
    // Ensure it's stored securely and cannot be easily guessed
    return uuidv4(); // Replace with your actual logic to generate the reset token
  }
}

  //   // Generate a unique reset token (you may use a library like `uuid` for this)
  //   const resetToken = this.generateUniqueResetToken();

  //   // Store the reset token and expiration time (in a real-world scenario, store it securely)
  //   user.resetToken = resetToken;
  //   user.resetTokenExpiration = new Date(Date.now() + 3600000); // Reset token valid for 1 hour
  //   await this.userRepository.save(user);

  //   // Send a reset password email with the reset link
  //   const resetLink = `https://your-app.com/reset-password?token=${resetToken}&username=${username}`;
  //   const emailSubject = 'Password Reset Request';
  //   const emailBody = `Click on the following link to reset your password: ${resetLink}`;

  //   await this.sendEmailService.sendEmail(user.email, emailSubject, emailBody);
  // }

  // // ...

  // // Implement any additional methods or logic as needed

  // // ...

  // private generateUniqueResetToken(): string {
  //   // Implement your logic to generate a unique reset token, for example, using a library like `uuid`
  //   // Ensure it's stored securely and cannot be easily guessed
  //   return this.generateUniqueResetToken();
   
  
