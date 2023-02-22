function booooo(n){
    for( let i = 0; i < n.length; i++){
        console.log('boooooo!')
    }
}

booooo([1,2,3,4,5]) // O(1) time complexity

function arrayOfHiNTimes(n){
    let hiArray = []; // create an array = creating a new data structure
    for(let i = 0; i < n; i++){ //adding a new memories 
        hiArray[i]  = 'hi';
    }
    return hiArray;
}
  
console.log(arrayOfHiNTimes(6)) // O(n)