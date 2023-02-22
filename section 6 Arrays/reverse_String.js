//Create a function that reverses a string:
//'Hi My name is Andrei' should be:
//'ierdnA si eman yM iH'

const str1 = 'Hi My name is Andrei'

function reverse(str){
    const reversed = []
    for(i = str.length-1; i >= 0; i--){
        reversed.push(str[i]);
    }
    return reversed.join('');
    
    
}

console.log(reverse(str1))

// by Andrei



function reverse2(str){
    //check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "hmm that is not good";
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i])
    }
    console.log(backwards);

    return backwards.join('');
}

//using methods to simplify the code
function reverse3(str){
    return str.split('').reverse().join('')
}


//using JS ES6

const reverse4 = str =>[...str].reverse().join('');

console.log(reverse4('Hi My name is Andrei'));

