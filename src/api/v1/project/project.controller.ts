import { Controller, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/project')
  async getList(): Promise<any[]> {
    return this.projectService.getList();
  }

  @Get('/project/:_id')
  async getInfo(@Param('_id') _id): Promise<any> {
    return this.projectService.getInfo({ _id });
  }
}
