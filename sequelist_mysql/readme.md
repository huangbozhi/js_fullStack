- sequelize 脚手架
  mysql2 数据驱动 
  sequelize orm 工具 table -> object
  对底层的sql API 化 model
  sequelize-cli 命令行工具


- 进入mysql命令行
  mysql -u root -p
- 初始化
  npm init -y 
- 安装依赖
  yarn add mysql2 sequelize sequelize-cli -S
  ./node_modules/.bin/sequelize init
- 修改config passsword(123456)
  ./node_modules/.bin/sequelize db:create
- 建表 或 修改表
  ./node_modules/.bin/sequelize migration:create --name create-shops-table
- 执行迁移
 ./node_modules/.bin/sequelize db:migrate
- 初始数据
  ./node_modules/.bin/sequelize seed:create --name init-shops
