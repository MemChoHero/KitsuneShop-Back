import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuthRequest } from '../structs/users.js';
import { PasswordService } from './password.service.js';

@Injectable()
export class AuthService {

    public constructor(
        private readonly prisma: PrismaService,
        private readonly hasher: PasswordService
    ) {}

    public async register(request: AuthRequest): Promise<number> {
        const passwordHash = await this.hasher.hash(request.password);
        return (await this.prisma.user.create({
            data: {
                email: request.email,
                nickname: request.nickname,
                password: passwordHash
            }
        })).id;
    }
}