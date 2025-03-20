import { Module } from '@nestjs/common';

import { ProjetsController } from './projects.controller';
import { ProjectsMembersController } from './projects-members.controller';

import { GetProjectUseCase } from 'src/core/usecases/get-project.usecase';
import { GetProjectsMembersUseCase } from 'src/core/usecases/get-projects-members.usecase';

@Module({
  imports: [],
  controllers: [ProjetsController, ProjectsMembersController],
  providers: [GetProjectsMembersUseCase, GetProjectUseCase],
})
export class ControllerModule {}
