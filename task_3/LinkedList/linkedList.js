class NodeList {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  add(value) {
    const newNode = new NodeList(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.prev = this.last;
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  *[Symbol.iterator]() {
    let current = this.first;

    if (!current) {
      yield { value: undefined, done: true };
    }

    while (current) {
      yield { value: current.value, done: false };
      current = current.next;
    }

    return { done: true };
  }
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);

console.log(list);
console.log(list.first.value); // 1
console.log(list.last.value); // 3
console.log(list.first.next.value); // 2
console.log(list.first.next.prev.value); // 1

for (const value of list) {
  console.log("iteration", value);
}
