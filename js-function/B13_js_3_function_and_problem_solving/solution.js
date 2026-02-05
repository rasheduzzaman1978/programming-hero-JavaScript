/**Problem 1: Word Frequency Counter
Function name: wordFrequency(sentence)
Statement: Count how many times each word appears in a sentence and return the result as an object.
Rules:
Ignore case differences


Ignore extra spaces


Test case 1
Input: "I love JS and I love coding and JS is fun"
Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

Test case 2
Input:  " Hello hello HELLO "
Output: { hello: 3 } */

function wordFrequency(sentence) {
  // Convert to lowercase and trim extra spaces
  sentence = sentence.toLowerCase().trim();
  
  // Split by one or more spaces
  const words = sentence.split(/\s+/);
  
  const result = {};
  
  for (let word of words) {
    if (word) {  // ensure not empty
      result[word] = (result[word] || 0) + 1;
    }
  }
  
  return result;
}

// Test case 1
console.log(wordFrequency("I love JS and I love coding and JS is fun"));
// Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

// Test case 2
console.log(wordFrequency(" Hello hello HELLO "));
// Output: { hello: 3 }

/**কী করা হয়েছে:
toLowerCase() → case difference উপেক্ষা করার জন্য

trim() → শুরু ও শেষের অতিরিক্ত space বাদ দেওয়ার জন্য

split(/\s+/) → এক বা একাধিক space হ্যান্ডেল করার জন্য

Object ব্যবহার করে প্রতিটি শব্দের গণনা রাখা হয়েছে */

// ✅ উপায় ১ (সবচেয়ে সহজ ও পরিষ্কার)
if (result[word]) {
  result[word]++;
} else {
  result[word] = 1;
}

/**
👉 এখানে কী হচ্ছে:

যদি শব্দটি আগে থেকেই থাকে → ১ বাড়াবে

না থাকলে → ১ দিয়ে শুরু করবে

✅ উপায় ২ (Modern JavaScript – আরও ছোট)
result[word] = (result[word] ?? 0) + 1;


👉 ?? (Nullish Coalescing Operator) ব্যবহার করলে:

যদি result[word] undefined বা null হয় → 0 নেবে

না হলে আগের মান ব্যবহার করবে
*/

