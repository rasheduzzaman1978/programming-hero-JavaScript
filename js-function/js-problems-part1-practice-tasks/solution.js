// Task-1: Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  // return (celsius * 9/5) + 32;
  return fahrenheit;

}

let celsius = 35;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C = " + fahrenheit + "°F");

// Task-2: You are given an array of numbers. Count how many times the a number is repeated in the array. 
// ✅ পদ্ধতি ১: সাধারণ Loop ব্যবহার করে

function countOccurrences(arr, number) {
    let count = 0;
    let count2 = {};

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === number) {
            count++;
        }

        const num = arr[i];

        if (count2[num] !== undefined) {
            count2[num] = count2[num] + 1;
        } else {
            count2[num] = 1;
        }
    }

    return { count, count2 };
}

let numbers = [1, 2, 3, 2, 3, 4, 2, 5];
let result = countOccurrences(numbers, 2);

console.log("2 appears " + result.count + " times.");
console.log("count2:", result.count2);

// 📌 Output:
// 2 appears 3 times.
// count2: { '1': 1, '2': 3, '3': 2, '4': 1, '5': 1 }

// // ✅ পদ্ধতি ২: filter() ব্যবহার করে (ছোট ও সহজ উপায়)
// function countOccurrences(arr, number) {
//     return arr.filter(item => item === number).length;
// }

// // উদাহরণ
// let numbers = [1, 2, 3, 2, 4, 2, 5];
// console.log(countOccurrences(numbers, 2));

/*🔎 ব্যাখ্যা:

arr = আপনার দেওয়া array

number = যে সংখ্যাটি গণনা করতে চান

Loop পদ্ধতিতে প্রতিটি উপাদান চেক করা হয়

filter() পদ্ধতিতে মিল পাওয়া উপাদানগুলো নিয়ে নতুন array তৈরি করে, তারপর তার length নেওয়া হয় */

// Task-3: Write a function to count the number of vowels in a string.
// ✅ পদ্ধতি ১: Loop ব্যবহার করে
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// উদাহরণ
let text = "Ridwan Sajid";
console.log("Number of vowels:", countVowels(text));


// 📌 Output:
// Number of vowels: 3

// ✅ পদ্ধতি ২: Regular Expression ব্যবহার করে (Short Method)
function countVowels(str) {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// উদাহরণ
console.log(countVowels("JavaScript"));

/* 🔎 ব্যাখ্যা:

aeiouAEIOU দিয়ে ছোট ও বড় হাতের vowel চেক করা হয়েছে

includes() দিয়ে প্রতিটি অক্ষর পরীক্ষা করা হয়েছে

Regex /[aeiou]/gi

g = global (সবগুলো খুঁজবে)

i = case insensitive (ছোট-বড় হাত একসাথে) */

// Task-4: Write a function to find the longest word in a given string.

// ✅ সমাধান (JavaScript)
function findLongestWord(str) {
    let words = str.split(" ");  // string কে array বানানো
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

// উদাহরণ
let sentence = "I am learning Programming to become a programmer";
console.log('Longest word is :', findLongestWord(sentence));
// Output: Longest word is : Programming
/* 🔎 ব্যাখ্যা:

split(" ") দিয়ে string কে শব্দ অনুযায়ী array বানানো হয়েছে

longest ভ্যারিয়েবলে সবচেয়ে বড় শব্দ রাখা হয়েছে

প্রতিটি শব্দের length চেক করে বড় হলে আপডেট করা হয়েছে */

// ✅ Short Version (reduce ব্যবহার করে)
function findLongestWord(str) {
    return str.split(" ").reduce((longest, current) =>
        current.length > longest.length ? current : longest
    , "");
}

console.log(findLongestWord("I am learning Programming to become a programmer"));

// Task-5: Generate a random number between 10 to 20.

// ✅ সমাধান (Integer Random Number)
function generateRandomNumber() {
    return Math.floor(Math.random() * 11) + 10;
}

// উদাহরণ
console.log(generateRandomNumber());

/* 🔎 কীভাবে কাজ করে?

Math.random() → 0 থেকে 1 এর মধ্যে random সংখ্যা দেয়

Math.random() * 11 → 0 থেকে 10.999 পর্যন্ত সংখ্যা দেয়

Math.floor() → দশমিক বাদ দিয়ে পূর্ণসংখ্যা বানায়

+ 10 → রেঞ্জ 10 থেকে শুরু করায়

👉 তাই এটি 10 থেকে 20 (দুইটিই সহ) এর মধ্যে যেকোনো একটি সংখ্যা দিবে। */

// ✅ যদি Decimal Number চান (10–20 এর মধ্যে)
function generateRandomDecimal() {
    return Math.random() * (20 - 10) + 10;
}

console.log(generateRandomDecimal());
