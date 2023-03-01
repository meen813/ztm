class CrazyQueue {
    constructor() {
        this.firstStack = [];
        this.lastStack = [];
    }

    enqueue(value) {
        const length = this.firstStack.length;
        for (let i = 0; i < length; i++) {
            this.lastStack.push(this.firstStack.pop());
        }
        this.lastStack.push(value);
        return this;
    }

    dequeue() {
        const length = this.lastStack.length;
        for (let i = 0; i < length; i++) {
            this.firstStack.push(this.lastStack.pop());
        }
        this.firstStack.pop();
        return this;
    }
    peek() {
        if (this.lastStack.length > 0) {
            return this.lastStack[0];
        }
        return this.firstStack[this.firstStack.length - 1];
    }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
console.log(this.firstStack)
console.log(this.lastStack)

// // console.log(myQueue);
// myQueue.peek();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.peek();

// console.log(myQueue);

