// Creation of object
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Shyamal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Shyamal@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shyamal",
            lastname: "Das"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

//Spreading objects
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//JSON format
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JavaScript",
    price: "9999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

//object destructuring
const {courseInstructor} = course
console.log(courseInstructor);

// or,

const {courseInstructor: instructor} = course
console.log(instructor);

[
    {},
    {},
    {}
]
