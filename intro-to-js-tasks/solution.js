// Problem- 1: Calculate the remaining money after buying an apple and an orange.
let givenMoney = 1000;
let apple = 300;
let orange = 400;
let total = apple + orange;
let remainingMoney = givenMoney - total;
console.log(remainingMoney);
// Expected output: 300

// Problem- 2: Calculate the average of 5 marks.
let bangla = 85;
let math = 90;
let science = 78.56;
let english = 92.89;
let history = 88.09;
let average = (bangla + math + science + english + history) / 5;  
console.log(average.toFixed(2));
// Expected output: 86.6

// Problem- 3: divide by 5 and remainder.
let number = 17;
let remainder = number % 5;
console.log(remainder);
// Expected output: 2

// Problem- 4:
const a = isNaN('11');
console.log(a);
// Expected output: false
// Problem- 5:
const b = isNaN('hello');
console.log(b);
// Expected output: true