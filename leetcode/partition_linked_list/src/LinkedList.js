import LinkedListNode from './LinkedListNode';

class LinkedList{
  constructor() {
    // 1 -> 4 -> 3 -> 2 -> 5
    this.head = null;
    this.tail = null;
  }
  append(value){
    const newNode = new LinkedListNode(value);
    if(!this.head){ // 当前是空链表
      this.head = newNode;
      this.tail = newNode;
    } else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    console.log(this,'append')
    return this;
  }
  toArray () {
    const nodes = [];
    let currentNode = this.head;
    while(currentNode){
      nodes.push(currentNode);
      currentNode = currentNode.next
    }
    return nodes;
  }
  toString() {
    // console.log(this.toArray())
    return this.toArray().map(node => node.val)
  }
}

export default LinkedList;