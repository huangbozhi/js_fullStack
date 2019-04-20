// script src="./http"></script>
// 引入一个模块, require 是一个模块关键字，COMMONJS
const http = require('http');
let i = 0;


http
    .createServer(function(request, response) {
        response.end(`Hello world! ${++i}`);
    })
    .listen(3000);


