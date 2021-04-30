class LinkList {
    defaultEquals(a, b) {
        a === b;
    }
    constructor(equalsFn = this.defaultEquals){
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }
    push(element){
        let current = null;
        let node = new Node(element);
        if(this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
}

class Node {
    constructor (element) {
      this.element = element
      this.next = null
    }
  }

  const linklist = new LinkList();
  linklist.push(0);
  console.log(linklist.count);