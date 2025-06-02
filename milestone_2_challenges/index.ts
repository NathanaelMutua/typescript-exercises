// Challenge1: Sum of Positives

type sumFunction = (array: number[]) => number;

const sumOfPositives: sumFunction = function (array) {
  let sum: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
};
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])); // 15
console.log(sumOfPositives([2, -2, -4, -20, 10, -8])); //12

console.log("---------------------");
// Challenge2: Find Maximum Value

function findMax(array: number[]) {
  let maxNumber: number = array[0];
  for (let i = 1; i < array.length; i++) {
    if (maxNumber < array[i]) {
      maxNumber = array[i];
    } else {
      continue;
    }
  }
  console.log(maxNumber);
}
findMax([3, 7, 2, 9, 5]); // returns: 9
findMax([43, 3, 210, 90, 12, 20]); // returns: 210

console.log("---------------------");
// Challenge3: Election winner

type Candidate = { name: string; votes: number };

let findWinner = function (array: Candidate[]) {
  let winner = array[0];
  let maxVotes: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].votes > maxVotes) {
      maxVotes = array[i].votes;
      winner = array[i];
    }
  }
  console.log(winner);
};
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 },
];
findWinner(candidates); // { name: "Bob", votes: 75 }

console.log("---------------------");
// Challenge4: Longest word

function findLongestWord(array: string []){
    let newReversedArray = array.reverse();
    let largestWord: string = newReversedArray[0];// this will ensure the last arrived at largestWord value will be the first occurring one. 
    let position: number = 0;

    for (let i = 1; i < newReversedArray.length; i++){ // alternatively, I think we could have started looping from the last value to the front [0] position
        if (newReversedArray[i].length > newReversedArray.length){
            largestWord = newReversedArray[i];
            position = i;
        }
    }
    console.log(`${largestWord} position[${position}]`);
}
findLongestWord(["apple", "banana", "pear", "grapefruit", "peaches", "guava", "grapefruit"]); // grapefruit position[3]

console.log("---------------------");
// Challenge5: Count Properties

let countProperties = function(myObject: object){
    let objectArray = Object.keys(myObject);
    console.log(objectArray.length);
}
countProperties({ name: "Alice", age: 25, city: "Paris" }); // returns: 3
countProperties({ name: "Alice", age: 25, city: "Paris", address: "John's Crescent" }); // returns: 3

console.log("---------------------");
// Challenge6: Filter by Length

type lengthFunction = (array: string[], minLength: number) => string[]; //first time having a type signature output an array

const filterByLength: lengthFunction = function(array, minLength){
    let newArray: string[]= [];
    for (let i = 0; i < array.length; i++){
        if (array[i].length >= minLength){
            newArray.push(array[i]);
        }
    }
    return newArray
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)); // returns: ["giraffe", "hippo", "elephant"]

console.log("---------------------");
// Challenge7: Sum of Even Numbers

function sumEvenNumbers(array: number[]){
    let sum: number = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            sum += array[i];
        }
    }
    console.log(sum);
}
sumEvenNumbers([1, 2, 3, 4, 5, 6]); // returns: 12  // because 2 + 4 + 6 = 12

console.log("---------------------");
// Challenge8: Difference Between Sum of Even and Odd Numbers

console.log("---------------------");
// Challenge9: Count Truthy

console.log("---------------------");
// Challenge10: Average of Numbers

console.log("---------------------");
// Challenge11: Linear Search

console.log("---------------------");
// Challenge12: Reverse Linear Search

console.log("---------------------");
// Challenge13: Linear Search All Indices

console.log("---------------------");
// Challenge14: Count Occurrences

console.log("---------------------");
// Challenge15: Remove Duplicates

console.log("---------------------");
// Challenge16: Most Frequent
