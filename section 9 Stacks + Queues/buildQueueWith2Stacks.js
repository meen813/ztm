var MyQueue = function() {
    this.mainStack = [];
    this.subStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.mainStack.push(x);
};
/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.subStack.length === 0){
        while(this.mainStack.length > 0){
            this.subStack.push(this.mainStack.pop());
        }
    }
    return this.subStack.pop()

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.subStack.length === 0){
        while(this.mainStack.length > 0){
            this.subStack.push(this.mainStack.pop());
        }
    }
    return this.subStack[this.subStack.length -1]
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.mainStack.length === 0 && this.subStack.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */