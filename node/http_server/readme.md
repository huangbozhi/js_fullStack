1. MVVM  前端新贵
 Model 数据 Page({data:{
     legends:[]
 }})
 View 视图: WXML
 VM: {{}}  wx:for ...

- MVC  经典的web开发模式
  Model => SQL
  View => 静态页面
  Controller => 路由,


- WebServer 软件程序 
Web服务器硬件运行WebServer程序的
ip http协议 
http://127.0.0.1:3000
端口    不只一个服务器
3306    MYSQL、
80  Web服务
http
    .createServer(function(request, response){
        response.end('Hello world');
    })
    .listen(3000)


request 用户  N  Web Server一直在3000端口号上伺服
request 就能找到这家店  每位用户到达，会触发事件，调用createServer 回调函数，request 用户身份,
response ？ 响应请求  http响应之后就断开