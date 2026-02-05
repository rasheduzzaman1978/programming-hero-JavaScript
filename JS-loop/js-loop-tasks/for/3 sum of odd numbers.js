

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */


let sum = 0;
 
for (let i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    // sum = sum + i;
    sum += i;
  }
}

console.log('Sum of odd numbers:', sum);


// or 

let sum = 0;
let oddNumbers = [];
let count = 0;
 
for (let i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    oddNumbers.push(i)
    count = count + 1;
    sum += i;
  }
}
console.log('Odd numbers:', oddNumbers);
console.log('Total odd numbers:', count);
console.log('Sum of odd numbers:', sum);


// Subtask-2:

// Display sum of all the even numbers from 51 to 85.


let sum = 0;

if (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    sum += i;
    console.log(i);
  }
}

console.log('Sum of even numbers: ',  sum);

// or 


let sum = 0;
let count = 0;

for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    sum += i;
    count++;
    console.log(i);
  }
}

console.log('count:' , count);
console.log('Sum of even numbers: ',  sum);