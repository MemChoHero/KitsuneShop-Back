import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { RedisModule } from './redis/redis.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
    imports: [
        TestModule,
        PrismaModule,
        RedisModule,
        AuthModule
    ]
})
export class AppModule {}
