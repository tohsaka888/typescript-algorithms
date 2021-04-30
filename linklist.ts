//用来在遍历过程中，判断当前节点是否是需要的节点，因为不确定具体类型，使用泛型
interface EqualsFn<T> {
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
  InsertElement(element: T) {
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
  getElement(index: number) {
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
linklistTs.InsertElement(1);
console.log(linklistTs.count);
console.log(linklistTs.getElement(0));
