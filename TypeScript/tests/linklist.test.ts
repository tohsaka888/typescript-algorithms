import { LinkListTs, EqualsFn } from "../linklistTs.ts";

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
