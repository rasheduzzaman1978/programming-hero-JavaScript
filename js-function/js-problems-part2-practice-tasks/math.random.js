// function generateRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1;
// }

// // উদাহরণ
// console.log(generateRandomNumber());

/*🚀 Bonus: অন্য range চাইলে?
1 থেকে 6 (ডাইস)
Math.floor(Math.random() * 6) + 1
1 থেকে 100 পর্যন্ত
Math.floor(Math.random() * 100) + 1

50 থেকে 100
Math.floor(Math.random() * 51) + 50
*/

/*তুমি চাইছো:

১ থেকে ১০০ পর্যন্ত র‍্যান্ডম সংখ্যা জেনারেট হবে

সব সংখ্যা একটি array-তে জমা হবে

কোনো duplicate থাকবে না

এটা করার সবচেয়ে সহজ উপায় হলো Set ব্যবহার করা, কারণ Set নিজে থেকেই duplicate রাখে না।*/

// ✅ পদ্ধতি ১: Set ব্যবহার করে
// function generateUniqueRandomNumbers() {
//     const numbers = new Set();

//     while (numbers.size < 100) {
//         const randomNumber = Math.floor(Math.random() * 100) + 1;
//         numbers.add(randomNumber);
//     }

//     return Array.from(numbers);
// }

// const result = generateUniqueRandomNumbers();
// console.log(result);

// ✅ পদ্ধতি ২: Array shuffle করে (আরও ভালো উপায়)

// এটা আরও efficient, কারণ এখানে ১–১০০ সব সংখ্যা আগে বানিয়ে পরে shuffle করা হয়।

// function generateUniqueRandomNumbers() {
//     const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

//     // Shuffle array
//     for (let i = numbers.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
//     }

//     return numbers;
// }

// const result = generateUniqueRandomNumbers();
// console.log(result);

/*🔥 কেন এটা ভালো?

কোনো while loop দরকার নেই

১০০% unique নিশ্চিত

Performance ভালো */

// 🎯 যদি তুমি শুধু ১০টা unique random সংখ্যা চাও?
// function generateUniqueRandomNumbers(count) {
//     const numbers = new Set();

//     while (numbers.size < count) {
//         numbers.add(Math.floor(Math.random() * 100) + 1);
//     }

//     return [...numbers];
// }

// console.log(generateUniqueRandomNumbers(10));

/*তুমি ১ থেকে ১০০ এর মধ্যে ২০টি unique random সংখ্যা চাও — কোনো duplicate ছাড়া।

সবচেয়ে ভালো ও efficient উপায় হলো আগে ১–১০০ array বানিয়ে shuffle করে প্রথম ২০টা নেওয়া। */

// ✅ Best Practice (Recommended)
// function generateUniqueRandomNumbers(count) {
//     const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

//     // Fisher–Yates Shuffle
//     for (let i = numbers.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
//     }

//     return numbers.slice(0, count);
// }

// const result = generateUniqueRandomNumbers(20);
// console.log(result);

/* 🔥 কেন এটা ভালো?

১০০% duplicate-free

Fast এবং clean

Professional standard shuffle algorithm ব্যবহার করে */

// 🔹 Alternative (Set ব্যবহার করে)
function generateUniqueRandomNumbers(count) {
    const numbers = new Set();

    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * 100) + 1);
    }

    return [...numbers];
}

console.log(generateUniqueRandomNumbers(20));