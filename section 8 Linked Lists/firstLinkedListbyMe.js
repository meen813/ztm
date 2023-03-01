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
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds')
        }
        const newNode = new Node(value)
        let currentNode = this.head;
        let count = 0;
        while (currentNode !== null) {
            currentNode = currentNode.next;
            count++;
            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
                if (this.length === 0) {
                    this.tail = newNode;
                }
                return this;
            }
            else if (index === this.length) {
                this.tail.next = newNode
                this.tail = newNode;
                return this;
            }
            else if (count === index - 1) {
                newNode.next = currentNode.next
                currentNode.next = newNode
                this.length++
                return this;
            }
        }
    }
    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            if (this.length === 1) {
                this.tail = null;
            }
            this.length--
            return this;
        } else {
            const leader = this.traverseToIndex(index - 1);
            leader.next = leader.next.next;
            if (index === this.length - 1) {
                this.tail = leader.next;
            }
            this.length--
            return this;
        }
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
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
mylinkedList.insert(5, 100)

console.log(mylinkedList.printList())

// console.log(mylinkedList)


