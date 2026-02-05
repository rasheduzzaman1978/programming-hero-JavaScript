// Task-1: Access the `golden rod` color value in output.

const colors = {
  red: "#FF0000",
  green: "#00FF00",
  goldenRod: "#DAA520"
};

// console.log(colors.goldenRod); /*Dot notation*/
console.log(colors['goldenRod']); /*Bracket notation*/


// Task-2: For this object below add a property named `passenger capacity` with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// Adding new property

car['passenger capacity'] = 5;

console.log(car);

// Task-3: Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30
  }
};

console.log('Marks:', student.physics.marks);

// Task-4: Count the `number of properties`.

let student2 = {
    name: 'Sifat Abdullah',
    age: 13,
    city: 'Ullapara',
    isStudent: true
};

// Count number of properties
let count = Object.keys(student2).length;

console.log(`number of properties:`, count);

// Task-5: Loop through an object and print the key-value pairs with their `types`

let myObject = {
    name: 'Ridwan Sajid',
    age: 25,
    city: 'Sirajgonj',
    isStudent: true
};

for (let key in myObject) {
  console.log(`key: ${key} | type: ${typeof myObject[key]}` );
}