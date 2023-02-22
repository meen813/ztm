// Rules
//1. Worst Case.
//2. Remove Constants.
//3. Different terms for inputs.
    // Log all pairs of array.
    const boxes = ['a', 'b', 'c', 'd', 'e'];

    function logAllParisOfArray(array) {
        for (let i = 0; i < array.length; i++){
            for( let j = 0; j < array.length; j++ ) {
                console.log(array[i], array[j])
            }
        }
    }
    logAllParisOfArray(boxes);
    //O(a*b)
    //O(n^2)

//4. Drop Non Dorminants.