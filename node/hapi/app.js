const Hapi = require('hapi');

const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops.js');
const routesOrders = require('./routes/orders.js');
const pluginHapiSwagger = require('./plugins/hapi-swagger');

const config = require('./config')
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ]);
  
  server.route([
    ...routesHelloHapi,
    ...routesShops,
    ...routesOrders
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();