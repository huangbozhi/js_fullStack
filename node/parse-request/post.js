// node 自带的
const http = require('http')
//  user/list
//  Post
// [{name: 'x'},{name: 'm'}]

// 监听在8080端口的服务
const userList = [{name: 'x'},{name: 'm'}]
http.createServer((req, res) => {
    // 向我们的浏览器返回内容
    const method = req.method
    const url = req.url
    if(method.toLowerCase() === 'post' && url === '/user/list'){
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        })
        req.on('end', () => {

        })
        // res.writeHead(200, {
        //     "Content-Type": "application/json"
        // })
        // res.end(JSON.stringify(userList))
    }else{
        res.end('请求方式不对')
    }
   
}).listen(8080, () => {
    console.log('server is running 8080')
})