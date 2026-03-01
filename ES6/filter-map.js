const users = [
  {id: 1, name: 'Rashed'},
  {id: 2, name: 'Sajid'},
  {id: 3, name: 'Sifat'}
  
];

const names = users.map(user => user.name);
console.log(names);

const numbers = [5, 12, 8, 130, 44];

const filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers);

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2500 },
  { name: "Monitor", price: 15000 }
];

const cheapProducts = products.filter(product => product.price <3000).map(product => product.name);
console.log(cheapProducts);

const students = [
  { name: "Abir", marks: 75 },
  { name: "Rashed", marks: 85 },
  { name: "Sumi", marks: 45 },
  { name: "Karim", marks: 92 },
  { name: "Mina", marks: 58 }
];

const studentNumbers = students.filter(student => student.marks > 80).map(student => student.name);
console.log(studentNumbers);

const nums = [5, 8, 12, 15, 22, 25];
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log('Given Numbers:', nums);
console.log('Even Numbers:', evenNumbers);

const friends = ['Zabed', 'Mazed', 'Zubayer'];
const ZFriends = friends.filter(frd => frd[0] === 'Z');
console.log(ZFriends);