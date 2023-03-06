//Edge list
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]

//Adjacent List
//The index of the array is the value of the actual Graph node
const graph2 = [[2], [2,3], [0,1,3], [1,2]]


//Adjacent Matrix
const graph3 = {
    1: [0, 0, 1, 0],
    2: [0, 0, 1, 1],
    3: [1, 1, 0, 1],
    4: [0, 1, 1, 0]
}


let object1 = {};
let node = '1';

object1[node] = undefined;
object1[node] = '100'
console.log(object1)


