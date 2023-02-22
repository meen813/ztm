//Remove Constant
const names = ['Ian', 'Jack', 'Nathan', 'Ryan', 'Kim'];

function printFirstItemThenFirstHalfThenSayHi100Times(items){
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2); 
    var index = 0; 

    while (index < middleIndex){
        console.log(items[index]); // n/2
        index++;
    }

    for (var i = 0; i < 100; i++) { 
        console.log('hi'); //O(100)
    }
}

// O(1 + n/2 + 100) --> O(n) 

printFirstItemThenFirstHalfThenSayHi100Times(names)