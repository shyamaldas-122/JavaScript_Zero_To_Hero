//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "shyamal"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     two()
}

// one()

if (true) {
    const username = "shyamal"
    if (username === "shyamal") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// No error
console.log(addone(5))

function addone(num){
    return num + 1
}

/* Error: Cannot access 'addTwo' before initialization bcz we are storing function 
in a variable and trying to access before initialize it*/
addTwo(5)
const addTwo = function(num){
    return num + 2
}
