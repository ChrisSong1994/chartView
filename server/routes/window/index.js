// 保存窗口
// 修改窗口名称
const router = require("koa-router")();
const DB = require("../../db/db");

router.post("/api/window/addWindow", async ctx => {
  let msg, isSuccess, data; // 接口返回信息
  const params = ctx.request.body;
  console.log(ctx.request.body)

  let newWindow = {
    windowId: params.windowId,
    title: params.title,
    widgets: params.widgets,
    date: params.date ? params.date : new Date(),
    size: params.size
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


module.exports = router
