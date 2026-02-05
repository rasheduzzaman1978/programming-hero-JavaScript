
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// let reversedColors = [];

// for (let i = colors.length - 1; i >= 0; i--) {
//     reversedColors.push(colors[i]);
// }
// console.log(colors);
// console.log(reversedColors); 


// const numbers2 = [12, 98, 5, 41, 23, 78, 46];
// let evenNumbers = [];
// for (let i = 0; i < numbers2.length; i++) {
//   if (numbers2[i] % 2 === 0) {
//       evenNumbers.push(numbers2[i]);
//   }
// }

// console.log(evenNumbers);

// // ✅ Using for...of Loop
// // 🔹 Code:
// const numbers2 = [12, 98, 5, 41, 23, 78, 46];

// let evenNumbers = [];

// for (let num of numbers2) {
//     if (num % 2 === 0) {
//         evenNumbers.push(num);
//     }
// }

// console.log(evenNumbers);

// /*✅ Output
// [12, 98, 78, 46]*/



// let numbers3 = ['Tom', 'Tim' ,  'Tin', 'Tik'];

// let result = "";

// for (let name of numbers3) {
//   result += name + ' ';
// }

// console.log(result.trim());


// const statement = 'I   am a hard working  person';

// // let result = statement.split(' ').reverse().join(' ');
// let result = statement.split(/\s+/).reverse().join(' ');
// // 🔎 /\s+/ মানে:

// // এক বা একাধিক space কে একসাথে split করবে

// // ফলে empty string তৈরি হবে না
// console.log(result);

let original = [1, 2, 3];

let copy = [...original];

copy[0] = 99;
copy[1] = 100;
copy[2] = 200;
copy[3] = 300;

console.log('Original:', original);
console.log('Copy:', copy);