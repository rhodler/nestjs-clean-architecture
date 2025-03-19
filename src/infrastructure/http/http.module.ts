import { Module } from '@nestjs/common';

import { ProjetsController } from './projects.controller';
import { GetProjectUseCase } from 'src/core/usecases/get-project.usecase';

@Module({
  imports: [],
  controllers: [ProjetsController],
  providers: [GetProjectUseCase],
})
export class HttpModule {}
