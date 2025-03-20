import { Injectable } from '@nestjs/common';

import { ProjectRepository } from '../repositories/project.repository';

@Injectable()
export class GetProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(id: number) {
    const project = await this.projectRepository.findById(id);

    return project;
  }
}
