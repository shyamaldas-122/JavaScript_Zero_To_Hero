"use strict"; // whole code will be treated as newer version of js

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let name = "Shyamal"
let age = 24
const scoreValue = 100.3
let isLoggedIn = false
const outsideTemp = null
let state;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof anotherId);     // o/p: symbol

console.log(id === anotherId);     // o/p: false

const bigNumber = 3456543576654356754n

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

console.log(typeof undefined); // undefined
console.log(typeof null); // object


// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["Iron Man", "Superman", "Hanuman"];

let myObj = {
    name: "Shyamal",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3