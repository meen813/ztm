class Node {
    constructor(value) {
        this.value = value,
        this.next = null,
        this.prev = null
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
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
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList()
    }
    remove(index){
        // check params
        if(index === 0){
            this.head = this.head.next;
            this.head.prev = null;
            if(this.length === 1){
                this.tail = null;
            }
            this.length--
            return this;
        }
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        unwantedNode.prev = leader;
        this.length--;
        console.log(this)
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


const mylinkedList = new DoublyLinkedList(10)


mylinkedList.append(5);
mylinkedList.append(16);
mylinkedList.prepend(1);
mylinkedList.insert(1, 99)

console.log(mylinkedList.printList())

mylinkedList.remove(1)

console.log(mylinkedList.printList())


// mylinkedList.insert(20, 88)
// console.log(mylinkedList.printList())
// mylinkedList.remove(0)

// console.log(mylinkedList.printList())

// // console.log(mylinkedList)


