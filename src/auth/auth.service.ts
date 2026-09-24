import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { RegisterRequest } from '../structs/users.js';
import { PasswordService } from './password.service.js';
import { randomBytes } from 'node:crypto';
import { RedisService } from '../redis/redis.service.js';
import { MailService } from '../mail/mail.service.js';

@Injectable()
export class AuthService {

    private readonly REDIS_KEY_PREFIX = 'email-verification';

    public constructor(
        private readonly prisma: PrismaService,
        private readonly hasher: PasswordService,
        private readonly redis: RedisService,
        private readonly mailer: MailService
    ) {}

    public async emailVerify(token: string): Promise<void> {
        const userId = await this.redis.get(`${this.REDIS_KEY_PREFIX}:${token}`);
        if (!userId) {
            throw new ForbiddenException('Token is invalid or expired');
        }

        const user = await this.prisma.user.findUnique({
            where: { id: +userId }
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (user.active) {
            throw new ConflictException('User already verified');
        }

        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                active: true
            }
        });

        await this.redis.del(`${this.REDIS_KEY_PREFIX}:${token}`);
    }

    public async register(request: RegisterRequest): Promise<number> {
        const passwordHash = await this.hasher.hash(request.password);
        const userId = (await this.prisma.user.create({
            data: {
                email: request.email,
                nickname: request.nickname,
                password: passwordHash
            }
        })).id;

        const token = randomBytes(32).toString('hex');
        await this.redis.set(`${this.REDIS_KEY_PREFIX}:${token}`, userId.toString(), 3600);

        const apiUrl = process.env['API_URL'] ?? 'http://localhost:3000';
        const confirmLink = apiUrl + '/auth/registration-verify/?token=' + token;

        await this.mailer.sendMail(
            request.email,
            'Kitsune shop: подтверждение регистрации.',
            `<p>Ваша ссылка для подтверждения: <a href="${confirmLink}">тык сюда</a>.
                Если вы не регистрировались на нашем сайте - проигнорируйте это письмо.
            </p>`
        );

        return userId;
    }
}