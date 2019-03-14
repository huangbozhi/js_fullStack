function hongbao(total,num){
    const arr= [];
    let restAmount =total;      //余额初始化为总钱
    let restNum = num;

    for(let i=0;i<num-1;i++){//剩余一个不发
        // 平均值的两倍
        let amount = parseFloat(Math.random()*(restAmount/restNum*2)).toFixed(2);
        restAmount-=amount;
        restNum--;
        arr.push(amount);
    }
    //最后一个人restAmount
    return arr;
}
console.log(hongbao (20,44))