class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        const previousLastNode = this.last;
        this.last = newNode;
        if(this.length === 0){
            this.first = newNode;
        } else{
            previousLastNode.next = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if(this.length === 0){
            return null;
        }
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first =  this.first.next;
        }
        this.length--;
        return this;
        
    }



    //isEmpty;
}

const myQueue = new Queue();
  //Joy
  //Matt
  //Pavel
  //Samir

myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')

console.log(myQueue)
console.log(myQueue.peek())

myQueue.dequeue()
console.log(myQueue)
console.log(myQueue.peek())
