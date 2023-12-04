// src/authorize/authorize.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizeController } from './authorize.controller';
import { AuthorizeService } from './authorize.service';
import { authorize } from './authorize.entity';


@Module({
  imports: [TypeOrmModule.forFeature([authorize])],
  controllers: [AuthorizeController],
  providers: [AuthorizeService],
})
export class AuthorizeModule {}
