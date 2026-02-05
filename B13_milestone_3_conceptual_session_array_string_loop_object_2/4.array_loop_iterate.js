let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(array.length);
// Using traditional for loop
// for (let i = 0; i < array.length; i += 1) {
//   console.log(array[i]);
// }


let numbers = ['25', '54', '21', '15', '39', '10'];
// For of loop
for (let number of numbers) {
  console.log(number);
}

let revnums = numbers.reverse();
console.log(revnums);
console.log(numbers.length);

console.log(numbers.join(', '));