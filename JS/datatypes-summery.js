// Primitive
// 7 types : number, string, boolean, null, undefined, symbol, bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = true;
const outsideTemp = null;
let userName ;

const id = Symbol("12345");
const anotherId = Symbol("12345");
console.log(id === anotherId);

const bigNumber = 10000000000n;

// reference type (Non-primitive)
// Object, array, function 


const heros = ("thor", "spiderman", "ironman");

let myObj = {
    name: "priyanshu",
    age: 21
}

const myFunction = function () {
    console.log("hello world");
}

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userName);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction); 
console.log(typeof bigNumber);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory type
// stack (primitive), heap(non-primitive)

let myName = "priyanshu";
let anotherName = myName;
anotherName = "sachin";
console.log(myName);
console.log(anotherName);

let userOne ={
    name: "priyanshu",
    age: 21,
    address: "delhi",
    email : "sachin@colorlib.com"
}

let userTwo = userOne;

userTwo.name = "sachin";
console.log(userOne.name);
console.log(userTwo.name);   