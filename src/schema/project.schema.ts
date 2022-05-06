import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'project_info', timestamps: {} })
export class Project {
  @Prop()
  _id: string;

  @Prop()
  title: string;
}
export type ProjectType = Project;
export const ProjectSchema = SchemaFactory.createForClass(Project);
