import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {

    private readonly redis: Redis;

    public constructor() {
        this.redis = new Redis({
            host: process.env['REDIS_HOST'] ?? 'localhost',
            port: +(process.env['REDIS_PORT'] ?? 6379)
        });
    }

    public async get(key: string): Promise<string | null> {
        return this.redis.get(key);
    }

    public async set(key: string, value: string, ttl?: number): Promise<'OK'> {
        if (ttl) {
            return this.redis.set(key, value, 'EX', ttl);
        }
        return this.redis.set(key, value);
    }

    public async del(key: string): Promise<number> {
        return this.redis.del(key);
    }
}