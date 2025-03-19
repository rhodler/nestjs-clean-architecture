import { Injectable } from '@nestjs/common';

import { ProjectRepository } from '../interfaces/repositories/project.repository.interface';

@Injectable()
export class GetProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(id: number) {
    const project = await this.projectRepository.findById(id);

    return project;
  }
}
