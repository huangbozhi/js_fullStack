#  作用域 Scope
Document DOM
    getElementsByTagName
    getElementsByClassName
    querySelector
    querySelectorall
window BOM
    全局定义了 var name="hbz";
    全局变量 前端 js window
    局部变量 function(){}
    window js 是一个内嵌在浏览器中的脚本语言，它与其他语言不一样的地方在于他有一个window，全局变量挂载在window上
        console。log(name);    console.log(window.name);
    window 类型 typeof
    数值 字符串 布尔值 null undefined Symbol object
    const let 比var 优秀的地方 遵守块级作用域
    全局 -> 函数局部 -> 块级作用域
    scope 范围

    setTimeout  异步的内置函数
    for 循环 立即同步执行 
    1000ms之后 i var 变成了10

    let 块级作用域 for{ 块级作用域 let }
    1000ms后，