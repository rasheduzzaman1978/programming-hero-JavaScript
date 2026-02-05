// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }

// sum = 0;
// for (let i = 1; i<=10; i++){
//   if(i % 2 === 0){
//     console.log("Even Numbers:" , i)
//     sum= sum + i;
//   }
// }
// console.log("Total:", sum);

// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }

// sum = 0;
// for (let i = 1; i<=10; i++){
//   if(i % 2 === 1){
//     console.log("Odd Numbers:" , i)
//     sum= sum + i;
//   }
// }
// console.log("Total:", sum);

// for (let i = 1; i <= 50; i++){
//   if(i % 2 === 0 && i % 5 === 0){
//     console.log(i)
//   }
// }

// for (let i = 1; i <= 60; i++){
//   console.log('I will invest at least 6 hrs every single day for next 60 days!', i);
// }

// for (let i = 81; i >= 65; i--){
//   console.log(i);
// }


// let count = 81;

// const timer = setInterval(() => {
//   console.log(count);
//   count--;

//   if (count < 65) {
//     clearInterval(timer);
//   }
// }, 1000);

/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// for (let i = 0; i<= 200; i++){
//   console.log(i);

//   if (i === 100){
//     break;
//   }
  
// }

// 🔹 উদাহরণ ৯: ফ্যাক্টোরিয়াল (Factorial) বের করা

// let n = 5;
// let fact = 1;

// for (let i = 1; i<= n; i++){
//   fact *= i;
// }

// console.log('Factorial:', fact);

// 🔹 উদাহরণ ১০: Array থেকে জোড় সংখ্যা আলাদা করা

// let nums = [12, 5, 8, 3, 40, 17];
// let even = [];

// for (let i = 0; i <nums.length; i++){
//   if (nums[i] % 2 === 0){
//     even.push(nums[i]);
//   }
// }

// console.log(even);

// ✅ for...of loop ব্যবহার করে জোড় সংখ্যা বের করা
// let nums = [12, 5, 8, 3, 10, 7];
// let even = [];

// for (let num of nums) {
//     if (num % 2 === 0) {
//         even.push(num);
//     }
// }

// console.log(even);


// 🔹 উদাহরণ ১: ১ থেকে ১০ পর্যন্ত জোড় সংখ্যা বের করা

// for (let i = 1; i <= 10; i++)
//   if (i % 2 === 0){
//     console.log(i);
//   }

// for (let i = 1; i<=5; i++){
//   console.log(i);
// }

// for (let i = 10; i>= 1; i--){
//   console.log(i);
// }

// let fruits = ['Apple', 'Mango', 'Banana', 'Grape'];

// for (let i = 0; i< fruits.length; i++){
//   console.log(fruits[i]);
// }

// let fruits = ['Apple', 'Mango', 'Banana', 'Grape'];
// for (let fruit of fruits){
//   console.log(fruit);
// }

// for (let i = 0; i<= 10; i++){
//   if (i === 5){
//     break;
//   }
//   console.log(i);
// }

// for (i = 0; i<=15; i++){
//   if (i === 10){
//     continue;
//   }
//   console.log(i);
// }

// 🔹 উদাহরণ ১: ১ থেকে ১০ পর্যন্ত সংখ্যা বের করা

// for (i = 0; i <= 10; i++){
//   console.log(i);
// }

// 🔹 উদাহরণ ১: ১ থেকে ১০ পর্যন্ত জোড় সংখ্যা বের করা

// let even = [];
// let sum = 0;
// for (i = 0; i<=10; i++){
//   if (i % 2 === 0){
//     even.push(i);
//     sum += i;
//   }
//  }
// console.log('Total Even Numbers:', even);
//  console.log('Sum of Total numbers:', sum);

//  🔹 উদাহরণ ২: ১ থেকে ১০ পর্যন্ত বিজোড় সংখ্যা বের করা

let odd = [];
let count = 0;
for (let i = 0; i <= 10; i++){
  if (i % 2 !== 0){
    odd.push(i);
    // count ++;
    console.log(i);
  }
}


console.log('Odd Numbers:', odd);
// console.log('Total odd numbers:', count);
console.log('Total odd numbers:', odd.length);