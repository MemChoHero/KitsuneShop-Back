import { ApiProperty } from '@nestjs/swagger';

export class RegisterRequest {
    @ApiProperty({
        example: 'user@example.com',
        description: 'User email address',
    })
    email: string;

    @ApiProperty({
        example: 'tenshi',
        description: 'Unique username',
    })
    nickname: string;

    @ApiProperty({
        example: 'StrongPassword123!',
        description: 'User password',
    })
    password: string;
}

export class IdResponse {
    @ApiProperty({
        example: 1,
        description: 'Created user ID',
    })
    id: number;
}