## 怎么用
- 只有一个参数省略括号
- 函数只有一条语句可以省略  {}  return
返回对象的时候 (),

## arguments
- 所有函数中(除了箭头函数)都可用的局部变量
- [arg1,arg2,arg3]

## 普通函数与箭头函数的区别
- 箭头函数不支持重名形参， 普通函数可以
- 箭头函数没有this， 他的this指向定义时所处的上下文(外部函数)  this
- 箭头函数不能通过  .call  .apply  ...  改变箭头函数的 this
- 箭头函数没有prototype属性
- 箭头函数不能作为构造函数
- 箭头函数没有arguments
- 箭头函数没有target


## new.target
- es6新增的
- 一般用在构造函数之内 返回new作用于的那个构造函数

## 类数组
- 有length属性
- 可以通过索引获取值
- Array.from()  从类数组对象中创建一个新的数组  