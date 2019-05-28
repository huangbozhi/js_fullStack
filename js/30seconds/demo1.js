// 高阶函数的考题
// ary 运行结果是函数， 
const ary = (fn, n) => (...args) =>  fn(...args.slice(0, n));
const firstTwoMax = ary(Math.max, 2)
console.log([[2,6,'a'], [2,5,8,6], [10]].map( x => firstTwoMax(...x)))