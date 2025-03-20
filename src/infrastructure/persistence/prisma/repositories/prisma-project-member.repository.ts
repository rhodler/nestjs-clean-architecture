import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { ProjectMemberRepository } from 'src/core/repositories/member-project.repository';
import { ProjectMember } from 'src/core/domain/project-member/entities/project-member.entity';
import { User } from 'src/core/domain/user/entities/user.entity';

@Injectable()
export class PrismaProjectMemberRepository implements ProjectMemberRepository {
  constructor(private prisma: PrismaService) {}

  async findManyById(id: number): Promise<Partial<User>[] | []> {
    const projectsMembers = await this.prisma.projects_members.findMany({
      where: { project_id: id },
      include: {
        user: true,
      },
    });

    return projectsMembers.map(ProjectMember.getMemberDetails);
  }

  async addMembersToProject(
    id: number,
    data: { user_ids: number[] },
  ): Promise<Partial<User> | Partial<User>[]> {
    const projectsMembers = await this.prisma.projects_members.createMany({
      data: data.user_ids.map((user_id) => ({
        project_id: id,
        user_id,
      })),
    });

    return projectsMembers.map(ProjectMember.getMemberDetails);
  }
}
