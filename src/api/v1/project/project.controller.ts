import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Post,
  Delete,
  HttpException,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import * as shortid from 'shortid';

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

  @Put('/project/:id')
  async update(@Param('id') id, @Body() data: any): Promise<any> {
    return this.projectService.update({ _id: id }, data);
  }

  @Post('/project')
  async create(@Body() data): Promise<any> {
    return this.projectService.create({ ...data, _id: shortid() });
  }

  @Delete('/project/:_id')
  async destroy(@Param('_id') _id): Promise<any> {
    return this.projectService.destroy({ _id });
  }
}
