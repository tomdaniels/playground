class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return current.val;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) return null;
    var count = i;
    let node = this.head;
    while (count > 0) {
      node = node.next;
      count--;
    }
    return node;
  }

  set(i, val) {
    const found = this.get(i);
    if (found) {
      found.val = val;
      return true;
    }
    return false;
  }

  insert(pos, val) {
    if (pos < 0 || pos > this.length) return false;
    if (pos === this.length) return !!this.push(val);
    if (pos <= 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prevNode = this.get(pos - 1);
    const prevNext = prevNode.next;
    prevNode.next = newNode;
    newNode.next = prevNext;
    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i > this.length) return undefined;
    if (i === this.length - 1) return !!this.pop();
    if (i === 0) return !!this.shift();

    const node = this.get(i -1);
    const toDelete = node.next;
    node.next = toDelete.next;
    this.length--;
    return toDelete;
  }
}

const list = new SinglyLinkedList();

list.push('HELLOO');
list.push('GOODBYE');
list.push('me');


list.remove(0);
console.log(list);

// console.log('pop', list.pop());
// HELLO -> GOODBYE   |return me
//                             c         
//           nt


// console.log(list, list.length);

// console.log(list.get(0));


// console.log(list.tail.val);
// console.log(list.head.val);

// console.log(list);