const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!')
    }
  }
}

findNemo(everyone);


// ES6 for-loop
const findNemo2 = array => {
    array.forEach(fish => {
        // console.log(fish);
        if(fish === 'nemo'){
        console.log('Found Nemo!')
        }
    })
}

//another way
const findNemo3 = array => {
    for (let fish of array){
        if(fish === 'nemo'){
        console.log('Found Nemo!')
        }
    }
}

findNemo2(everyone);

findNemo3(everyone);