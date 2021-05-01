import { LinkList } from "../linklist.js";

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
