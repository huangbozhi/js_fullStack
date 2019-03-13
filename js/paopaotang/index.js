// Player类，构造函数
// "use strict";
function Player(name){
    // constructor  构造函数
    // 全局 ||  指向的对象
    console.log(this);
     this.name=name;
     this.enemy=null;
}

//js类的方法要定义在prototype
Player.prototype.win = function(){
    console.log(this.name+" win");    
}

Player.prototype.lose = function(){
    console.log(this.name+" lose");
}

// Player("大白");      //普通函数调用

var player1 = new Player("皮蛋");
var palyer2 = new Player("小怪");
// console.log(player1.name,palyer2.name)
//  win函数， 作为对象的方法被调用
//  this会指向对象本身
player1.enemy=palyer2.name;
palyer2.enemy=player1.name;
player1.win();
palyer2.lose();
