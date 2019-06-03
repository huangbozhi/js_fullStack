const Koa = require('koa')
const app = new Koa();

app.use( async(ctx, next) => {
  const start = Date.now();
  await next();
  const end = Date.now();
  const diff = end - start;
  // 放入响应头里面 writeHead Content-type
  ctx.set('X-Response-Time', `${diff}ms`);
  console.log(`spend ${diff}ms`);
})
// response 
app.use( async(ctx) => {
  ctx.body = 'hello Koa';
})

app.listen(4000, () => {
  console.log('server is running 4000')
})