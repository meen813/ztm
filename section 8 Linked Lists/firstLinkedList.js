// 1-->'10 --> 5 --> 16'

// let mylinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head
        this.head = newNode
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        //check params
        if(index >= this.length){
            return this.append(value)
        }else if(index === 0){
            return this.prepend(value)
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList()
    }
    remove(index){
        // check params
        if(index === 0){
            this.head = this.head.next;
            if(this.length === 1){
                this.tail = null;
            }
            this.length--
            return this;
        }
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
    traverseToIndex(index){
        //check params
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

}


const mylinkedList = new LinkedList(10)


mylinkedList.append(5);
mylinkedList.append(16);
mylinkedList.prepend(1);
console.log(mylinkedList.printList())
mylinkedList.insert(2, 99)
mylinkedList.insert(20, 88)
console.log(mylinkedList.printList())
mylinkedList.remove(0)

console.log(mylinkedList.printList())

// console.log(mylinkedList)


