import { User } from '../domain/user/entities/user.entity';

export abstract class ProjectMemberRepository {
  abstract findManyById(id: number): Promise<Partial<User>[] | []>;
  abstract addMembersToProject(
    id: number,
    data: { user_ids: number[] },
  ): Promise<Partial<User> | Partial<User>[]>;
}
