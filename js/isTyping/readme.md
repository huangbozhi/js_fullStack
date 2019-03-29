类型检测是js的考点

<!-- new Array()   [] -->
Object
Array  可遍历的的对象  for
JSON object 对象自变量 可枚举的对象  for(key in )
function 是一等对象     

typeof  不靠谱

1. Object.prototype.toString()  弥补typeo这个  []
    返回值 "[object object]" 
2. 借给Array用
    Object.prototype.toString.call([])
    返回值 "[object Array]"
    函数上就有call(api),动态指定内部this的指向

    (function(){})()立即执行函数

3. js的面向对象
    Type{isString}

4. 立即执行函数  +   嵌套函数定义  => 闭包 
    type 就在这些嵌套函数被调用是可以引用到