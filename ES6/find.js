const numbers = [5, 8, 12, 130, 44];

const found = numbers.find(num => num > 10);
console.log(found);

const users = [
  { id: 1, name: "Abir" },
  { id: 2, name: "Rashed" },
  { id: 3, name: "Sumi" }
];

const user = users.find(u => u.id === 2);
console.log(user);