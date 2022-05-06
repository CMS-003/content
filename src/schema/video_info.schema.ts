import * as mongoose from 'mongoose';
import { BaseInfo } from './base_info';

export const VideoInfoSchema = new mongoose.Schema(
  Object.assign(
    {
      release_at: { type: Date, comment: '上映时间' },
      roles: [
        {
          role: {
            type: String,
            comment: '角色.如导游,主演',
          },
          members: [
            {
              _id: String,
              name: String,
              avatar: String,
            },
          ],
          _id: false,
        },
      ],
      width: Number,
      height: Number,
      duration: Number,
      type: {
        type: Number,
        enum: [1, 2, 3, 4, 5], // 1: 正片, 2: 预告teaser, 3: 花絮trailer 4: 短视频 5: 电影
      },
      quality: {
        type: [
          {
            quality: String,
            url: String,
            size: Number,
          },
        ],
      },
      subtitle: [
        {
          type: [
            {
              lang: String,
              url: String,
            },
          ],
        },
      ],
    },
    BaseInfo,
  ),
  { collection: 'video_info' },
);
