import * as mongoose from 'mongoose';
import { BaseInfo } from './base_info';

export const MaterialInfoSchema = new mongoose.Schema(
  Object.assign(
    {
      type: String, // image,video,doc
      path: String,
    },
    BaseInfo,
  ),
  { collection: 'material_info' },
);
