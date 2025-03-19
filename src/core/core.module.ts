import { Module } from '@nestjs/common';
import { HttpModule } from 'src/infrastructure/http/http.module';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [],
})
export class CoreModule {}
