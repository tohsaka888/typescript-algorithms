class DoublyNode {
    constructor(element) {
      this.element = element;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedLists {
    constructor(equalsFn = this.defaultEquals) {
      this.equalsFn = equalsFn;
      this.tail = null;
      this.head = null;
      this.count = 0;
    }
    defaultEquals(a, b) {
      return a === b;
    }
    push(element) {
      let node = new DoublyNode(element);
      if (this.count === 0) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.count++;
    }
    getElement(index) {
      if (index >= 0 && index <= this.count) {
        let current = this.head;
        for (let i = 0; i < index && current !== null; i++) {
          current = current.next;
        }
        return current;
      }
      return undefined;
    }
    removeElement(index){
        if (index>=0 && index<=this.count) {
            let current,previous;
            if (index === 0) {
                if(this.count === 1) {
                    this.tail = null;
                } else {
                  this.head = this.head.next;
                  this.head.prev = null;
                }
            } else if(index === this.count - 1) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                previous = this.getElement(index - 1);
                current = previous.next;
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return current.element
        }
        return undefined;
    }
  }
  
  export {DoublyLinkedLists};