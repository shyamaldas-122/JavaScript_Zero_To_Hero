// Objects can be created in two ways: 1) Literals  2) Constructor

// singleton  -> When object will be created using constructor it will be singleton object.

// 1) Constructor ❌
//  using Object.create
/*---------------------------------------------------------------------*/

// 2) object literals ✔

const mySym = Symbol("key1")

const JsUser = {
    name: "Shyamal",
    "full name": "Shyamal Das",
    [mySym]: "mykey1",
    age: 24,
    location: "Bangalore",
    email: "shyamal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "shyamal@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shyamal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());