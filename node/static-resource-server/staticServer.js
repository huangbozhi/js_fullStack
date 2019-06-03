const http = require('http');
const fs = require('fs');
const path = require('path');

// 浏览器一直转圈，说明没有响应
http.createServer( (req, res) => {
    // console.log(req.url)
    // /static/index.html -> 
    // /static/xgs.jpg -> 
    const url = req.url;
    // ^(以什么开头)
    if(/^\/static\//.test(url)){
        staticServer(req, res);
        return false;
    }
    // fs.readFile('./static/index.html', 'binary', (err, file) => {
    //     res.write(file, 'binary');
    //     res.end();
    // })
}).listen( 8080, () => {
    console.log('server is running 8080')
})
function staticServer(req, res){
    var url = req.url;
    console.log('url',url);
    if(url === '/static/') url += 'index.html';
    const filePath = path.join(__dirname, url)
    fs.exists(filePath, exists => {
        if(!exists){
            res.end(`the request url: ${url} was not found`);
        } else{
            fs.readFile(filePath, 'binary', (err, file) => {
                if(!err){
                    res.write(file, 'binary');
                    res.end();
                }
            })
        }
    })
}