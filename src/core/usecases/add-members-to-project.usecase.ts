import { Injectable } from '@nestjs/common';

import { ProjectMemberRepository } from '../repositories/member-project.repository';

@Injectable()
export class AddMembersToProjectUseCase {
  constructor(private projectMemberRepository: ProjectMemberRepository) {}

  async execute(id: number, data: { user_ids: number[] }) {
    const members = await this.projectMemberRepository.addMembersToProject(
      id,
      data,
    );

    return members;
  }
}
