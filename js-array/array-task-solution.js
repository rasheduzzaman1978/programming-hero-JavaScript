// Task: 1
// 1. Declare an array with 5 fruits
let fruits = ["apple", "banana", "mango", "orange", "grape"];

// 2. console log the 3rd index element
console.log(fruits[3]);

// 3. change the value of the 2nd index element to jambura
fruits[2] = "jambura";

// 4. console log the final array
console.log(fruits);
// Expected output: ['apple', 'banana', 'jambura', 'orange', 'grape']

// Task: 2

// 1. Declare an array of 3 tourist destinations
let touristSpots = ["Cox's Bazar", "Sundarbans", "Saint Martin"];

// 2. Add a new tourist destination
touristSpots.push("Sajek");

// 3. Add two more destinations
touristSpots.push("Rangamati", "Kuakata");

// 4. Remove the last added destination
touristSpots.pop();

// 5. Display the final array
console.log(touristSpots);

// Expected output: ["Cox's Bazar", "Sundarbans", "Saint Martin", "Sajek", "Rangamati"]

// Task: 3
// 1. Create an array of books
let books = ["Python Guide", "HTML Basics", "CSS Mastery", "JavaScript Handbook"];

// 2. Check if the array contains a JavaScript book
if (books.includes("JavaScript Handbook")) {
  console.log("JavaScript book is present in the array.");
} else {
  console.log("JavaScript book is NOT present in the array.");
}
// Expected output: JavaScript book is present in the array.

// 3. Find the index of "CSS Mastery"
let cssIndex = books.indexOf("CSS Mastery");
console.log("Index of 'CSS Mastery':", cssIndex);
// Expected output: Index of 'CSS Mastery': 2 

// Task: 4

// 1. Create different variables
let fruits = ["apple", "banana", "mango"];   // array
let age = 25;                               // number
let name = "Rashed";                       // string
let isStudent = true;                     // boolean
let numbers = [1, 2, 3];                  // array

// 2 & 3. Check using Array.isArray() and print result
console.log(Array.isArray(fruits) ? "fruits is an array" : "fruits is NOT an array");

console.log(Array.isArray(age) ? "age is an array" : "age is NOT an array");

console.log(Array.isArray(name) ? "name is an array" : "name is NOT an array");

console.log(Array.isArray(isStudent) ? "isStudent is an array" : "isStudent is NOT an array");

console.log(Array.isArray(numbers) ? "numbers is an array" : "numbers is NOT an array");

// Task: 5

// 1. Create two arrays
let boys = ["Rashed", "Karim", "Hasan"];
let girls = ["Ayesha", "Nusrat", "Mim"];

// 2. Combine the two arrays into a new array
let students = boys.concat(girls);

// 3. Print both original arrays and the combined array
console.log("Boys:", boys);
console.log("Girls:", girls);
console.log("Combined Array:", students);

// array-looping-tasks

// Task 1: Write a JavaScript code to reverse the array colors `without using the reverse method`.

/*Input:
`const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

**Output:**

`['orange', 'yellow', 'green', 'blue', 'red']`*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reversedColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
    reversedColors.push(colors[i]);
}
console.log(colors);
console.log(reversedColors);


// Task 2: Write a JavaScript code to get the even numbers from an array using any looping technique.

/*Input:
`const numbers = [12, 98, 5, 41, 23, 78, 46];`

**Output:**

`[12, 98, 76, 46]`*/


const numbers2 = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) {
      evenNumbers.push(numbers2[i]);
  }
}

console.log(evenNumbers);

// ✅ Using for...of Loop
// 🔹 Code:
const numbers2 = [12, 98, 5, 41, 23, 78, 46];

let evenNumbers = [];

for (let num of numbers2) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}

console.log(evenNumbers);

/*✅ Output
[12, 98, 78, 46]*/

// Task 3: Use a for...of loop to concatenate all the elements of an array into a single string.

/*Input:
`var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

**Output:**

`'TomTimTinTik'`*/

let words4 = ['Tom', 'Tim', 'Tin', 'Tik'];

