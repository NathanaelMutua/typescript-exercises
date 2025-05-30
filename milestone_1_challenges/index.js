// Challenge 1: Return The Sum of Two Numbers
function addition(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
var additionResult = addition(3, 5); // 3 + 5 = 8
console.log(additionResult);
var addition2 = function (number1, number2) {
    return number1 + number2;
};
console.log("Addition2: ".concat(addition2(3, 5))); // 3 + 5 = 8
console.log("---------------------------");
// Challenge:2 Convert Minutes into Seconds
function convert(min) { return min * 60; }
;
var minuteConversion = convert(5);
console.log(minuteConversion); // 5min * 60 = 300seconds
console.log("---------------------------");
// Challenge:3 Perimeter of a Rectangle
var findPerimeter = function (length, width) {
    var perimeter = (2 * (length + width));
    console.log(perimeter);
};
findPerimeter(6, 7); // 26
findPerimeter(20, 10); // 60
console.log("---------------------------");
// Challenge:4 Check Negative
var isNegative = function (value) {
    var result = "";
    if (value < 0) {
        result = "true";
    }
    else {
        result = "false";
    }
    console.log(result);
};
isNegative(-23);
isNegative(55);
console.log("---------------------------");
// Challenge:5 Can I Drive
console.log("---------------------------");
// Challenge:6 Largest Number
console.log("---------------------------");
// Challenge:7 BMI Calculator
console.log("---------------------------");
// Challenge:8 Greeting Based On Time
console.log("---------------------------");
// Challenge:9 FizzBuzz
console.log("---------------------------");
// Challenge:10 Perimeter 2
console.log("---------------------------");
// Challenge:11 Sum of Even Numbers
console.log("---------------------------");
// Challenge:12 Multiply by Itself
console.log("---------------------------");
// Challenge:13 Factorial Calculator
console.log("---------------------------");
// Challenge:14 Multiple Sum
console.log("---------------------------");
// Challenge:15 Sum of Digits
