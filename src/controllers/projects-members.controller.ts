import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { User } from 'src/core/domain/user/entities/user.entity';
import { AddMembersToProjectUseCase } from 'src/core/usecases/add-members-to-project.usecase';

import { GetProjectsMembersUseCase } from 'src/core/usecases/get-projects-members.usecase';

@Controller('/projects')
export class ProjectsMembersController {
  constructor(
    private readonly getProjectsMembersUseCase: GetProjectsMembersUseCase,
    private readonly addMembersToProjectUsecase: AddMembersToProjectUseCase,
  ) {}

  @Get(':id/members')
  async getProjectMembersById(
    @Param('id') id: string,
  ): Promise<Partial<User>[] | []> {
    const projectsMembers = await this.getProjectsMembersUseCase.execute(
      Number(id),
    );

    return projectsMembers;
  }

  @Post(':id/members')
  async addMembersToProject(
    @Param('id') id: string,
    @Body() data: { user_ids: [] },
  ): Promise<Partial<User> | Partial<User>[]> {
    const members = await this.addMembersToProjectUsecase.execute(
      Number(id),
      data,
    );

    return members;
  }
}
