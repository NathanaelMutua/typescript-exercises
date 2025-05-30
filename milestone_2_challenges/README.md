# Basic Data Structures

These challenges will help solidify understanding of basic data structures in JavaScript.

**Table of Contents** 

- [Basic Data Structures](#basic-data-structures)

  - [1. Sum of Positives](#1-sum-of-positives)
  - [2. Find Maximum Value](#2-find-maximum-value)
  - [3. Election winner](#3-election-winner)
  - [4. Longest word](#4-longest-word)
  - [5. Count Properties](#5-count-properties)
  - [6. Filter by Length](#6-filter-by-length)
  - [7. Sum of Even Numbers](#7-sum-of-even-numbers)
  - [8.  Difference Between Sum of Even and Odd Numbers](#8--difference-between-sum-of-even-and-odd-numbers)
  - [9. Count Truthy](#9-count-truthy)
  - [10. Average of Numbers](#10-average-of-numbers)
  - [11. Linear Search](#11-linear-search)
  - [12. Reverse Linear Search](#12-reverse-linear-search)
  - [13. Linear Search All Indices](#13-linear-search-all-indices)
  - [14. Count Occurrences](#14-count-occurrences)
  - [15. Remove Duplicates](#15-remove-duplicates)
  - [16. Most Frequent](#16-most-frequent)

# Challenges:

## 1. Sum of Positives
Write a function called `sumOfPositives` that takes an array of numbers and returns the sum of all the positive numbers in the array.

```ts
sumOfPositives([1, -3, 5, -2, 9, -8]
); // 15
```

## 2. Find Maximum Value
Write a function called `findMax` that takes an array of numbers and returns the maximum number in the array. Don’t use built-in functions like `Math.max()`.
```ts
findMax([3, 7, 2, 9, 5])
// returns: 9
```

## 3. Election winner
Write a function called `findWinner` that takes an array of objects. Each object has two properties: `name` (string) and `votes` (number). The function should return the object representing the candidate with the highest number of votes. Assume there’s always one clear winner (no ties).
```ts
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];

findWinner(candidates)
// returns: { name: "Bob", votes: 75 }

```

## 4. Longest word
Write a function called `findLongestWord` that takes an array of strings and returns the longest string in the array. If there are multiple words with the same maximum length, return the first one that appears.

```ts
findLongestWord(["apple", "banana", "pear", "grapefruit"])
```
Hint:
- The length of a string refers to the number of characters in the string, for example, "john" has a length of 4.
- You can get the length of string using the `.length` property, for example, `'john'.length` returns 4.

```ts
findLongestWord(["apple", "banana", "pear", "grapefruit"])
// returns: "grapefruit"
```

## 5. Count Properties
Write a function called `countProperties` that takes an object and returns the number of properties (keys) it has.

```ts
countProperties({ name: "Alice", age: 25, city: "Paris" })
// returns: 3
```

## 6. Filter by Length
Write a function called `filterByLength` that takes an array of strings and a number `minLength`. Return a new array containing only the strings that are equal to or longer than `minLength`.

```ts
filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)
// returns: ["giraffe", "hippo", "elephant"]
```

## 7. Sum of Even Numbers
Write a function called `sumEvenNumbers` that takes an array of numbers and returns the sum of all even numbers in the array.

```ts
sumEvenNumbers([1, 2, 3, 4, 5, 6])
// returns: 12  // because 2 + 4 + 6 = 12
```

## 8.  Difference Between Sum of Even and Odd Numbers
Write a function called `differenceEvenOdd` that takes an array of numbers and returns the difference between the sum of even numbers and the sum of odd numbers.

```ts
differenceEvenOdd([1, 2, 3, 4, 5, 6])
// returns: 3  // (2 + 4 + 6) - (1 + 3 + 5) = 12 - 9 = 3
```

## 9. Count Truthy
Write a function called `countTruthy` that takes an object and returns the number of properties that have truthy values.
```ts
countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null })
// returns: 2  // "hello" and 42 are truthy
```

## 10. Average of Numbers
Write a function called `average` that takes an array of numbers and returns their average. Return `0` if the array is empty.
```ts
average([2, 4, 6, 8])
// returns: 5

average([])
// returns: 0
```

## 11. Linear Search
Write a function called `linearSearch` that takes an array and a value. It should return the index of the first occurrence of the value in the array. If the value is not found, return `-1`.

```ts
linearSearch([5, 3, 7, 1, 4], 7)  // returns: 2
linearSearch([5, 3, 7, 1, 4], 10) // returns: -1
```

## 12. Reverse Linear Search
Write a function called `reverseLinearSearch` that takes an array and a value. It should return the index of the last occurrence of the value in the array. If the value is not found, return `-1`.

```ts
reverseLinearSearch([5, 3, 7, 1, 4, 7], 7)  // returns: 5
reverseLinearSearch([5, 3, 7, 1, 4], 10)    // returns: -1
```

## 13. Linear Search All Indices
Write a function called `linearSearchAll` that takes an array and a value. It should return an array of all the indices where the value appears. If the value isn’t found, return an empty array.

```ts
linearSearchAll([5, 3, 7, 1, 4, 7], 7)  // returns: [2, 5]
linearSearchAll([5, 3, 7, 1, 4], 10)    // returns: []
```

## 14. Count Occurrences
Write a function called `countOccurrences` that takes an array of strings and returns an object where each key is a string from the array and the corresponding value is the number of times it appears.

```ts
countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
// returns: { apple: 3, banana: 2, orange: 1 }
```

## 15. Remove Duplicates
Write a function called `removeDuplicates` that takes an array and returns a new array with all duplicate values removed. Preserve the original order of elements.

```ts
removeDuplicates([1, 2, 3, 2, 4, 1, 5])
// returns: [1, 2, 3, 4, 5]
```

## 16. Most Frequent
Write a function called `mostFrequent` that takes an array and returns the value that appears most frequently. If there’s a tie, return any one of the most frequent values.

```ts
mostFrequent([1, 2, 2, 3, 3, 3, 4])
// returns: 3

mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"])
// returns: "apple"
```