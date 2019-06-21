const http = require('http')
const hastname = '172.0.0.1'
const port = 3000

const server = http.createServer( (req, res) => {
  res.writeHead(302, {Location: 'http://itbilu.com/'})
  console.log(res._header)
  res.end()
})

server.listen(port)