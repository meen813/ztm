//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


//

var recurringChar1 = function(array){
    var temp = [];
    for(let i = 0; i < array.length; i++){
        if(temp === array){
            return undefined;
        }
        if(!temp.includes(array[i])){
            temp.push(array[i]);
        }
        else if(temp.includes(array[i])){
            return array[i];
        }
    }
}

console.log(recurringChar1([2,3,4,5]))


var recurringChar2 = function(array){
    var temp = [];
    for(let i = 0; i < array.length; i++){
        if(temp === array){
            return undefined;
        }
        if (temp.includes(array[i])) {
            return array[i];
        }else{
            temp.push(array[i])
        }
    }
}

console.log(recurringChar2([2,1,1,2,3,5,1,2,4]))


// this one does not give proper answers because it
function firstRecurringCharacter(input){
    for(let i = 0; i < input.length; i++){
        for(let j = i+1; j < input.length; j++){
            if (input[i]===input[j]){
                return input[i];
            }
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]))

// by Andrei using hash table

function firstRecurringCharacter2(input){
    let map = {}; //creating empty object
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){ //check if map{} has a key as input[i]
            return input[i]
        }else{
            map[input[i]] = i // key is the what we need, so can set the value anything.
        }
        console.log(map)
    }
    return undefined;
}

console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]))

// if(map[input[i]]) 조건문은 map[input[i]]이 falsy 값인 경우(0, null, undefined, false, 빈 문자열 등)에도 참(true)으로 판단됩니다. 하지만 map 객체에 해당 키(key)가 존재하지 않는 경우 map[input[i]]는 undefined를 반환하므로, if(map[input[i]]) 조건문은 원하는 대로 작동하지 않습니다.

// 따라서, if(map[input[i]] !== undefined) 조건문을 사용하여 map 객체에 해당 키(key)가 존재하는지 확인하는 것이 더욱 명확하고 안전합니다. 물론, if(map[input[i]] != null)과 같은 방법으로 null 체크를 할 수도 있습니다. 이렇게 함으로써 불필요한 false-positive 판단을 줄일 수 있습니다.

// 위의 firstRecurringCharacter2 함수에서 if(map[input[i]] !== undefined) 대신 if(map[input[i]])을 사용하면, 값이 0인 경우를 잘못 인식하여 잘못된 결과를 출력할 수 있으므로 주의해야 합니다.