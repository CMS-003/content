import * as mongoose from 'mongoose';
import { BaseInfo } from './base_info';

export const ArticleInfoSchema = new mongoose.Schema(
  Object.assign(
    {
      type: Number, // 1: 文章, 2: 小说,
      resources: [
        {
          _id: String,
          _type: String, // image/video/ad
        },
      ],
    },
    BaseInfo,
  ),
  { collection: 'article_info' },
);
