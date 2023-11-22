const user = {
    username: "shyamal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "amit"
user.welcomeMessage()

// console.log(this);

// function fun(){
//     let username = "shyamal"
//     console.log(this.username);
// }
// fun()

// const fun = function () {
//     let username = "shyamal"
//     console.log(this.username);
// }

const fun =  () => {
    let username = "shyamal"
    console.log(this);
}

fun()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Shyamal"})

console.log(addTwo(3, 4))
