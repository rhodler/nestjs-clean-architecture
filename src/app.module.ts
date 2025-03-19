import { Module } from '@nestjs/common';

import { CoreModule } from './core/core.module';
import { DatabaseModule } from './infrastructure/persistence/database.module';

@Module({
  imports: [
    CoreModule,
    DatabaseModule.register({ global: true, type: 'prisma' }),
  ],
})
export class AppModule {}
