// 数据管理
const Router = require("koa-router");
const DB = require("../../db/db");
const router = new Router()

// 添加数据
router.post("/api/data/addData", async ctx => {
  let msg, isSuccess, data; // 接口返回信息
  const params = ctx.request.body;

  let newData = {
    id: params.id,
    name: params.name,
    data: params.data
  };

  try {
    let result = await DB.save("Data", newData);
    data = result;
    isSuccess = true;
    msg = "添加数据成功!";
  } catch (e) {
    isSuccess = false;
    msg = "添加数据失败!";
  }
  // 接口返回结果
  ctx.body = {
    success: isSuccess,
    message: msg,
    data: data
  };
})


// 删除数据
router.post("/api/data/deleteData", async ctx => {
  let msg, isSuccess, data; // 接口返回信息
  const params = ctx.request.body;
  const dataId = params.dataId
  try {
    let result = await DB.remove("Data", { dataId });
    data = result;
    if (data) {
      isSuccess = true;
      msg = "删除数据成功!";
    } else {
      isSuccess = false;
      msg = "删除数据失败!";
    }
  } catch (e) {
    isSuccess = false;
    msg = "删除数据失败!";
  }
  ctx.body = {
    success: isSuccess,
    message: msg,
    data: data
  };
});

// 获取所有数据
router.post("/api/data/getDatas", async ctx => {
  let msg, isSuccess, data, total; // 接口返回信息
  let query = {}; // 查询条件
  let sort = {};
  let pagination = {};

  const params = ctx.request.body;
  if (params.page !== undefined && params.limit !== undefined) {
    pagination = {
      page: params.page, // 页码
      limit: params.limit // 一页条数
    };
  }

  try {
    let result = await DB.find("Data", query, pagination, sort);
    let allResult = await DB.find("Data", {}, {}, {})
    data = result;
    total = allResult.length
    if (data) {
      isSuccess = true;
      msg = "获取数据成功!";
    } else {
      isSuccess = false;
      msg = "获取数据失败!";
    }
  } catch (e) {
    isSuccess = false;
    msg = "获取数据失败!";
  }
  ctx.body = {
    success: isSuccess,
    message: msg,
    data: data,
    total: total
  };
});


// 修改数据
// 更新窗口
router.post("/api/data/updateData", async ctx => {
  let msg, isSuccess, data; // 接口返回信息
  const params = ctx.request.body;
  const dataId = params.dataId;
  let newData = {
    name: params.name,
    data: params.data
  };
  try {
    let result = await DB.update("Data", { dataId }, newData);
    data = result;
    isSuccess = true;
    msg = "更新数据成功!";
  } catch (e) {
    isSuccess = false;
    msg = "更新数据失败!";
  }

  ctx.body = {
    success: isSuccess,
    message: msg,
    data: data
  };
})

module.exports = router