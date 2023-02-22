// const twoSum = (nums, target) => {
//     const solution =[] ;

//     for(let i = 0; i < nums.length; i++ ){
//         const another = target - nums[i];
//         if(another in nums){
//             solution.push()
//             return [map[another], i];
//         }
//         map[nums[i]] = i;
//     }

//     return null;
// }

// console.log(twoSum([2,7,11,15], 9))


const map = {};

const nums = [1, 2, 3, 4];

function maps(nums){
    for(i = 0; i < nums.length; i++){
        map[nums[i]] = i;
    }
    return map;
}

console.log(maps([1, 2, 3, 4]))

