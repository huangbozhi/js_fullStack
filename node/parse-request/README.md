## 请求头
一次http事务有什么东西
-  请求：
  请求头、空行、请求体系、
  (请求头)content-type: 规定我们向服务端发送请求体的格式
  1. application/x-www-form-urlencoded
  form表单 默认的 发送请求的格式
  
  2. application/json 以json的格式发送
  {
	"name": "lihua",
	"age": 18
  }

-  响应头 空行 响应体
   content-type

通用首部：请求/响应