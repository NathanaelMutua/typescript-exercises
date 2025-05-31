// Challenge 1: Return The Sum of Two Numbers
function addition(num1: number, num2: number) {
  let sum = num1 + num2;
  return sum;
}
const additionResult = addition(3, 5); // 3 + 5 = 8
console.log(additionResult);

// also another answer to Challenge 1 using function type signatures

type mathOperation = (num1: number, num2: number) => number;

const addition2: mathOperation = function (number1, number2) {
  return number1 + number2;
};
console.log(`Addition2: ${addition2(3, 5)}`); // 3 + 5 = 8

console.log("---------------------------");
// Challenge:2 Convert Minutes into Seconds

function convert(min: number) {
  return min * 60;
}
const minuteConversion = convert(5);
console.log(minuteConversion); // 5min * 60 = 300seconds

console.log("---------------------------");
// Challenge:3 Perimeter of a Rectangle

let findPerimeter = function (length: number, width: number) {
  let perimeter = 2 * (length + width);
  console.log(perimeter);
};
findPerimeter(6, 7); // 26
findPerimeter(20, 10); // 60

console.log("---------------------------");
// Challenge:4 Check Negative

let isNegative = function (value: number) {
  let result: string = "";
  if (value < 0) {
    result = "true";
  } else {
    result = "false";
  }
  console.log(result);
};
isNegative(-23);
isNegative(55);

console.log("---------------------------");
// Challenge:5 Can I Drive

function canDrive(name: string, age: number) {
  if (age < 18) {
    console.log(`${name} is old enough to drive.`);
  } else {
    console.log(`${name} is not old enough to drive`);
  }
}
canDrive("Jack", 22); // Jack is old enough to drive
canDrive("John", 15); // John is not old enough to drive

console.log("---------------------------");
// Challenge:6 Largest Number

type numberOperation = (num1: number, num2: number, num3: number) => number;

const findLargest: numberOperation = function (number1, number2, number3) {
  let largestNumber: number = number1;
  if (largestNumber < number2) {
    largestNumber = number2;
    if (largestNumber < number3) {
      largestNumber = number3;
    }
  } else if (largestNumber < number3) {
    largestNumber = number3;
  }
  return largestNumber;
};
console.log(findLargest(5, 9, 3)); // 9
console.log(findLargest(10, 10, 10)); // 10
console.log(findLargest(-1, -5, -3)); // -1

console.log("---------------------------");
// Challenge:7 BMI Calculator

// BMI = weight / (height * height)
function calculateBMI(weight: number, height: number) {
  let BMI: number = Math.floor((weight / (height * height)) * 10) / 10; // this'll give me 1 decimal point numbers
  let category: string = "";

  if (BMI > 30) {
    category = "Obese";
  } else if (BMI >= 25 && BMI <= 29.9) {
    category = "Overweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    category = "Normal weight";
  } else {
    category = "Underwight";
  }
  console.log(`Your BMI id ${BMI} - ${category}`);
}
calculateBMI(68, 1.75); //Your BMI is 22.2 - Normal weight
calculateBMI(85, 1.8); // Your BMI is 26.2 - Overweight

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
