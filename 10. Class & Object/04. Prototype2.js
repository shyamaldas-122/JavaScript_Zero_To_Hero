// let myName = "Shyamal     "
// let mychannel = "amit     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Shyamal = function(){
    console.log(`Shyamal is present in all objects`);
}

Array.prototype.heyShyamal = function(){
    console.log(`Shyamal says hello`);
}

// heroPower.Shyamal()
// myHeros.Shyamal()
// myHeros.heyShyamal()
// heroPower.heyShyamal()

// <-------------- Prototypal inheritance -------------->

const User = {
    name: "amit",
    email: "amit@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// <-------------- modern syntax -------------->

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Amit     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Shyamal".trueLength()
"Amit".trueLength()