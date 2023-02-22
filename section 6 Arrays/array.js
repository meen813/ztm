const strings = ['a', 'b', 'c', 'd'];
//4*4  = 16 bytes of storage



console.log(strings[2] )

//push
strings.push('e'); //O(1) just adding an item at the end. We are not looping through anything

console.log(strings)

//pop
strings.pop();
strings.pop();

console.log(strings) //O(1) O(1) just removing an item at the end. We are not looping through anything

//unshift
strings.unshift('x') //O(n) loop through the indexes

console.log(strings)

//splice
strings.splice(2, 0, 'alien') // O(n/2) => O(n/2)

console.log(strings)


// C++
int a[20];
int b[5] {1,2,3,4,5}
