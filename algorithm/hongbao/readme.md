如何实现红包算法
国定金额的红包，由若干个人来抢，规则？

1. 抢到金额之和等于红包金额，不能超过，也不能少于总额。
2. 手气王，至少0.01，
3. 金额随机，产生一个随机数，公平，每个人抢到金额的概率要相

计算过程，变量计算的本质
发钱？  total = restAmount(将会减少)
restNum-- == num
随机一次，restAmount = total-随机数
最后一个人，那最后的钱 for(let i=0;i< num-1;i++)
每次随机，钱数是我们需要的，push 数组里，
总和，

Math是数学对象
Math.random()
parseFloat()  解析为浮点数
parseFloat().toFixed(保留小数点的位数)
类型的转换  "12.3"=>23.1   parseFloat

console.log(Math.ceil(2.1))    ceil  向上取整
VM375:1 3
console.log(Math.floor(2.3))   floor 向下取整
VM313:1 2
console.log(Math.round(8.2))   round 四舍五入
VM431:1 8

0-9 之间随机的整数  
let max = 100;
let min = 0;
最小值与最大值之间的数
min+Math.floor(Math.random()*(max-min));