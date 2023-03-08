//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIteration(str) {
    let container = [];
    for(let i = str.length - 1; i >= 0; i--){
            container.push(str[i]);
        }

    return container.join('');
}

console.log(reverseStringIteration('yoyo mastery'))
//should return: 'yretsam oyoy'


function reversesStringRecurstion(str){
    if(str.length  === 0){
        return "";
    }
    return str[str.length - 1]  + reversesStringRecurstion(str.slice(0, -1));
}

console.log(reversesStringRecurstion('yoyo mastery'))


// by andre
function reverseStringRecursiveByAndre(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursiveByAndre(str.substr(1)) + str.charAt(0);
    }
}

reverseStringRecursiveByAndre('yoyo master');