// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...


let calculations = 0;
function fibonacci(n) {
    if(n < 2){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
// console.log(fibonacci(30))

function fibonacciMaster(){
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
console.log(dynamic(10))

console.log('we did ' + calculations + ' calculations')



