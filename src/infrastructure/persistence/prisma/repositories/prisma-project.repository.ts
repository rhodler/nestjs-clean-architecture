import { Injectable } from '@nestjs/common';

import { ProjectRepository } from 'src/core/interfaces/repositories/project.repository.interface';
import { Projet } from 'src/core/domain/project/entities/project.entity';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaProjectRepository implements ProjectRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<Projet | null> {
    const project = await this.prisma.projects.findUnique({ where: { id } });

    return project ? Projet.instance(project) : null;
  }
}
