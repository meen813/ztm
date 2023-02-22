// Given 2 arrays, create a function that let's a user know (true/false) whether thses two arrays contain any common items

//For example:
//const array1 = ['a', 'b', 'c', 'x']
//const array2 = ['z', 'y','i']
//Should return false.
//---------------
//const array1 = ['a','b','c','x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limits

// return true or false

// O(n^2) nested for loops : not efficient

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['a', 'y','i']

// function containsCommonItem(arr1, arr2){
//     for(let i = 0; i < arr1.length; i++){
//         for(let j=0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return true;
//             }
//         }
//     }
//     return false
// }

// console.log(containsCommonItem(array1, array2));

// why this is not so efficient?
//O(a*b) = O(n^2)
// O(1) - space complexity

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['r', 'y','a']

// array1  ==> obj{
//     a: true,
//     b: true,
//     c: true,
//     x: true
// }
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2){
    // loop through first array and create object where properties === items in the array
    let map = {};
    for (let i=0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }
    console.log(map)
    // loop through second array and check if item in second array exists on created object.
    for (let j = 0; j < arr2.length; j++){
        if (map[arr2[j]]){
            return true;
        }
    }
    return false  
    // thses makes two seperated loops ==> O(a + b) = O(n) Better Time Complexity 
    //O(a) Space Complexity
}

console.log(containsCommonItem2(array1, array2))


// how to simplify the codes? better you know about the language you use, simpler the code you can write(language specific); methods?

function containsCommonItem3(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonItem3(array1, array2))