import {DoublyLinkedLists} from '../DoublyLinkedLists.js'

const doublyLinkedLists = new DoublyLinkedLists();
doublyLinkedLists.push(0);
doublyLinkedLists.push(1);
doublyLinkedLists.push(2);
doublyLinkedLists.push(3);
doublyLinkedLists.push(4);
console.log(doublyLinkedLists.getElement(4));
console.log(doublyLinkedLists.removeElement(1));
console.log(doublyLinkedLists.getElement(1));