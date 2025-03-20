import { Controller, Get, Param } from '@nestjs/common';
import { Projet } from 'src/core/domain/project/entities/project.entity';
import { GetProjectUseCase } from 'src/core/usecases/get-project.usecase';

@Controller('/project')
export class ProjetsController {
  constructor(private readonly getProjectUseCase: GetProjectUseCase) {}

  @Get(':id')
  async getProjectById(@Param('id') id: string): Promise<Projet | null> {
    return this.getProjectUseCase.execute(Number(id));
  }
}
