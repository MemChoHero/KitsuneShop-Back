import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { PasswordService } from './password.service.js';

@Module({
    providers: [AuthService, PasswordService]
})
export class AuthModule {

}