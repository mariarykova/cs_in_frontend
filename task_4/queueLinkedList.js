import { LinkedList } from "../task_3/LinkedList/linkedList.js";

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  push(value) {
    this.linkedList.add(value);
  }

  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
}

const queue = new Queue();

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue);

//console.log(queue.head); // 10

//console.log(queue.pop()); // 10

//console.log(queue.head); // 11

//console.log(queue.pop()); // 11
//console.log(queue.pop()); // 12
//console.log(queue.pop()); // Exception
