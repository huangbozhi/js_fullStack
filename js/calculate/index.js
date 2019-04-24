
// 会计   年终奖
// 绩效 S->5  A->3  B->2  C->3  D->

// 一个一个的策略函数
var perfomanceX = function(salary){
    return salary * 60;
}
var perfomanceS = function(salary){
    return salary * 5;
}
var perfomanceA = function(salary){
    return salary * 3;
}
var perfomanceB = function(salary){
    return salary * 2;
}
var perfomanceC = function(salary){
    return salary;
}

var calcuateBounce = function(perfomanceLevel, salary){
    switch(perfomanceLevel){
      case "X": salary = perfomanceX(salary); break;
      case "S": salary = perfomanceS(salary); break;
      case "A": salary = perfomanceA(salary); break;
      case "B": salary = perfomanceB(salary); break;
      case "C": salary = perfomanceC(salary); break;
    }
    return salary;
}
// 会计发钱的，制定发钱策略的区分开来，
console.log(calcuateBounce('X',2000));