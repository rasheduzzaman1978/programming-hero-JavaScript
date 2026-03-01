const cart = [
  { product: "বই", price: 200 },
  { product: "কলম", price: 50 },
  { product: "খাতা", price: 100 }
];

const totalPrice = cart.reduce((total, item) => {
  return total + item.price;
}, 0); 

console.log(`আপনার মোট বিলঃ ${totalPrice} টাকা`);


const students = [
  { name: "Abir", marks: 75 },
  { name: "Rashed", marks: 85 },
  { name: "Sumi", marks: 45 },
  { name: "Karim", marks: 92 },
  { name: "Mina", marks: 58 }
];

// const totalMarks = students.reduce((total, student) => {
//   return total + student.marks;
// }, 0);

// or 
const totalMarks = students.reduce((total, student) => total + student.marks, 0);
console.log('Total Marks:', totalMarks);