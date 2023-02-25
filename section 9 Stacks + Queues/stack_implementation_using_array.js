class Stack{
    constructor(){
        this.array = [];
    }
    peek(){
        return this.array[this.array.length-1]

    }
    push(value){
        this.array.push(value)
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }
}
const myStack = new Stack();

myStack.push('google')
myStack.push('Discord')
myStack.push('udemy')
console.log(myStack.peek())
console.log(myStack)
myStack.pop()
myStack.pop()

console.log(myStack)
