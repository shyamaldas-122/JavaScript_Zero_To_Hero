const date = new Date()
// new is a constructor function -> it create new context/instance
// new keyword helps to create multiple objects from object literals
// Constructor function give new instance every time

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("shyamal", 12, true)
const userTwo = new User("amit", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);
