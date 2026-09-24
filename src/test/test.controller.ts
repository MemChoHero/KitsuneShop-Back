import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('/test')
export class TestController {

    @Get('')
    @ApiOperation({
        summary: 'Test route',
        description: 'First test route for anime shop'
    })
    public async getHello(): Promise<{ message: string }> {
        return { message: 'Hello world' };
    }
}