Person 由prototype属性来解决它自身构造之外的原型上的属性或方法。
原型对象会有它的构造函数，  Person.prototype.constructor属性
第三者？ 实例 
实例 跟 Person有什么关系呢  ，Person.prototype 有关系

js 的实例跟类其实不是java等语言的血缘关系
xmm 实例是怎么来的呢？
new Person() 出来的
 1. Person函数运行 new 的方式，this=>new Object();
 2. xmm 怎么拿到Person.prototype原型对象上定义的方法  __proto__属性
 3. 方法有prototype属性,值为对象 开支 
 4. 任何对象都有__proto__属性 指向它的原型对象
 5. 原型对象上 有constrctor 属性指向谁-> 它的构造函数

原型链