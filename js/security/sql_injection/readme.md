前端安全

表单  form -> url
POST data:{ email:'zm@163.com', password: '123456'}

后端 登录过程 sql 查找的过程
sql 语法报错 服务器出错

用户的输入不可信任
password' sql 的提前结束或者夺了一个'  500  编码解码

登录账号

select * from users where email = 'user@qq.com' and pass = 'password%27'
