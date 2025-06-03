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

function findLongestWord(array: string[]) {
  let newReversedArray = array.reverse();
  let largestWord: string = newReversedArray[0]; // this will ensure the last arrived at largestWord value will be the first occurring one.
  let position: number = 0;

  for (let i = 1; i < newReversedArray.length; i++) {
    // alternatively, I think we could have started looping from the last value to the front [0] position
    if (newReversedArray[i].length > newReversedArray.length) {
      largestWord = newReversedArray[i];
      position = i;
    }
  }
  console.log(`${largestWord} position[${position}]`);
}
findLongestWord([
  "apple",
  "banana",
  "pear",
  "grapefruit",
  "peaches",
  "guava",
  "grapefruit",
]); // grapefruit position[3]

console.log("---------------------");
// Challenge5: Count Properties

let countProperties = function (myObject: object) {
  let objectArray = Object.keys(myObject);
  console.log(objectArray.length);
};
countProperties({ name: "Alice", age: 25, city: "Paris" }); // returns: 3
countProperties({
  name: "Alice",
  age: 25,
  city: "Paris",
  address: "John's Crescent",
}); // returns: 3

console.log("---------------------");
// Challenge6: Filter by Length

type lengthFunction = (array: string[], minLength: number) => string[]; //first time having a type signature output an array

const filterByLength: lengthFunction = function (array, minLength) {
  let newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= minLength) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)); // returns: ["giraffe", "hippo", "elephant"]

console.log("---------------------");
// Challenge7: Sum of Even Numbers

function sumEvenNumbers2(array: number[]) {
  let sum: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  console.log(sum);
}
sumEvenNumbers2([1, 2, 3, 4, 5, 6]); // returns: 12  // because 2 + 4 + 6 = 12

console.log("---------------------");
// Challenge8: Difference Between Sum of Even and Odd Numbers

type differenceOperation = (array: number[]) => number;

const differenceEvenOdd: differenceOperation = function (array) {
  let sumEven: number = 0;
  let sumOdd: number = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sumEven += array[i];
    } else {
      sumOdd += array[i];
    }
  }
  return sumEven - sumOdd;
};
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6])); // returns: 3  // (2 + 4 + 6) - (1 + 3 + 5) = 12 - 9 = 3

console.log("---------------------");
// Challenge9: Count Truthy

function countTruthy(object: Record<string, any>) {
  // first time using record, which specifies the type for the keys as string and the values as any
  let truthyCount: number = 0;
  let keysArray: string[] = Object.keys(object);

  for (let i = 0; i < keysArray.length; i++) {
    let key = keysArray[i];
    let keyValue = object[key];

    if (
      keyValue === 0 ||
      keyValue === null ||
      keyValue === undefined ||
      keyValue === "" ||
      keyValue === false
    ) {
      continue;
    } else {
      truthyCount += 1;
    }
  }
  console.log(truthyCount);
}
countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }); // returns: 2  // "hello" and 42 are truthy

console.log("---------------------");
// Challenge10: Average of Numbers

function average(array: number[]) {
  let sum: number = 0;
  let average: number = 0;
  if (array.length === 0) {
    average = 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    average = sum / array.length;
  }
  console.log(average);
}
average([2, 4, 6, 8]); // returns: 5
average([]); // returns: 0

console.log("---------------------");
// Challenge11: Linear Search

function linearSearch(array: number[], value: number) {
  let result: number = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result = i;
    }
  }
  console.log(result);
}
linearSearch([5, 3, 7, 1, 4], 7); // returns: 2
linearSearch([5, 3, 7, 1, 4], 10); // returns: -1

console.log("---------------------");
// Challenge12: Reverse Linear Search

function reverseLinearSearch(array: number[], value: number) {
  let result: number = -1;
  for (let i = array.length; i > -1; i--) {
    if (array[i] === value) {
      result = i;
      break;
    }
  }
  console.log(result);
}
reverseLinearSearch([5, 3, 7, 1, 4, 7], 7); // returns: 5
reverseLinearSearch([5, 3, 7, 1, 4], 10); // returns: -1

console.log("---------------------");
// Challenge13: Linear Search All Indices

function linearSearchAll(array: number[], value: number) {
  let valueList: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      valueList.push(i);
    }
  }
  console.log(valueList);
}
linearSearchAll([5, 3, 7, 1, 4, 7], 7); // returns: [2, 5]
linearSearchAll([5, 3, 7, 1, 4], 10); // returns: []

console.log("---------------------");
// Challenge14: Count Occurrences 

function countOccurrences(array: string[]){
  const objectKeyNames = new Set(array);
  const keyNamesArray: string[] = Array.from(objectKeyNames);
  let arrayValueIterations: {[key: string]: any} = new Object();
  let count: number = 0;

  for (let i = 0; i < keyNamesArray.length; i++){
    for (let j = 0; j < array.length; j++){
      if(array[j] === keyNamesArray[i]){
        count += 1;
      }
    }
    arrayValueIterations[keyNamesArray[i]] = count;
    count = 0;
  }
  return arrayValueIterations
}
console.log(
  countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
); // returns: { apple: 3, banana: 2, orange: 1 }

console.log("---------------------");
// Challenge15: Remove Duplicates
function removeDuplicates(array: number[]): number[]{
  let newSet = new Set(array);
  let nonDuplicateArray: number[] = Array.from(newSet);

  return nonDuplicateArray
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); // returns: [1, 2, 3, 4, 5]

console.log("---------------------");
// Challenge16: Most Frequent // to be redone

function mostFrequent(array: (string | number)[]): string | number | undefined {
  const occurrences: { [key: string]: number } = {};
  let count: number = 0;
  let mostOccurringValue: string | number | undefined = undefined;

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const key = item.toString();

    if (occurrences[key]) {
      occurrences[key]++;
    } else {
      occurrences[key] = 1;
    }

    if (occurrences[key] > count) {
      count = occurrences[key];
      mostOccurringValue = item;
    }
  }

  return mostOccurringValue;
}
mostFrequent([1, 2, 2, 3, 3, 3, 4]); // returns: 3
mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]); // returns: "apple"
