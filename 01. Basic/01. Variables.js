const a=1234;
let b="Shyamal";
var c="Das";
d="Hello";
let e;
console.table([a,b,c,d,e]);

/*
o/p:
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │   1234    │
│    1    │ 'Shyamal' │
│    2    │   'Das'   │
│    3    │  'Hello'  │
│    4    │ undefined │
└─────────┴───────────┘
*/

/*
{
    // it is a scope
}

if (condition) {
    // it is a scope
}

for (let i = 0; i < array.length; i++) {
    // it is a scope
}
*/

/*
previously js don't work basics of scope
There was no control on block scope (issue in block scope and functional scope)
*/