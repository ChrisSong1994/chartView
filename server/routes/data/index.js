// 数据管理
const router = require("koa-router")();
const DB = require("../../db/db");

// 添加数据
router.post("/api/data/addData", async ctx => {
  let msg, isSuccess, data; // 接口返回信息
  const params = ctx.request.body;
  console.log(params)

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
// 修改数据


module.exports = router