## 界面大框架及经验

水平方向一般禁止滚动条， 垂直方向出现滚动条
- 水平和垂直两个方向都滚动，页面摇晃， 容易产生误操作
- 垂直方向一直滚动是开放主要方式

margin:0 auto;
max-width:960px;   通用
- flex 布局
- flex-grow ：放大  flex-basis：  flex-shrink：缩小  flex-wrap
当网页由pc到mobile时,缩小阵仗 

经验 ：简单的适配PC -> mobile 照顾所有的用户
PC端 大手大脚一点，  max-width  margin:0 auto  padding  margin

mobile里: flex-shrink 让关键部分坚挺一点