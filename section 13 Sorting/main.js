const letters = ['a', 'd', 'z', 'e', 'r', 'b']

letters.sort();

console.log(letters)


const basket = [2, 65, 34, 2, 1, 7, 8]

basket.sort();

console.log(basket)

console.log('65'.charCodeAt(0))

console.log('2'.charCodeAt(0))

console.log('34'.charCodeAt(0))

// to sort this...
basket.sort(function(a, b){
    return a - b;
})

console.log(basket)


const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0


spanish.sort(function(a, b){
    return a.localeCompare(b);
})