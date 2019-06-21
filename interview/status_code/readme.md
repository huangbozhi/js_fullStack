HTTP 协议 req response
状态码：HTTP响应中(response)包含状态码

浏览器 代理 proxy

1xx 请求已经正在处理, 继续等待
2xx 请求已经成功处理 200 ok👌
3xx 重定向  Location
4xx 用户出现的错误(地址错误) 未授权 受限资源 404 not found
5xx 服务器端出现错误

301 永久跳转
uesr1 请求 www.xiaomi.com -> www.mi.com
告诉Internet
与3xx的区别 ，301是永久跳转, 告诉Internet把记录更新掉
301 可以在改变状态码, 不变, 
来展示理解 http://localhost:3000 301 永久跳转,再次访问, 浏览器有缓存, 不需要再走服务器了
302 临时跳转, 不会告诉Internet 或在前端缓存