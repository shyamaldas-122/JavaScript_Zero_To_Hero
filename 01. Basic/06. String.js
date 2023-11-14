const name = "Shyamal"
const repoCount = 20

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('call-of-duty')

console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const newStringOne = "   Shyamal    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "I like this"
console.log(url.replace('this', 'that'))
console.log(url.includes('you'))

console.log(gameName.split('-'));  // convert into array as result