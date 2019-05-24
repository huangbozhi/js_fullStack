// 线性表
function LinkedNode(val){
    this.val = val;
    this.next = null;
}

function addTwoNumber(l1, l2){

}
console.log(a1, a2)

let a1 = new LinkedNode(7)  // head结点
console.log(a1)
let a2 = new LinkedNode(1)
let a3 = new LinkedNode(7)  //尾结点
a1.next = a2
a2.next = a3

let b1 = new LinkedNode(1)
let b2 = new LinkedNode(9)
b1.next = b2

let node = a1 // 表头
while(node){
    console.log(node.val)
    node = node.next
}