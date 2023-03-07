// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //code here
    if(number < 2){
        return number;
    }
    return number * findFactorialRecursive(number-1)
}

console.log(findFactorialRecursive(4))

function findFactorialIterative(number) {
    //code here
    let answer = 1;
    for(let i = 2; i <= number; i++){
        answer = i * answer 
    }
    return answer;
}   

console.log(findFactorialIterative(5))