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
function convert(min) {
    return min * 60;
}
var minuteConversion = convert(5);
console.log(minuteConversion); // 5min * 60 = 300seconds
console.log("---------------------------");
// Challenge:3 Perimeter of a Rectangle
var findPerimeter = function (length, width) {
    var perimeter = 2 * (length + width);
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
function canDrive(name, age) {
    if (age < 18) {
        console.log("".concat(name, " is old enough to drive."));
    }
    else {
        console.log("".concat(name, " is not old enough to drive"));
    }
}
canDrive("Jack", 22); // Jack is old enough to drive
canDrive("John", 15); // John is not old enough to drive
console.log("---------------------------");
var findLargest = function (number1, number2, number3) {
    var largestNumber = number1;
    if (largestNumber < number2) {
        largestNumber = number2;
        if (largestNumber < number3) {
            largestNumber = number3;
        }
    }
    else if (largestNumber < number3) {
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
function calculateBMI(weight, height) {
    var BMI = Math.floor((weight / (height * height)) * 10) / 10; // this'll give me 1 decimal point numbers
    var category = "";
    if (BMI > 30) {
        category = "Obese";
    }
    else if (BMI >= 25 && BMI <= 29.9) {
        category = "Overweight";
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        category = "Normal weight";
    }
    else {
        category = "Underweight";
    }
    console.log("Your BMI id ".concat(BMI, " - ").concat(category));
}
calculateBMI(68, 1.75); //Your BMI is 22.2 - Normal weight
calculateBMI(85, 1.8); // Your BMI is 26.2 - Overweight
console.log("---------------------------");
// Challenge:8 Greeting Based On Time
var greetUser = function (name, hour) {
    var greetingsArray = ["morning", "afternoon", "evening", "night"];
    var greeting = "";
    if (hour >= 5 && hour <= 11) {
        greeting = greetingsArray[0];
    }
    else if (hour >= 12 && hour <= 17) {
        greeting = greetingsArray[1];
    }
    else if (hour >= 18 && hour <= 21) {
        greeting = greetingsArray[2];
    }
    else if (hour >= 22 && hour <= 24) {
        greeting = greetingsArray[3];
    }
    console.log("Good ".concat(greeting, ", ").concat(name, "!"));
};
greetUser("Alice", 8);
greetUser("Amanda", 16);
greetUser("Kalya", 20);
greetUser("Ali", 23);
console.log("---------------------------");
var fizzBuzzCheck = function (num) {
    var result = "";
    if (num % 3 === 0 && num % 5 === 0) {
        result = "FizzBuzz";
    }
    else if (num % 3 === 0 && num % 5 != 0) {
        result = "Fizz";
    }
    else if (num % 5 === 0 && num % 3 != 0) {
        result = "Buzz";
    }
    else {
        result = String(num);
    }
    return result;
};
console.log(fizzBuzzCheck(3)); // Fizz
console.log(fizzBuzzCheck(10)); // Buzz
console.log(fizzBuzzCheck(15)); // FizzBuzz
console.log(fizzBuzzCheck(7)); // 7
console.log("---------------------------");
// Challenge:10 Perimeter 2
function perimeter(letter, num) {
    var perimeter = 0;
    if (letter === "s") {
        perimeter = num * 4; // the num will represent the length of one side
    }
    else if (letter === "c") {
        perimeter = 6.28 * num; // the num will represent the radius
    }
    console.log(perimeter);
}
perimeter("s", 7); //28
perimeter("c", 4); //25.12
console.log("---------------------------");
// Challenge:11 Sum of Even Numbers
function sumEvenNumbers(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
sumEvenNumbers(6); // 12  (2 + 4 + 6)
sumEvenNumbers(10); // 30  (2 + 4 + 6 + 8 + 10)
sumEvenNumbers(5); // 6   (2 + 4)
console.log("---------------------------");
// Challenge:12 Multiply by Itself
var powerUp = function (num, times) {
    var count = 1;
    var result = num;
    if (num === 0 || times === 0) {
        console.log(1);
        return;
    }
    do {
        result *= num;
        count += 1;
    } while (count < times);
    console.log(result);
};
powerUp(2, 3); // 8  (2 * 2 * 2)
powerUp(5, 0); // 1  (anything to the zero power is 1)
powerUp(3, 4); // 81 (3 * 3 * 3 * 3)
powerUp(0, 1); // 1
console.log("---------------------------");
// Challenge:13 Factorial Calculator
function factorial(n) {
    var count = 1;
    var factorialValue = 1;
    if (n > -1) {
        do {
            factorialValue *= count;
            count++;
        } while (count <= n);
    }
    console.log(factorialValue);
}
factorial(0); // 1
factorial(4); // 24  (1 * 2 * 3 * 4)
factorial(6); // 720 (1 * 2 * 3 * 4 * 5 * 6)
console.log("---------------------------");
// Challenge:14 Multiple Sum
console.log("---------------------------");
// Challenge:15 Sum of Digits
