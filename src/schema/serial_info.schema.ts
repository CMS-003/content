import * as mongoose from 'mongoose';
import { BaseInfo } from './base_info';

export const SerialInfoSchema = new mongoose.Schema(
  Object.assign(
    {
      episodes: Number,
      duration: Number,
      resources: [
        {
          _id: String,
          _type: String,
        },
      ],
    },
    BaseInfo,
  ),
  { collection: 'serial_info' },
);
