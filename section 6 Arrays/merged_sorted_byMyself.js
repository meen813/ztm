// mergeSortedArrays([0,3,4,31],[4,6,30])
// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(arr1, arr2){
    const sortedArr = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    // check input
    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }
    
    while(arr1Item || arr2Item){
        if(!arr2Item || arr1Item < arr2Item){
            sortedArr.push(arr1Item)
            arr1Item = arr1[i];
            i++
        }
        else{
            sortedArr.push(arr2Item)
            arr2Item = arr2[j];
            j++
        }
    }
    console.log(sortedArr)
    return sortedArr
}

mergeSortedArrays([0,3,4,31],[4,6,30]);