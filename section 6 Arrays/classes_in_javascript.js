// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };


console.log(object1 === object2)

console.log(object1 === object3)

// this is false because they are stored in different location(memory)
console.log([]===[])

// context vs scope

//context means where we are within the object
//scope is created when there is {}?

const object4 = {
    a: function(){
        console.log(this);
    }
}

object4.a()


// instantiation => make a copy of an object and re-use the code. 

class Player {
    constructor(name, type){
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type)
        console.log('wizard', this);
    }
    play(){
        console.log(`Weeeee I'm a ${this.type}`);
    }
} 

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.introduce()

