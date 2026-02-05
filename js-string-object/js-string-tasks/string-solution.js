// Task-1: Count how many times a string has the letter `a`

let str = 'banana is my favorite fruit.';
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a') {
    count++;
  }
}

console.log(count);

// Task-2: Count how many times a string has the letter `a` or `A`

// let str2 = 'BanAnA';
// let count2 = 0;

// let lowerStr = str2.toLowerCase();

// for (let i = 0; i < lowerStr.length; i++) {
//   if (lowerStr[i] === 'a') {
//     count2++
//   }
// }

// console.log(count2);

// or 
// let str = "BanAna";

// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a" || str[i] === "A") {
//         count++;
//     }
// }

// console.log(count);

// or 
// let str = "BanAna";

// let matches = str.match(/a/gi);

// let count = matches ? matches.length : 0;

// console.log(count);


// Task-3: Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

let str3 = "Education";

let lowerStr2 = str3.toLowerCase();

let hasAllVowels =
    lowerStr2.includes("a") &&
    lowerStr2.includes("e") &&
    lowerStr2.includes("i") &&
    lowerStr2.includes("o") &&
    lowerStr2.includes("u");

console.log(hasAllVowels);


// // or 
// let str = "Education";
// let lowerStr = str.toLowerCase();

// let vowels = ["a", "e", "i", "o", "u"];
// let hasAll = true;

// for (let vowel of vowels) {
//     if (!lowerStr.includes(vowel)) {
//         hasAll = false;
//         break;
//     }
// }

// console.log(hasAll);

// or 

let str6 = "Education";

let result = ["a", "e", "i", "o", "u"]
    .every(vowel => str6.toLowerCase().includes(vowel));

console.log(result);

/*
Task-4: If a given string has either x, replace x by y. if the given string has X, replace it by Y.

    Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.*/

    let str5 = "xX Marks the x Spot";

let result2 = str5
  .replace(/x/g, "y")  // replace lowercase x
  .replace(/X/g, "Y"); // replace uppercase X

console.log(result2);


// Task-5: Capitalize Every first Letter of each word in a String


let str10 = "hello world from javascript";
let result4 = "";
let capitalizeNext = true;

for (let i = 0; i < str10.length; i++) {

  if (capitalizeNext && str10[i] !== " ") {
    result4 += str[i].toUpperCase();
    capitalizeNext = false;
  } else {
    result4 += str[i];
  }

  if (str[i] === " ") {
    capitalizeNext = true;
  }
}

console.log(result4);

// or 
let str8 = "hello world from javascript";

let result3 = str8
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(result3);

// or 
function capitalizeWords(str9) {
  return str9
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world"));

// or 
let str7 = "hello world from javascript";

let result5 = str7.replace(/\b\w/g, char => char.toUpperCase());

console.log(result5);
