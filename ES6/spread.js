const max = Math.max(5, 11, 8, 58, 12, 12);
// console.log(max);

const numbers = [5, 11, 89, 58, 12, 12];
const max2 = Math.max(...numbers);
// console.log(max2);

const params = [45, 21, 8];
function sum(x, y, z) {
  return x + y + z;
}

const result = sum(...params);
// console.log(result);

// const arr1 = [45, 21, 8, 12];
// const arr2 = arr1;

// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

const arr1 = [45, 21, 8, 12];
const arr2 = [50, ...arr1, 60, 80];

// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

const person = {name: 'Sifat', age: 13};
// const person2 = person;
const person2 = {...person, Designation: 'Student'};
person.salary = 25000;
console.log(person);
console.log(person2);
