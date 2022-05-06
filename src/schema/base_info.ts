export const BaseInfo = {
  _id: { type: String },
  user_id: { type: String },
  title: String,
  desc: String,
  cover: String,
  content: String,
  region_code: { type: String, comment: '国家或地区代码' },
  language_code: { type: String, comment: '语言代码' },
  types: { type: [String], comment: '分类信息' },
  series: { type: String, comment: '系列' },
  created_at: {
    type: Date,
    required: true,
  },
  modified_at: {
    type: Date,
  },
  published_at: {
    type: Date,
    required: true,
    comment: '发布时间',
  },
  tags: [String],
  config: {
    type: {
      canComment: Number,
      canDanmaku: Number,
      canDownload: Number,
      canCopy: Number,
      canCache: Number,
    },
    default: {},
  },
  status: {
    type: Number,
    enum: [1, 2, 3],
    comment: '1: finished, 2: 连载中, 3: 封禁',
  },
};
