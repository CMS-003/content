import * as mongoose from 'mongoose';
export const CounterInfoSchema = new mongoose.Schema(
  {
    _id: { type: String },
    resource_id: String,
    resource_type: String,
    created_at: {
      type: Date,
      required: true,
    },
    // TODO: date,platform,device
    like: Number,
    dislike: Number,
    read: Number, // 阅读
    share: Number, // 分享
    comment: Number, // 评论
    bullet: Number, // 弹幕
    collect: Number, // 收藏
    subscribe: Number, // 订阅
    download: Number, // 下载
    support: Number, // 支持
    oppose: Number, // 反对
    // score: Number,
  },
  {
    collection: 'counter_info',
  },
);
