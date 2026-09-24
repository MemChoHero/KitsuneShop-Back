import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [TestModule, PrismaModule]
})
export class AppModule {}
