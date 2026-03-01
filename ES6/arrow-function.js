const add = (a, b) => {
  return a + b;
}

console.log(add(5, 7));

const add2 = (a, b) => a+ b;
console.log(add2(82, 20));

const greet = name => {
  console.log('Hello ' + name);
};

greet('Rashed');

const sayHi = () => {
  console.log('Hi');
};

sayHi();

const squre = num => num * num;
const result = squre(8);
console.log(result);

const person = {
  name: 'Rashed',
  normalFunc: function() {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  }
};

person.normalFunc();
person.arrowFunc();


const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

