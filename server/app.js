const Koa = require("koa");
// 对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
const bodyParser = require('koa-bodyparser')  // 
const Static = require("koa-static")
const Window = require("./routes/window")
const Data = require("./routes/data")
const app = new Koa();
const port = 4200

app.use(bodyParser())
app.use(Window.routes())
app.use(Data.routes())

app.listen(port, () => {
  console.log(`服务启动成功, 请访问localhost:${port}`);
});
