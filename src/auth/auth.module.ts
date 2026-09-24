import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { PasswordService } from './password.service.js';
import { MailService } from '../mail/mail.service.js';
import { AuthController } from './auth.controller.js';

@Module({
    providers: [AuthService, PasswordService, MailService],
    controllers: [AuthController]
})
export class AuthModule {

}