/***

Generate a multiplication table for number 9

 */

let num = 5;

for (let i = 1; i<= 10; i++) {
  console.log(num, 'x', i, '=', (num * i))
}

// or 

let num = 15;

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
