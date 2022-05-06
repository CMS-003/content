import * as mongoose from 'mongoose';
import { BaseInfo } from './base_info';

export const ModuleInfoSchema = new mongoose.Schema(
  Object.assign(
    {
      name: String, // 模块名称
      view: String, // 模块视图类型
      tree_id: String, // 根节点id
      parent_id: String, // 父节点id
      refs: [
        {
          _id: String,
          _type: String,
        },
      ],
      attrs: {
        allowChange: Boolean,
        hide_title: Boolean,
        selected_children: [String], // _id数组
        columns: Number,
        interval: Number,
      },
      jump: {
        to: String, // tab,channel,page,url
        keyword: String,
      },
      nth: Number,
    },
    BaseInfo,
  ),
  { collection: 'module_info' },
);
