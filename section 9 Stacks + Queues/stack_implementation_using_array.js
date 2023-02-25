class Array{
    constructor(){
        this.length = 0;
        this.data = {}
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
            this.bottom = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.length === 1){
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
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
