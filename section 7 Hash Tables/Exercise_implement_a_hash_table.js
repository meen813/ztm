class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

//underscore = private property
    _hash(key) { //time complexity of O(1)
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) { //time complexity of O(1)
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            // this.data[address].push([key, value]);
            // 여기에 this.data[address].push([key, value]);사용하면 hash collision 발생할 수 있음
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) { //time complexity of O(1) or O(n) in worst case
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    } 

    keys(){
        const keysArray = [];
        //this loop iterates all indexes of 'this.data'.
        for (let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    } 
    // hash collision prevention
    // keys() {
    //     if (!this.data.length) {
    //         return undefined
    //     }
    //     let result = []
    //     // loop through all the elements
    //     for (let i = 0; i < this.data.length; i++) {
    //         // if it's not an empty memory cell
    //         if (this.data[i] && this.data[i].length) {
    //             // but also loop through all the potential collisions
    //             if (this.data.length > 1) {
    //                 for (let j = 0; j < this.data[i].length; j++) {
    //                     result.push(this.data[i][j][0])
    //                 }
    //             } else {
    //                 result.push(this.data[i][0])
    //             }
    //         }
    //     }
    //     return result;
    // }

    values(){
        const valuesArray = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                // this 2nd loop iterates buckets array of the index.
                for(let j = 0; j < this.data[i].length; j++){
                    valuesArray.push(this.data[i][j][1])
                }
            }
        }
        return valuesArray;
    }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
console.log(myHashTable.values())

// time complexity of each function

// 각 함수의 예상 시간 복잡도는 다음과 같습니다.

// _hash(key) 함수: 문자열 key의 길이에 따라 시간 복잡도가 결정됩니다. 문자열의 각 문자는 charCodeAt() 메소드를 사용하여 해시값에 추가되며, 해시값은 일정한 수식을 적용하여 최종 해시 인덱스를 계산합니다. 따라서 _hash(key) 함수의 시간 복잡도는 O(key.length)입니다.

// set(key, value) 함수: _hash() 메소드를 사용하여 key의 해시값을 계산한 후, 해당 해시값의 인덱스에 key-value 쌍을 저장합니다. 만약 해시 충돌이 발생하면, this.data[address] 배열에 새로운 요소를 추가합니다. 따라서 set() 메소드의 평균 시간 복잡도는 O(1)이지만, 최악의 경우 해시 충돌이 발생하여 모든 요소가 같은 해시값을 가지게 되면 O(n)의 시간 복잡도를 가질 수 있습니다.

// get(key) 함수: _hash() 메소드를 사용하여 key의 해시값을 계산하고, 해당 해시값이 저장된 인덱스에서 key-value 쌍을 검색합니다. 검색 시에는 일반적으로 for 루프를 사용하여 배열의 모든 요소를 확인해야 하므로, 최악의 경우 시간 복잡도는 O(n)입니다. 그러나 일반적으로 해시 테이블의 검색은 매우 빠르므로, 대부분의 경우 O(1)의 시간 복잡도를 가집니다.

// keys() 함수: 모든 key를 담은 배열을 만들기 위해 for 루프를 사용하여 this.data 배열을 순회합니다. 따라서 keys() 함수의 시간 복잡도는 O(n)입니다.

// values() 함수: keys() 함수와 마찬가지로, this.data 배열을 순회하여 모든 value를 추출합니다. 그러나 this.data 배열의 각 요소에는 여러 개의 key-value 쌍이 포함될 수 있으므로, 이중 for 루프를 사용하여 모든 value를 추출합니다. 따라서 values() 함수의 시간 복잡도는 O(n)입니다.

// 주의: 이는 해시 테이블 자료구조의 평균적인 시간 복잡도에 대한 설명입니다. 최악의 경우 시간 복잡도는 O(n)일 수 있습니다. 또한 구현 방법에 따라 시간 복잡도가 달라질 수 있으므로, 이 코드의 시간 복잡도는 해당 구현에 의해 결정됩니다.
