let user = {
    age: 54,
    name: 'kaylie',
    magic: true,
    scream: function(){
        console.log("ahhhhhhhh!");
    } 
}

user.age // O(1)
user.spell = 'abra kadabra';//O(1)
user.scream(); //O(1)

//  in the worst case (hash collision), O (n/k)

const a = new Map() //difference from objects(only user strings as keys)? 'Map' can use any kind of data type.

const b = new Set()