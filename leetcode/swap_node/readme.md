1. 新建一个src  npm init -y 
src是开发目录，写脚本  运行$ yarn add webpack webpack-cli webpack-dev-server -D 安装环境

- 无编译 不代码
  webpack 已经成为工作流程的霸主
  vue-cli 
  编译过程和js的promise一样，是一个异步的
  1. 代码写在dev  src/
  2. 上线在build  dist/
  3. 启动web服务器，webpack-dev-server

- webpack html template
  plugin html-webpack-plugin

- log 不在根目录下，怎么找到它呢，多写点地址  ./utils/log,js  alias

  resolve .js -> 
    module  
        rules
            .js  (use：)bable-loader

babel-core babel-cli babel-preset-env
babel-loader 有点兼容性问题 
module
rules: [
    {
        test: /\.js$/
        use: 'babel-loader'
    }
]
resolve: {
    extensions: ['.js]
}

8080  webpack-dev-server  启动 html-webpack-plugin 
template ./src/index.html
为什么 js 运行了 html + js

- webpack 一切皆可打包，打包到js里
  js里
  css对于js来说就是个文本
  img对于js 打包成base64
  但是css 应该独立打包，性能优化需要 .main.js 显示最慢