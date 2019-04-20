// 表结构设计
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//
const WindowSchema = new Schema({
  windowId: String, // id
  title: String,  // 标题
  date: String,  // 创建日期
  widgets: Object,  // 组件
  size:Object, // 宽高
});

const Models = {
  Window: mongoose.model("window", WindowSchema)
};

module.exports = Models;
