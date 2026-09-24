import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {

    private readonly saltRounds = +(process.env['BCRYPT_SALT_ROUNDS'] ?? 12);

    public async hash(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

    public async verify(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}