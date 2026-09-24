import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { ApiOperation } from '@nestjs/swagger';
import { IdResponse, RegisterRequest } from '../structs/users.js';
import { SuccessResponse } from '../structs/common.js';

@Controller('/auth')
export class AuthController {

    public constructor(private readonly authService: AuthService) {}

    @Post('/register')
    @ApiOperation({
        summary: 'Register a new user'
    })
    public async register(@Body() request: RegisterRequest): Promise<IdResponse> {
        const id = await this.authService.register(request);
        return { id };
    }

    @Get('/registration-verify')
    @ApiOperation({
        summary: 'Verify user email'
    })
    public async registrationVerify(@Query('token') token: string): Promise<SuccessResponse> {
        await this.authService.emailVerify(token);
        return { success: true };
    }
}