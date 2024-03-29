// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...


let calculations = 0;
function fibonacci(n) { //O(2^n)
    if(n < 2){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
// console.log(fibonacci(30))

function fibonacciMaster(){ //O(n)
    let cache = {};
    return function fib(n){
        calculations++;
        if(n in cache){
            return cache[n]
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2)
                return cache[n]
            }
        }
    }
}
const dynamic = fibonacciMaster();



function fibonacciMaster2(n) {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer.pop();
}


console.log(dynamic(10))
console.log()
console.log('we did ' + calculations + ' calculations')



