import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module.js';

@Module({
  imports: [TestModule],
})
export class AppModule {}
