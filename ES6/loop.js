const numbers = [1, 2, 3, 4, 5];

// Traditional for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} 

// for...of loop
for (const num of numbers) {
  console.log(num);
}

const person = {
  name: 'Rashed',
  age: 13,
  city: 'Dhaka'
};
// for...in loop
for (const key in person) {
  console.log(key + ': ' + person[key]);
}

for (const key in person) {
  console.log(`${key}: ${person[key]}`);  
  } 
