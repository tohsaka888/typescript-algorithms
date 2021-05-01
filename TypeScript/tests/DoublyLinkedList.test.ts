import {DoublyLinkedList} from '../DoublyLinkedList.ts'
import {EqualsFn} from '../linklistTs.ts'

const defaultEquals: EqualsFn<number> = (a, b) => {
    return a === b;
}

let list:DoublyLinkedList<number> = new DoublyLinkedList(defaultEquals);
list.insertElement(0);
list.insertElement(1);
list.insertElement(2);
console.log(list.getElement(1));
list.removeElement(1);
console.log(list.getElement(1));