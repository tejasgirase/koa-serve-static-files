const koa = require("koa");
const Router = require("koa-router");
const mount = require("koa-mount");
const serve = require("koa-static");
const koaSend = require("koa-send");

var app = new koa();

var router = Router(); //Instantiate the router

//First approach load from app instance
//Load static folder on particular path
app.use(mount("/dist", serve("dist")));

//Second approach load from router
//Load static folder on router path that will
//Load public folder from root directory
router.get("/public/(.*)", async (ctx) =>
  koaSend(ctx, ctx.path, {
    root: "./",
  })
);

app.use(router.routes());
app.listen(4200);
