const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// 1. The first statement is for the numbers array.
// 2. The second statement is for the string array.

/* Every
1. Determine if every number is greater than or equal to 0.
2. Determine if every word shorter than 8 characters.*/
const isGreaterThan0 = nums.every(num => num >= 0);
const shorterThan8 = panagram.every(word => word.length < 8);
console.log(isGreaterThan0); //true
console.log(shorterThan8); //true

/* Filter
1. filter the array for numbers less than 4.
2. Filter words that have an even length.*/
const lessThan4 = nums.filter(num => num < 4);
const evenLength = panagram.filter(word => word.length % 2 === 0);
console.log(lessThan4); //[ 1, 2, 3, 0 ]
console.log(evenLength); //[ 'over', 'lazy' ]

/* Find
1. Find the first value divisible by 5.
2. Find the first word that is longer than 5 characters.*/
const divisibleBy5 = nums.find(num => num % 5 === 0);
const longerThan5 = panagram.find(word => word.length > 5);
console.log(divisibleBy5); // 5
console.log(longerThan5); // undefined

/* Find Index
1. Find the index of the first number that is divisible by 3.
2. Find the index of the first word that is less than 2 characters long.*/
const divisibleBy3 = nums.findIndex(num => num % 3 === 0);
const lessThan2 = panagram.findIndex(word => word.length < 2);
console.log(divisibleBy3); // 2
console.log(lessThan2); // -1 (does not exist)

/* For Each
1. Log each value of the array multiplied by 3.
2. Log each word with an exclamation point at the end of it.*/
const multiplyBy3 = nums.forEach(num => console.log(num * 3)); /*
3
6
9
12
15
18
21
24
27
30 */
const exclamationEnd = panagram.forEach(word => console.log(word + "!")); /*
The!
quick!
brown!
fox!
jumps!
over!
the!
lazy!
dog! */

/* Map
1. Make a new array of each number multiplied by 100.
2. Make a new array of all of the words in all uppercase.*/
const multiplyBy100 = nums.map(num => num * 100);
const capitalized = panagram.map(word => word.toLocaleUpperCase());
console.log(multiplyBy100);
/* [
  100,  200, 300, 400,
  500,  600, 700, 800,
  900, 1000,   0
] */
console.log(capitalized);
/* [
  'THE',   'QUICK',
  'BROWN', 'FOX',
  'JUMPS', 'OVER',
  'THE',   'LAZY',
  'DOG'
] */

/* Some
- Find out if some numbers are divisible by 7.
- Find out if some words have the letter `a` in them. */
const divisibleBy7 = nums.some(num => num % 7 === 0);
const hasLetterA = panagram.some(word => word.includes("a"));
console.log(divisibleBy7); //true
console.log(hasLetterA); // true

/* Reduce
- Add all of the numbers in the array together using the `reduce` method.
- Concatenate all the words using `reduce`. */
const allTogetherNow = nums.reduce((accumulator, currentVal) => accumulator + currentVal);
console.log(allTogetherNow); // 55
const allTheWords = panagram.reduce((word, plusWord) => word.concat(plusWord));
console.log(allTheWords); // Thequickbrownfoxjumpsoverthelazydog

/* Sort
- Try to sort without any arguments, do you get what you'd expect with the numbers array?
- Try to sort without any arguments, do you get what you'd expect with the words array?
- Sort the numbers in ascending order.
- Sort the numbers in descending order.
- Sort the words in ascending order.
- Sort the words in descending order. */
const numSort = nums.sort();
console.log(numSort);
/* [
  0, 1, 10, 2, 3,
  4, 5,  6, 7, 8,
  9
] */
const stringSort = panagram.sort();
console.log(stringSort);
/* [
  'The',   'brown',
  'dog',   'fox',
  'jumps', 'lazy',
  'over',  'quick',
  'the'
] */

const numAscend = nums.sort((x, y) => x - y);
console.log(numAscend);
/* [
   0, 1, 2, 3, 4,
   5, 6, 7, 8, 9,
  10
] */

const numDescend = nums.sort((x, y) => y - x);
console.log(numDescend);
/* [
  10, 9, 8, 7, 6,
   5, 4, 3, 2, 1,
   0
] */

const stringAscend = panagram.sort((a, b) => a.localeCompare(b));
console.log(stringAscend);
/* [
  'brown', 'dog',
  'fox',   'jumps',
  'lazy',  'over',
  'quick', 'the',
  'The'
] */

const stringDescend = panagram.sort((a, b) => b.localeCompare(a));
console.log(stringDescend);
/* [
  'The',   'the',
  'quick', 'over',
  'lazy',  'jumps',
  'fox',   'dog',
  'brown'
] */