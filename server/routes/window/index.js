// 保存窗口
// 修改窗口名称
const Router = require("koa-router");
const DB = require("../../db/db");
const router = new Router()

// 保存窗口
router.post("/api/window/addWindow", async ctx => {
  let msg, isSuccess, data; // 接口返回信息
  const params = ctx.request.body;
  let newWindow = {
    id: params.id,
    name: params.name,
    createTime: params.createTime ? params.createTime : new Date(),
    widgets: params.widgets,
    width: params.width,
    height: params.height,
    backgroundType: params.backgroundType,
    background: params.background,
  };

  try {
    let result = await DB.save("Window", newWindow);
    data = result;
    isSuccess = true;
    msg = "添加窗口成功!";
  } catch (e) {
    isSuccess = false;
    msg = "添加窗口失败!";
  }
  // 接口返回结果
  ctx.body = {
    success: isSuccess,
    message: msg,
    data: data
  };
})

// 获取全部窗口
router.post("/api/window/getWindows", async ctx => {
  let msg, isSuccess, data, total; // 接口返回信息
  let query = {}; // 查询条件
  let sort = {};
  let pagination = {};

  const params = ctx.request.body;
  if (params.page !== undefined && params.limit !== undefined) {
    pagination = {
      page: params.page - 1, // 页码
      limit: params.limit // 一页条数
    };
  }

  if (params.title !== undefined) {
    query.title = params.title
  }

  try {
    let result = await DB.find("Window", query, pagination, sort);
    let allResult = await DB.find("Window", {}, {}, {})
    data = result;
    total = allResult.length

    if (data) {
      isSuccess = true;
      msg = "获取窗口成功!";
    } else {
      isSuccess = false;
      msg = "获取窗口失败!";
    }
  } catch (e) {
    isSuccess = false;
    msg = "获取窗口失败!";
  }

  ctx.body = {
    success: isSuccess,
    message: msg,
    data: data,
    total: total
  };
})

// 根据窗口id获取窗口信息
router.get("/api/window/getWindow", async ctx => {
  let msg, isSuccess, data; // 接口返回信息
  const id = ctx.query.id
  try {
    let result = await DB.findOne("Window", { id },{},{});
    data = result;
    if (data) {
      isSuccess = true;
      msg = "获取窗口成功!";
    } else {
      isSuccess = false;
      msg = "获取窗口失败!";
    }
  } catch (e) {
    isSuccess = false;
    msg = "获取窗口失败!";
  }

  ctx.body = {
    success: isSuccess,
    message: msg,
    data: data
  };
})



// 更新窗口
router.post("/api/window/updateWindow", async ctx => {
  let msg, isSuccess, data; // 接口返回信息
  const params = ctx.request.body;
  const id = params.id;
  let newWindow = {
    title: params.title,
    widgets: params.widgets,
    date: params.date ? params.date : new Date(),
    size: params.size
  };
  try {
    let result = await DB.update("Window", { id }, newWindow);
    data = result;
    isSuccess = true;
    msg = "更新窗口成功!";
  } catch (e) {
    isSuccess = false;
    msg = "更新文章失败!";
  }

  ctx.body = {
    success: isSuccess,
    message: msg,
    data: data
  };
})


// 删除窗口
router.post("/api/window/deleteWindow", async ctx => {
  let msg, isSuccess, data; // 接口返回信息
  const params = ctx.request.body;
  const id = params.id
  try {
    let result = await DB.remove("Window", { id });
    data = result;
    if (data) {
      isSuccess = true;
      msg = "删除窗口成功!";
    } else {
      isSuccess = false;
      msg = "删除窗口失败!";
    }
  } catch (e) {
    isSuccess = false;
    msg = "删除窗口失败!";
  }
  ctx.body = {
    success: isSuccess,
    message: msg,
    data: data
  };
});



module.exports = router
