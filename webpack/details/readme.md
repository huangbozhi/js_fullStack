devDependencies 开发
Dependencies 所有阶段
webpack 打包工具 构建应用的 

打包之前  devlopment src/
打包之后  build dist/  不再需要我们的webpack了 部署到服务器

- webpack-dev-server
  webpack打包好之后，将打包后的内容在浏览器8080端口启动，是前端开发的标准
  在一个端口打开web server
  实时的编译 watch HMR

  网页webpack打包的过程是这样的
  index.js是入口，打包成为main.js 
  index.html 首页的模板 main.js会由webpack-dev-server自动的放在index.html的最后面 script 引入