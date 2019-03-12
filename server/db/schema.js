// 表结构设计
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//
const WindowsSchema = new Schema({
  windowId: String,
  title: String,
  date: String,
  widgets: Object
});

const Models = {
  Windows: mongoose.model("todo", WindowsSchema)
};

module.exports = Models;
