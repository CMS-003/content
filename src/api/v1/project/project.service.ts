import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectType } from 'src/schema/project.schema';
import { CreateProjectDTO, UpdateProjectDTO } from '../../../DTO/project.dto';

@Injectable()
export class ProjectService {
  private baseModel;
  constructor(@InjectModel('Project') baseModel: Model<ProjectType>) {
    // super();
    this.baseModel = baseModel;
  }

  getModel() {
    return this.baseModel;
  }
  async getList(query = {}): Promise<any> {
    const docs = await this.baseModel.find(query).lean(true);
    return { items: docs };
  }

  async getInfo(query): Promise<any> {
    return this.baseModel.findOne(query).lean(true);
  }
}
