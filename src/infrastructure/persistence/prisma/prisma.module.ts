import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

import { ProjectRepository } from 'src/core/interfaces/repositories/project.repository.interface';
import { PrismaProjectRepository } from './repositories/prisma-project.repository';

@Module({
  imports: [], // set .env
  providers: [
    PrismaService,
    {
      provide: ProjectRepository,
      useClass: PrismaProjectRepository,
    },
  ],
  exports: [PrismaService, ProjectRepository],
})
export class PrismaModule {}
