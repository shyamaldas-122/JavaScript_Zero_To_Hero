let name = "Shyamal"
// console.log(typeof name);  //or, console.log(typeof(score));

// (1) String to Number
let valueInNumber = Number(name)
// console.log(typeof valueInNumber);           o/p:number
//console.log(valueInNumber);                   o/p:NaN

// "33" => 33
// "33abc" => NaN

/*-----------------------------------------------------------------*/

// (2) Undefied to Number
let value;
let valueUndefinedToNumber = Number(value);
// console.log(valueUndefinedToNumber);           o/p: NaN
// console.log(typeof valueUndefinedToNumber);    o/p: number

/*-----------------------------------------------------------------*/

// (3) null to Number
let valueNull = null;
let valueNullToNumber = Number(valueNull);
// console.log(valueNullToNumber);                o/p: 0
// console.log(typeof valueNullToNumber);         o/p: number 

/*-----------------------------------------------------------------*/

// (4) Number to String
let score = 90;
// let scoreInString = String(score);
// console.log(typeof scoreInString);             o/p: string

/*-----------------------------------------------------------------*/

// (5) Boolean to Number
let isPassed = true;
// let passedScore = Number(isPassed);
// console.log(passedScore);                     o/p:1

//  true => 1
//  false => 0

/*-----------------------------------------------------------------*/

// (6) Number to Boolean
let faildScore = 50;                                   
// let isFailed = Boolean(faildScore);                 
// console.log(isFailed);                        o/p:true

// 0 => false
// 1 => true

/*-----------------------------------------------------------------*/

// (7) String to Boolean
let emptyName = "";                         
// let hasEmptyName = Boolean(emptyName);              
// console.log(isFailed);                         o/p:false

// "" => false
// "Shyamal" => true

/*-----------------------------------------------------------------*/

// Boolean to String
let result = false;
// let resultInString = String(result);
// console.log(typeof resultInString);

// true => string
// false => string 





