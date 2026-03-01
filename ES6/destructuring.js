// const product = {
//   name: 'iPhone',
//   price: 799,
//   description: 'a smartphone by apple'
// };

// const newPrice = product.price + 100;
// const phoneName = `this is ${product.name}`;

// const price = product.price;
// const name = product.name;
const price = 5555;
// const product = {name: 'iPhone', price: 799, brand: 'Apple'};

// Destructuring 
const {name, price: phonePrice, camera = '12MP'} = {name: 'iPhone', price: 799, brand: 'Apple', camera: '48MP'};

console.log('Name:', name);
console.log('Phone Price:', phonePrice);
console.log('Camera:', camera);

const numbers = [45, 50];
const [first, second] = [45, 50, 60, 70];
console.log(first, second);

const [a, b, ...rest] = [45, 50, 60, 70];
console.log(a, b);
console.log(...rest);
