// Challenge 1: Return The Sum of Two Numbers
function addition(num1: number, num2: number){
    let sum = num1 + num2;
    return sum
}
const additionResult = addition(3,5);
console.log(additionResult);

// also another answer to Challenge 1 using function type signatures

type mathOperation = (num1: number, num2: number) => number;

const addition2: mathOperation = function(number1, number2){
    return number1 + number2;
}
console.log(`Addition2: ${addition2(3,5)}`)

console.log("---------------------------")
// Challenge:2 Convert Minutes into Seconds


console.log("---------------------------")
// Challenge:3 Perimeter of a Rectangle

console.log("---------------------------")
// Challenge:4 Check Negative

console.log("---------------------------")
// Challenge:5 Can I Drive

console.log("---------------------------")
// Challenge:6 Largest Number

console.log("---------------------------")
// Challenge:7 BMI Calculator

console.log("---------------------------")
// Challenge:8 Greeting Based On Time

console.log("---------------------------")
// Challenge:9 FizzBuzz

console.log("---------------------------")
// Challenge:10 Perimeter 2

console.log("---------------------------")
// Challenge:11 Sum of Even Numbers

console.log("---------------------------")
// Challenge:12 Multiply by Itself

console.log("---------------------------")
// Challenge:13 Factorial Calculator

console.log("---------------------------")
// Challenge:14 Multiple Sum

console.log("---------------------------")
// Challenge:15 Sum of Digits