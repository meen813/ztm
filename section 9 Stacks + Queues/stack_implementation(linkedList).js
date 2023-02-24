class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0; 
    }
    peek(){ //to see the very top of the stack
        return this.top

    }
    push(value){
        const newNode = new Node(value);
        if(this.length === 0 ){
            this.top = newNode;
            this.bottom = this.top;
            this.length++;
            return this.legnth;
        }else if(this.length === 1){
            this.bottom = this.top
            this.top = newNode;
            newNode.next = this.bottom;
            this.length++;
            return this.legnth;
        }
            let current = this.top;
            this.top = newNode;
            newNode.next = current;
            this.length++;
            return this.legnth;
    }
    pop(){
        if(this.length === 1){
            const poppedNode = this.top;
            this.top = null;
            this.bottom = null;
            this.length--;
            return poppedNode.value;
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        this.length--;
        return poppedNode.value;
    }

    printList() {
        const array = [];
        let currentNode = this.top;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

}
const myStack = new Stack();

myStack.push('Discord')
myStack.push('Udemy')
myStack.push('Google')

console.log(myStack.peek())


console.log(myStack.printList())