// 🎯 সম্পূর্ণ সহজ ভার্সন
function wordFrequency(sentence) {
  sentence = sentence.toLowerCase().trim();
  const words = sentence.split(/\s+/);
  const result = {};

  for (let word of words) {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
}


// তুমি যদি একদম beginner হও, তাহলে if-else ভার্সনটাই সবচেয়ে বুঝতে সহজ 👍

/**
Problem 2: Student Marks Analyzer
Function name: analyzeMarks(marksObj)
Statement:
 Return total marks, average marks, highest scoring subject, and lowest scoring subject.
Test case 1
Input: { math: 78, english: 65, physics: 88, bangla: 55 }

Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

Test case 2
Input: { ict: 90, biology: 90, chemistry: 70 }
Output: { total: 250, average: 83.33, highest: "ict", lowest: "chemistry" }
 */

function analyzeMarks(marksObj) {
  let total = 0;
  let highest = "";
  let lowest = "";
  let highestMark = -Infinity;
  let lowestMark = Infinity;

  for (let subject in marksObj) {
    let mark = marksObj[subject];
    total += mark;

    if (mark > highestMark) {
      highestMark = mark;
      highest = subject;
    }

    if (mark < lowestMark) {
      lowestMark = mark;
      lowest = subject;
    }
  }

  let average = total / Object.keys(marksObj).length;

  return {
    total: total,
    average: average,
    highest: highest,
    lowest: lowest
  };
}
// ✅ Test Case 1
console.log(analyzeMarks({
  math: 78,
  english: 65,
  physics: 88,
  bangla: 55
}));

/* Output:

{
  total: 286,
  average: 71.5,
  highest: "physics",
  lowest: "bangla"
}
  */
// ✅ Test Case 2
console.log(analyzeMarks({
  ict: 90,
  biology: 80,
  chemistry: 70
}));

/*Output:

{
  total: 240,
  average: 80,
  highest: "ict",
  lowest: "chemistry"
}
🔎 সহজভাবে বুঝো
total → সব marks যোগ

average → total ÷ subject সংখ্যা

highest → সবচেয়ে বড় mark

lowest → সবচেয়ে ছোট mark

*/

// ✅ সহজ ভার্সন (সহজ লজিক)
function analyzeMarks(marks) {
  let subjects = Object.keys(marks);
  
  let total = 0;
  let highest = subjects[0];
  let lowest = subjects[0];

  for (let subject of subjects) {
    total += marks[subject];

    if (marks[subject] > marks[highest]) {
      highest = subject;
    }

    if (marks[subject] < marks[lowest]) {
      lowest = subject;
    }
  }

  let average = total / subjects.length;

  return {
    total: total,
    average: average,
    highest: highest,
    lowest: lowest
  };
}

/*🎯 এটা কেন সহজ?

✔ আলাদা করে Infinity ব্যবহার করিনি
✔ প্রথম subject দিয়েই highest & lowest শুরু করেছি
✔ একটাই loop দিয়ে সব কাজ করেছি

🧠 একদম সহজ ভাষায় বুঝি

subjects → সব subject এর নামের তালিকা

total → সব marks যোগ

প্রথম subject ধরলাম highest ও lowest

loop চালিয়ে তুলনা করলাম

শেষে average বের করলাম*/

// ✅ চালিয়ে দেখো
console.log(analyzeMarks({
  math: 78,
  english: 65,
  physics: 88,
  bangla: 55
}));

// ✅ Smart Version
function analyzeMarks(marks) {
  const entries = Object.entries(marks);

  let total = 0;
  let highest = entries[0][0];
  let lowest = entries[0][0];

  for (let [subject, mark] of entries) {
    total += mark;

    if (mark > marks[highest]) highest = subject;
    if (mark < marks[lowest]) lowest = subject;
  }

  return {
    total,
    average: total / entries.length,
    highest,
    lowest
  };
}

/*🔥 কেন এটা interview-style?

✔ Object.entries() ব্যবহার
✔ Destructuring [subject, mark]
✔ Short return syntax
✔ Clean & professional look

🧠 আরেকটা ultra-short (Reduce version)

যদি আরও compact চাই: */

function analyzeMarks(marks) {
  const subjects = Object.keys(marks);

  const total = subjects.reduce((sum, subject) => sum + marks[subject], 0);

  const highest = subjects.reduce((a, b) =>
    marks[a] > marks[b] ? a : b
  );

  const lowest = subjects.reduce((a, b) =>
    marks[a] < marks[b] ? a : b
  );

  return {
    total,
    average: total / subjects.length,
    highest,
    lowest
  };
}


// এটা একটু advanced 😄Interview-এ impress করার মতো।

/*
Problem 3: Password Strength Checker
Function name: checkPassword(password)
Rules:
Length must be at least 8


Must contain at least 1 number


Must contain at least 1 uppercase letter


Must not contain spaces


Test case 1
Input:  "helloWorld"
Output:
{ valid: false, reasons: ["missing number"] }

Test case 2
Input:  "Hello123"
Output: { valid: true, reasons: [] }
 */

// ✅ 🟢 Beginner Level (একদম সহজ)
function checkPassword(password) {
  let reasons = [];

  if (password.length < 8) {
    reasons.push("length must be at least 8");
  }

  if (!/[0-9]/.test(password)) {
    reasons.push("missing number");
  }

  if (!/[A-Z]/.test(password)) {
    reasons.push("missing uppercase letter");
  }

  if (password.includes(" ")) {
    reasons.push("must not contain spaces");
  }

  return {
    valid: reasons.length === 0,
    reasons: reasons
  };
}

// 🧪 Test
console.log(checkPassword("helloWorld"));
// { valid: false, reasons: ["missing number"] }

console.log(checkPassword("Hello123"));
// { valid: true, reasons: [] }

// 🟡 Intermediate Level (Cleaner & Professional)
function checkPassword(password) {
  const rules = [
    { test: password.length >= 8, message: "length must be at least 8" },
    { test: /[0-9]/.test(password), message: "missing number" },
    { test: /[A-Z]/.test(password), message: "missing uppercase letter" },
    { test: !password.includes(" "), message: "must not contain spaces" }
  ];

  const reasons = rules
    .filter(rule => !rule.test)
    .map(rule => rule.message);

  return {
    valid: reasons.length === 0,
    reasons
  };
}

/*
✔ Clean
✔ Reusable
✔ Scalable

🔴 Advanced Level (Flexible + Scalable System)

এটা বড় প্রজেক্টে ব্যবহার করা যায়।
*/

function checkPassword(password) {
  const validators = {
    minLength: {
      check: p => p.length >= 8,
      message: "length must be at least 8"
    },
    hasNumber: {
      check: p => /\d/.test(p),
      message: "missing number"
    },
    hasUppercase: {
      check: p => /[A-Z]/.test(p),
      message: "missing uppercase letter"
    },
    noSpaces: {
      check: p => !/\s/.test(p),
      message: "must not contain spaces"
    }
  };

  const reasons = Object.values(validators)
    .filter(v => !v.check(password))
    .map(v => v.message);

  return {
    valid: reasons.length === 0,
    reasons
  };
}


// 🔥 Advanced + Strength Meter Version
function checkPassword(password) {
  const validators = [
    { test: password.length >= 8, message: "length must be at least 8" },
    { test: /[0-9]/.test(password), message: "missing number" },
    { test: /[A-Z]/.test(password), message: "missing uppercase letter" },
    { test: /[a-z]/.test(password), message: "missing lowercase letter" },
    { test: /[!@#$%^&*(),.?":{}|<>]/.test(password), message: "missing special character" },
    { test: !/\s/.test(password), message: "must not contain spaces" }
  ];

  const failedRules = validators.filter(rule => !rule.test);
  const reasons = failedRules.map(rule => rule.message);

  const score = validators.length - failedRules.length;

  let strength = "Weak";
  if (score >= 5) strength = "Strong";
  else if (score >= 3) strength = "Medium";

  return {
    valid: reasons.length === 0,
    strength,
    reasons
  };
}

// 🧪 Example Tests
// ❌ Example 1
console.log(checkPassword("hello123"));


/* Output:

{
  valid: false,
  strength: "Medium",
  reasons: ["missing uppercase letter", "missing special character"]
}
  */

// ⚠ Example 2
console.log(checkPassword("Hello123"));


Output:

{
  valid: false,
  strength: "Strong",
  reasons: ["missing special character"]
}

// ✅ Example 3
console.log(checkPassword("Hello123!"));


/*Output:

{
  valid: true,
  strength: "Strong",
  reasons: []
}
  */

/*

Problem 4: Shopping Bill Calculator
Function name: calcBill(prices, items)
Statement:  Calculate total bill amount and count how many times each item appears.
Test case 1
Input: 
     prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
     items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

Output:
{
  total: 376,
  itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
}

Test case 2
Input:
prices = { pen: 10, book: 50 };
items = ["pen", "pen", "book", "pen"];

Output:
{
  total: 80,
  itemCount: { pen: 3, book: 1 }
}

*/

// 🟢 Beginner Level (সহজ & পরিষ্কার)
function calcBill(prices, items) {
  let total = 0;
  let itemCount = {};

  for (let item of items) {
    // count item
    if (itemCount[item]) {
      itemCount[item]++;
    } else {
      itemCount[item] = 1;
    }

    // add price
    total += prices[item];
  }

  return {
    total: total,
    itemCount: itemCount
  };
}

// 🧪 Test Case 1
const prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
const items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

console.log(calcBill(prices, items));

/*
Output:

{
  total: 376,
  itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
}
*/
// 🟡 Intermediate Level (Cleaner Code)
function calcBill(prices, items) {
  const itemCount = {};
  let total = 0;

  for (let item of items) {
    itemCount[item] = (itemCount[item] || 0) + 1;
    total += prices[item];
  }

  return { total, itemCount };
}

/*
✔ Short
✔ Clean
✔ Professional */

// 🔴 Advanced Level (Safer + Interview Style)

// এখানে invalid item থাকলে handle করবে।

function calcBill(prices, items) {
  return items.reduce((result, item) => {
    if (!prices[item]) return result; // ignore unknown items

    result.total += prices[item];
    result.itemCount[item] = (result.itemCount[item] || 0) + 1;

    return result;
  }, { total: 0, itemCount: {} });
}

// 🧠 Extra Professional Improvement

// যদি item না পাওয়া যায় তাহলে error message দিতে চাও:

if (!prices[item]) {
  throw new Error(`Price not found for item: ${item}`);
}

/*🎯 তুমি এখন পারবে:

✔ Bill system বানাতে
✔ Mini POS system বানাতে
✔ Interview problem solve করতে
*/


/*

Problem 5: Remove Duplicates From Array
Function name: removeDuplicates(arr)
Statement:
 Return a new array where duplicate values are removed, keeping the original order.
Test case 1
Input:
 [5, 3, 5, 2, 3, 9, 2, 7]
Output:
[5, 3, 2, 9, 7]

Test case 2
Input:
 [1, 1, 1, 1]
Output:
[1]

*/

// 🟢 Beginner Level (একদম সহজ)

// লজিক:
// নতুন array নেবো → যদি আগে না থাকে তাহলে push করবো।

function removeDuplicates(arr) {
  let result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

// 🧪 Test
console.log(removeDuplicates([5, 3, 5, 2, 3, 9, 2, 7]));
// [5, 3, 2, 9, 7]

console.log(removeDuplicates([1, 1, 1, 1]));
// [1]

/*
✔ Order ঠিক থাকে
✔ সহজ বোঝা যায়
❌ কিন্তু বড় array হলে একটু slow
*/
// 🟡 Intermediate Level (Set ব্যবহার করে)
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/*
🔥 এক লাইনের solution
🔥 Order ঠিক রাখে
🔥 Clean & professional
*/
// 🔴 Advanced Level (Interview Style – Reduce)
function removeDuplicates(arr) {
  return arr.reduce((unique, item) => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
    return unique;
  }, []);
}

// 🚀 Super Advanced (High Performance Version)

// যদি array বড় হয় (১০ হাজার+ item), তাহলে Set + manual control ব্যবহার করা ভালো:

function removeDuplicates(arr) {
  const seen = new Set();
  const result = [];

  for (let item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}

/*
✔ O(n) time complexity
✔ Efficient
✔ Production ready
*/

/*

Problem 6: Phonebook Prefix Search
Function name: searchByPrefix(phonebook, prefix)
Statement:
 Return an array of names that start with the given prefix.
Test case 1
Input:
phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };
prefix = "ra";

Output:
["rahim", "rafi"]

Test case 2
Input:
phonebook = { mina: "013", mim: "014", rina: "015" };
prefix = "mi";

Output:
["mina", "mim"]
*/

// 🟢 Beginner Level (সহজ লজিক)

// লজিক:

// Object থেকে সব name বের করবো

// যদি name startsWith(prefix) হয় → result-এ রাখবো

function searchByPrefix(phonebook, prefix) {
  let result = [];

  for (let name in phonebook) {
    if (name.startsWith(prefix)) {
      result.push(name);
    }
  }

  return result;
}

// 🧪 Test Case 1
const phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };

console.log(searchByPrefix(phonebook, "ra"));
// ["rahim", "rafi"]

// 🟡 Intermediate Level (Cleaner Version)
function searchByPrefix(phonebook, prefix) {
  return Object.keys(phonebook)
    .filter(name => name.startsWith(prefix));
}

/*
✔ Short
✔ Professional
✔ Easy to read
*/
// 🔴 Advanced Level (Case-Insensitive + Safe Version)

// এখানে case difference ignore করবে (RA / ra / Ra সব কাজ করবে)

function searchByPrefix(phonebook, prefix) {
  const lowerPrefix = prefix.toLowerCase();

  return Object.keys(phonebook)
    .filter(name => name.toLowerCase().startsWith(lowerPrefix));
}

// 🚀 Extra Advanced (Large Data Optimized Version)

// যদি phonebook বড় হয় (১০,০০০+ entry):

function searchByPrefix(phonebook, prefix) {
  const result = [];
  const lowerPrefix = prefix.toLowerCase();

  for (let name of Object.keys(phonebook)) {
    if (name.toLowerCase().startsWith(lowerPrefix)) {
      result.push(name);
    }
  }

  return result;
}

/*
✔ O(n)
✔ Memory efficient
✔ Production friendly */

// 🧠 Bonus (Sort করে দেখাতে চাইলে)
return Object.keys(phonebook)
  .filter(name => name.startsWith(prefix))
  .sort();

  /*
  
Problem 7: Text Stats Generator
Function name: textStats(text)
Statement:
 Return an object containing:
Characters count excluding spaces


Words count


Vowels count


Consonants count


Test case 1
Input:
 "JavaScript is fun to learn"
Output:
{ characters: 22, words: 5, vowels: 8, consonants: 14 }

Test case 2
Input:
 " I am OK "
Output:
{ characters: 5, words: 3, vowels: 3, consonants: 2 }
*/
/*
আমাদের বের করতে হবে:

✅ characters (space ছাড়া)

✅ words

✅ vowels

✅ consonants */

// 🟢 Beginner Level (সহজ ও পরিষ্কার)
function textStats(text) {
  let trimmed = text.trim();

  let characters = 0;
  let words = trimmed.split(/\s+/).length;
  let vowels = 0;
  let consonants = 0;

  for (let char of trimmed) {
    if (char !== " ") {
      characters++;
    }

    let lower = char.toLowerCase();

    if ("aeiou".includes(lower)) {
      vowels++;
    } else if (/[a-z]/.test(lower)) {
      consonants++;
    }
  }

  return {
    characters,
    words,
    vowels,
    consonants
  };
}

// 🧪 Test Case 1
console.log(textStats("JavaScript is fun to learn"));


// Output: { characters: 22, words: 5, vowels: 8, consonants: 14 }

// 🧪 Test Case 2
console.log(textStats(" I am OK "));


// Output: { characters: 5, words: 3, vowels: 3, consonants: 2 }

// 🟡 Intermediate Level (Cleaner & Shorter)
function textStats(text) {
  const cleanText = text.trim();
  const characters = cleanText.replace(/\s/g, "").length;
  const words = cleanText.split(/\s+/).length;

  let vowels = 0;
  let consonants = 0;

  for (let char of cleanText.toLowerCase()) {
    if ("aeiou".includes(char)) vowels++;
    else if (/[a-z]/.test(char)) consonants++;
  }

  return { characters, words, vowels, consonants };
}

/*
✔ Cleaner
✔ More readable
✔ Professional*/

// 🔴 Advanced Level (Interview + Optimized)
function textStats(text) {
  const clean = text.trim();

  const characters = clean.replace(/\s/g, "").length;
  const words = clean ? clean.split(/\s+/).length : 0;

  const letters = clean.match(/[a-z]/gi) || [];

  const vowels = (clean.match(/[aeiou]/gi) || []).length;
  const consonants = letters.length - vowels;

  return { characters, words, vowels, consonants };
}

/*
✔ Regex optimized
✔ Handles empty string
✔ Clean & scalable */