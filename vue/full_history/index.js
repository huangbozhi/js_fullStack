const http = require('http')
const fs = require('fs')

// 前端路由 sap -> 用户体验 更快，没有白屏 vue router component
// 后端路由 http server /api 数据 ajax

http.createServer(function(req, res) {
  var filepath = '.' + req.url;
  console.log('req.url:',req.url)
  if(filepath === './') {
    filepath = './index.html';
  } 
  readFile(filepath, res);
  console.log(8001)
}).listen(8001);

function readFile(path, res){
  fs.readFile(path, 'utf-8', (err, data) => {
    if(err) {
      // throw new Error('error!')
      readFile('./index.html', res)
    } else {
      console.log('res', data, '123')   // data-> index.html    router.js
      res.write(data);
      // console.log('res :ed', res, '123 :ed')
      res.end();
    }
  })
}