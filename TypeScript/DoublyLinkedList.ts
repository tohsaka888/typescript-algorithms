import { EqualsFn } from "./linklistTs.ts";

class DoublyNode<T> {
  prev: DoublyNode<T> | null;
  next: DoublyNode<T> | null;
  element: T;
  constructor(element: T) {
    this.prev = null;
    this.next = null;
    this.element = element;
  }
}

class DoublyLinkedList<T> {
  head: DoublyNode<T> | null;
  tail: DoublyNode<T> | null;
  equalsFn: EqualsFn<T>;
  count: number;
  constructor(equalsFn: EqualsFn<T>) {
    this.head = null;
    this.tail = null;
    this.equalsFn = equalsFn;
    this.count = 0;
  }
  insertElement(element: T): void {
    let node: DoublyNode<T> = new DoublyNode(element);
    if (this.head === null) {
      this.tail = node;
      this.head = node;
    } else {
      if (this.tail !== null) {
        this.tail.next = node;
      }
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }
  getElement(index: number): DoublyNode<T> | null {
    if (index >= 0 && index <= this.count) {
      let current: DoublyNode<T> | null = this.head;
      for (let i = 0; i < index && current !== null; i++) {
        current = current.next;
      }
      return current;
    }
    return null;
  }
  removeElement(index: number): T | null {
    if (index >= 0 && index <= this.count) {
      let current: DoublyNode<T> | null = this.head;
      if (index === 0 && current !== null) {
        this.head = current.next;
        if (this.count === 1) {
          this.tail = null;
        } else {
          if (this.head) {
            this.head.prev = null;
          }
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        if (current !== null) {
          this.tail = current.prev;
          if (this.tail) {
            this.tail.next = null;
          }
        }
      } else {
        let previous: DoublyNode<T> | null = this.getElement(index - 1);
        if (previous !== null) {
          current = previous.next;
          if (current !== null) {
            previous.next = current.next;
            (previous.next as DoublyNode<T>).prev = previous;
          }
        }
      }
      this.count--;
      return (current as DoublyNode<T>).element;
    }
    return null;
  }
}

export { DoublyLinkedList };
