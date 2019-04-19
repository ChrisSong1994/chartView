const Koa = require("koa");
const app = new Koa();
// 对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
const bodyParser = require('koa-bodyparser')  // 
const Static = require("koa-static")
const Router = require("koa-router")
const Window = require("./routes/window")

const router = new Router()

app.use(bodyParser())
app.use(Window.routes())
app.use(router.routes())
app.listen(4200);
