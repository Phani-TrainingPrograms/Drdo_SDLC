"use strict" //use strict shall ensure that the variables are declared before use. 
//3 ways to create functions in JS. Named functions, Anonymous Functions, Lambda Functions or Arrow Functions. 

//named functions
function addFunc(first, second) {
    return first + second
}

//anonymous functions
const subFunc = function(first, second){
    return first - second
}

const getFullname = function(...args) {
    let fullname = ""
    for (const name of args) {
        fullname += name + " "
    }
    return fullname
}

//lambda Function...
const mulFunc = (first, second) => first * second;

//SquareRoot function
const sqrt = (first) => Math.sqrt(first)

const sqr = (first) => mulFunc(first, first)

let result = addFunc(123, 23)
console.log(`The Result of Add is ${result}`);

result = subFunc(123, 23)
console.log(`The Result of Subtract is ${result}`)

result = subFunc(123, 23)
console.log(`The Result of Subtract is ${result}`)

result = getFullname("Phani", "Raj", "Nagendra")
console.log("The full name is " + result);


