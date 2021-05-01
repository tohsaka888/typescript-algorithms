//用来在遍历过程中，判断当前节点是否是需要的节点，因为不确定具体类型，使用泛型
type EqualsFn<T> = {
  (a: T, b: T): boolean;
}

//链表类
class LinkListTs<T> {
  count: number; //计算链表长度
  head: NodeTs<T> | null; //链表的头结点，如果链表不存在，默认为null
  equalsFn: EqualsFn<T>; //判断是否为当前节点的函数
  constructor(equalsFn: EqualsFn<T>) {
    this.count = 0; //链表初始长度为0
    this.head = null; //头结点为空
    this.equalsFn = equalsFn; //传入的判断当前节点的方法
  }
  insertElement(element: T): void {
    //插入元素方法，插入元素为element
    let current: NodeTs<T> | null = null; //当前节点，默认为null
    const node = new NodeTs<T>(element); //创建新节点
    if (this.head === null) {
      //头结点为null，把新节点变为头节点
      this.head = node;
    } else {
      current = this.head; //把头结点赋给current
      while (current.next !== null) {
        //遍历到当前节点
        current = current.next;
      }
      current.next = node; //当前节点的下一个为node节点
    }
    this.count++; //链表长度+1
  }
  getElement(index: number): NodeTs<T> | undefined | null {
    //传入需要节点的下标
    if (index >= 0 && index <= this.count) {
      let current: NodeTs<T> | null = this.head;
      for (let i = 0; i < index && current !== null; i++) {
        //遍历到当前节点
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  removeElement(index: number): T | undefined {
    //删除元素方法，传入元素下标
    if (index >= 0 && index < this.count) {
      let current: NodeTs<T> | null = this.head;
      if (index === 0 && current !== null) {
        //如果删除头节点，那么就让头结点的下一个成为头结点
        this.head = current.next;
      } else {
        let previous: NodeTs<T> | undefined | null = this.getElement(index - 1); //找到当前元素的前一个
        if (previous !== null && previous !== undefined) {
          current = previous.next; //找到当前元素
          if (current !== null) {
            previous.next = current.next; //删除当前元素
          }
        }
      }
      this.count--; //链表长度-1
      if (current !== null) {
        return current.element;
      } //返回删除的元素
    }
    return undefined;
  }
  insertElementToPositon(element: T, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node: NodeTs<T> | null = new NodeTs<T>(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        const previous = this.getElement(index - 1);
        if (previous !== null && previous !== undefined) {
          node.next = previous.next;
          previous.next = node;
        }
      }
      this.count++;
      return true;
    }
    return false;
  }
  indexOf(element: T): number {
    let current: NodeTs<T> | null = this.head;
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
}

class NodeTs<T> {
  //泛型类
  element: T; //节点的数据域
  next: NodeTs<T> | null; //下一个节点，为NodeTs类型或为空
  constructor(element: T) {
    this.element = element; //把element赋值给当前节点的
    this.next = null; //当前节点的下一个为null
  }
}

const defaultEquals: EqualsFn<number> = (a, b) => {
  //泛型函数
  return a === b;
};
const linklistTs: LinkListTs<number> = new LinkListTs(defaultEquals); //创建对象，传入方法
linklistTs.insertElement(1);
linklistTs.insertElement(2);
linklistTs.insertElement(3);
linklistTs.insertElement(4);
linklistTs.insertElement(5);
console.log(linklistTs.count);
console.log(linklistTs.getElement(4));
console.log(linklistTs.removeElement(2));
console.log(linklistTs.insertElementToPositon(8, 2));
console.log(linklistTs.getElement(2));
console.log(linklistTs.indexOf(8));

export { LinkListTs };
export type { EqualsFn };
