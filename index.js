// linked list node
class Node {
  value = null;
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  head = null;
  tail = null;
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    // first a pointing to old head
    newNode.next = this.head;
    // then making our new node new head.
    this.head = newNode;
  }
  pop() {
    let tempNode = this.head;
    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      return;
    }

    while (tempNode.next.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = null;
    this.tail = tempNode;
  }
  shift() {
    if (!this.head) {
      return;
    }

    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.head = this.head.next;
  }
  addAt(index, value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    let tempNode = this.head;
    let count = 1;
    while (count !== index && tempNode.next) {
      tempNode = tempNode.next;
      count++;
    }

    newNode.next = tempNode.next;
    tempNode.next = newNode;
  }

  print() {
    let temp = this.head;
    let result = "";
    while (temp) {
      result += `${temp.value}->`;
      temp = temp.next;
    }
    console.log(result + "NULL");
  }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.unshift(5);
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.shift();
list.shift();
list.shift();
list.shift();
list.shift();
list.shift();
list.addAt(3, 20);
list.addAt(1, 50);
list.print();
