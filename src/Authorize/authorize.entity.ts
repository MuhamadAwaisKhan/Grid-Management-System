// src/authorize/entities/authorize.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class authorize {
  email(email: any, emailSubject: string, emailBody: string) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
  resetToken: string;
  resetTokenExpiration: Date;
}
