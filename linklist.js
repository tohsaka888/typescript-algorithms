class LinkList {
  defaultEquals(a, b) {
    a === b;
  }
  constructor(equalsFn = this.defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }
  push(element) {
    let current = null;
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  searchElement(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && current !== null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  removeElement(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous = this.searchElement(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  insertToPosition(element, index) {
    if (index >= 0 && index <= this.count) {
      let node = new Node(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let previous = this.searchElement(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
const linklist = new LinkList();
linklist.push(1);
linklist.push(2);
linklist.push(3);
linklist.push(4);
linklist.push(5);
console.log(linklist.searchElement(3));
linklist.removeElement(3);
linklist.insertToPosition(8, 3);
console.log(linklist.searchElement(3));