let result2 = "";

for (let name of words4) {
  result2 += name;
}

console.log(result2);

// ✅ যদি মাঝে space দিতে চাও

var words2 = ['Tom', 'Tim', 'Tin', 'Tik'];

let result3 = "";

for (let name of words2) {
    result3 += name + " ";
}

console.log(result3.trim());

/*🔹 Output:
Tom Tim Tin Tik


👉 " " যোগ করার কারণে প্রতিটি নামের মাঝে space এসেছে।
👉 trim() শেষে অতিরিক্ত space কেটে দিয়েছে। */

// ✅ 1️⃣ Comma (,) দিয়ে যুক্ত করা
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let result = "";

for (let name of numbers) {
    result += name + ", ";
}

console.log(result.slice(0, -2));

/*🔹 Output:
Tom, Tim, Tin, Tik

🔎 ব্যাখ্যা

প্রতিটি নামের পরে ", " যোগ করা হয়েছে

শেষে অতিরিক্ত comma এবং space কেটে ফেলার জন্য slice(0, -2) ব্যবহার করা হয়েছে */

// ✅ 2️⃣ Dash (-) দিয়ে যুক্ত করা
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let result = "";

for (let name of numbers) {
    result += name + "-";
}

console.log(result.slice(0, -1));

/*🔹 Output:
Tom-Tim-Tin-Tik

🔎 ব্যাখ্যা

প্রতিটি নামের পরে "-" যোগ করা হয়েছে

শেষে অতিরিক্ত dash কেটে ফেলার জন্য slice(0, -1) ব্যবহার করা হয়েছে */


// Task 4 (Hard):  Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: `const statement = 'I am a hard working person'`

// Output: `'person working hard a am I'`

const statement = 'I am a hard working person';

let words = statement.split(' ');
let reversedSentence = "";

for (let word of words) {
  reversedSentence =  word + " " + reversedSentence;
}

console.log(reversedSentence.trim());

/* 🔎 ব্যাখ্যা

split(" ")
👉 sentence কে word অনুযায়ী array তে ভাগ করেছে
👉 ["I", "am", "a", "hard", "working", "person"]

reversedSentence = word + " " + reversedSentence;
👉 প্রতিবার নতুন word শুরুতে যোগ হচ্ছে
👉 ফলে word গুলোর position উল্টে যাচ্ছে

trim()
👉 শুরু বা শেষে অতিরিক্ত space থাকলে কেটে দেয় */

দেয়

// 🔥 Alternative (Short Method)
const statement = 'I am a hard working person';

let result = statement.split(" ").reverse().join(" ");

console.log(result);


// 👉 Output একই হবে: person working hard a am I

// or 
const statement = 'I   am a hard working  person';

// let result = statement.split(' ').reverse().join(' ');
let result = statement.split(/\s+/).reverse().join(' ');
// 🔎 /\s+/ মানে:

// এক বা একাধিক space কে একসাথে split করবে

// ফলে empty string তৈরি হবে না
console.log(result);


/*Task 5 : Copy the given array into another array so that changing the copy does not affect the original. Change the first element of the copied array to 99.


Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3]
Copy: [99, 2, 3]*/

// ✅ সঠিক পদ্ধতি 1: Spread Operator ব্যবহার করে (Recommended)
let original = [1, 2, 3];

let copy = [...original];  // ✅ নতুন array তৈরি হলো

copy[0] = 99;

console.log("Original:", original);
console.log("Copy:", copy);

/*✅ Output:
Original: [1, 2, 3]
Copy: [99, 2, 3]*/

// or 

// ✅ সঠিক পদ্ধতি 2: slice() ব্যবহার করে
let original2 = [1, 2, 3];

let copy2 = original2.slice();

copy2[0] = 99;

console.log("Original:", original2);
console.log("Copy:", copy2);

/*🔎 ব্যাখ্যা

[...] বা slice() → নতুন array তৈরি করে

তাই copy পরিবর্তন করলে original পরিবর্তন হয় না

এটাকে বলে Shallow Copy */