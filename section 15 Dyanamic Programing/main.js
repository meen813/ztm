function addTo80(n) {
    return n + 80;
}

// addTo80(5)
// addTo80(5)
// addTo80(5)
//The above takes too long? How to make it efficient?


function memoizeAddTo80() {
    let cache = {};
    // use closure to prevent from resetting cache
    return function(n) {
        if(n in cache) {
            return cache[n];
        } else {
            console.log('long time')
            cache[n] = n + 80;
            return cache[n]
        }
    }
}

const memoized = memoizeAddTo80();

console.log('1', memoized(5))
console.log('2', memoized(5))

// 2nd console.log(memoizeAddTo80(5)) does not give 'long time' because it is in the cache.