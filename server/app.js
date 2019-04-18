const Koa = require("koa");
const app = new Koa();
const Static = require("koa-static")
const Router = require("koa-router")

const router =new Router()

// app.use(async ctx => {
//   ctx.body = "hello world";
// });


router.get("/server",async (ctx) => {
  let html = `
  <ul>
    <li><a href="/page/helloworld">/page/helloworld</a></li>
    <li><a href="/page/404">/page/404</a></li>
  </ul>
`
  ctx.body = html
})

app.use(router.routes())
app.listen(4200);
