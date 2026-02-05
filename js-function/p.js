// Module-18: Practice

// function greet (){
//   console.log('Hello, Rashed!')
// }

// greet();

// function add (a, b) {
//   return a + b;
// }

// console.log('4 + 5 =', add(5, 4));

// function greet1 (name = 'Sajid'){
//   console.log('Hello, ' + name);
// }

// greet1();
// console.log('............................');
// greet1('Sifat');
// console.log('............................');
// greet1('Nabil');

// const multiply = function(a, b){
//   return a * b;
// }

// console.log('4 x 5 =', multiply(4, 5));

// function sum () {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total = total + arguments[i];
//   }
//   return total;
// }

// console.log(sum(10, 20, 70));
// console.log(sum(1, 2, 4, 3));


// const subtract = (a, b) => a - b ;
// console.log(subtract(20, 5));

// function divide (a, b) {
//   if (b === 0) {
//     return 'Division by zero is not allowed';
//   } else {
//     return a / b;
//   }
// }

// console.log(divide(50, 5));
// console.log(divide(20, 0));

// const person = {
//   firstName: 'Sifat',
//   lastName: 'Abdullah',
//   fullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// };

// console.log(person.fullName());

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));

// function greet3({firstName, lastName}) {
//   console.log(`Hello, ${firstName} ${lastName}`);
// }

// const person1 = { firstName: 'Ridwan', lastName: 'Sajid' };
// greet3(person1);


// class Calculator {
//   constructor() {
//     this.value = 0;
//   }

//   add2(num) {
//     this.value += num;
//     return this;
//   }

//   subtract2(num) {
//     this.value -= num;
//     return this;
//   }
  
//   multiply2(num) {
//     this.value *= num;
//     return this;
//   }

//   getResult() {
//     return this.value;
//   }
// }

// const calc = new Calculator();

// console.log(calc.add2(10).subtract2(5).multiply2(20).getResult());

// function getFullName(firstName, lastName) {
//   return [firstName, lastName];
// }

// const [first, last] = getFullName('Sifat', 'Abdullah');
// console.log(first);
// console.log(last);
// console.log(first, last);

// function greet3(name, age) {
//   if (typeof name !== 'string' || typeof age !== 'number') {
//     console.log('Invalid input types')
//   } else {
//     console.log(`Hello, ${name}! You are ${age} years old.`);
//   }
// }

// greet3("Sajid", 17);
// greet3('Sifat', 12);
// greet3('Nabil', '19');


// function modifyArray(arr) {
//   arr.push(10);
//   console.log(arr);
// }

// let numbers = [1, 2, 3];
// modifyArray(numbers);
// console.log(numbers);

// function sum3(x, y) {
//   // const result = x + y;
//   // return result;
//   return x + y;
// }

// const total = sum(10, 40);
// console.log(total);
// console.log(sum3(5, 2));

// function square(num) {
//   console.log('value of the number parameter', num);
//   const total = num * num;
//   console.log('square of the given number is :', total);
//   return total;
// }

// square(4);
// square(8);
// square(50);
// square(3);

// const ans = square(7);
// console.log(ans);

// function isEven(number) {
//   if (number % 2 === 0) {
//     // return true;
//     return `${number} is a even number.`;
//   } else {
//     // return false;
//     return `${number} is a odd number.`;
//   }
// }

// const evenNum = isEven(5);
// console.log(evenNum);

// function evenSizedString(str) {
//   const size = str.length;
//   console.log(str, size);
//   if (size % 2 === 0){
//     return 'even size'
//   } else {
//     return 'odd size'
//   }
// }

// evenSizedString('Dhaka');
// evenSizedString('Sirajgonj');

// function doubleOrTriple(num, double) {
//   if (double === true) {
//     const result = num * 2;
//     return result;
//   } else {
//     const result = num * 3;
//     return result;
//   }
// }

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

// function numberOfElement(numbers) {
//   const len = numbers.length;
//   return len;
// }

// const leng = numberOfElement([10, 12, 45, 102, 89, 4, 7, 15]);
// console.log(leng)

// function sumOfNumbers (numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     // sum = sum + numbers[i];
//     sum += numbers[i];
//   }
//   console.log(numbers);
//   return sum;
// }

// const nums = [54, 60, 75, 18, 9];
// const sum4 = sumOfNumbers(nums);
// console.log('Sum of numbers is:', sum4);


// function sumOfNumbers (numbers) {
//   let sum = 0;
//   for (const num of numbers){
//     console.log(num);
//        sum += num;
//   }
//   console.log(numbers);
//   return sum;
// }

// const numbs = [60, 20, 9];
// const sum5 = sumOfNumbers(numbs);
// console.log('Sum of numbers is:', sum5);

// // function evenNumbersOnly(numbers) {
// //   const evens = [];
// //   for (const number of numbers) {
// //     if (number % 2 === 0) {
// //       // console.log(number);
// //       evens.push(number);
// //     }
// //   }
// //   console.log('Given Numbers:', numbers);
// //   return evens;
// // }

// // const numberss = [5, 8, 14, 9, 20];
// // const evens = evenNumbersOnly(numberss);
// // console.log('Even Numbers:', evens);


// function evenNumbersOnly(numbers) {
//   const evens = [];
//   let sum = 0;
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       // console.log(number);
//       evens.push(number);
//       sum = sum + number;
//     }
//   }
//   console.log('Given Numbers:', numbers);
//   return {evens, sum};
// }

// const numberss = [5, 8, 14, 9, 20];
// const result = evenNumbersOnly(numberss);
// console.log('Even Numbers:', result.evens);
// console.log('Sum of Even Numbers:', result.sum);

// Inch to Feet Conversion

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + ' ft' + ', ' + inchRemaining + ' inch.';
  return result;
}
const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);
const shuvoHeight2 = inchToFeet2(66);
console.log(shuvoHeight2);

// Mile to Kilometer convertion

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

const mile = 10;
// const mileInput = mileToKilometer(10);
const mileInput = mileToKilometer(mile).toFixed(2);
console.log(mile + ' miles = ' + mileInput + ' Kilometers');

// আরও সুন্দরভাবে (Template String ব্যবহার করে)

function mileToKilometer2(mile2){
  return mile2 * 1.60934;
}

const mile2 = 20;
const kilometer = mileToKilometer2(mile2).toFixed(2);
console.log(`${mile2} miles =  ${kilometer} Kilometers`);

// Kilometer to mile convert

function kilometerToMile(kilo) {
  // const mile3 = kilo * 0.621371;
  return kilo * 0.621371;
  // return mile3;
}

const kilo = 10;
const mile3 =kilometerToMile(kilo).toFixed(2);
console.log(`${kilo} kilometers = ${mile3} miles.`);

// Leap Year বের করার নিয়ম

function isLeapYear(year) {
  if (year % 400 === 0) {
    return `${year} is a Leap Year.`;
  } else if (year % 100 === 0) {
    return `${year} is not a Leap Year.`;
  } else if (year % 4 === 0) {
    return `${year} is a Leap Year.`;
  } else {
    return `${year} is not a Leap Year.`;
  }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(1700));
console.log(isLeapYear(2042));
console.log(isLeapYear(2026));
console.log(isLeapYear(2000));


// or 
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const year = 2026;

if (isLeapYear(year)) {
  console.log(`${year} is a Leap Year.`);
} else {
  console.log(`${year} is not a Leap Year.`);
}


// Function takes an array as parameter
// give me the average of the odd numbers in the array

function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      // console.log(number)
      odds.push(number);
    }
    
  }
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  // const count = odds.length
  // console.log(sum, count);
  // const avg = sum / count;
  // return avg;
  const average = sum / odds.length;
  return average;
   
}

const numbers3= [42, 13, 58, 65, 81, 49, 60];
const avg = oddAverage(numbers3);
console.log('Average of the odd numbers is :', avg);


// Array has some duplicate elements
// []

const biraniKhor = ['abul', 'babul', 'cabul', 'babul', 'dabul', 'kabul', 'cabul'];

function noDuplicate(array){
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  console.log(array);
  return unique;
}

const uniqueArray = noDuplicate(biraniKhor);
console.log("Unique Array:", uniqueArray);

// 🔥 আরও ছোট ও ক্লিন উপায় (Set ব্যবহার করে)

// JavaScript এ Set নিজে থেকেই duplicate রাখে না। তাই এক লাইনে করা যায়:

function noDuplicate(array) {
  return [...new Set(array)];
}

const biraniKhor2 = ['abul', 'babul', 'cabul', 'babul', 'dabul', 'kabul', 'cabul'];
const uniqueArray2 = noDuplicate(biraniKhor2);
console.log("Unique Array:", uniqueArray2);


// এটা বেশি professional এবং clean approach ✨

// এবার Numbers array দিয়ে দেখি 

function noDuplicate2(array) {
  const unique2 = [];

  for (const item of array) {
    if (!unique2.includes(item)) {
      unique2.push(item);
    }
  }
  return unique2;
}

const numbers2 = [1,  5, 61, 5, 58, 7, 5, 81, 61];
const uniqueNumbers2 = noDuplicate2(numbers2);
console.log("Unique Numbers:", uniqueNumbers2);

// ✅ ২️⃣ Professional Short Way (Set ব্যবহার করে)
function noDuplicate(array) {
  return [...new Set(array)];
}

const numbers = [1, 5, 61, 5, 58, 7, 5, 81, 61];
const uniqueNumbers = noDuplicate(numbers);
console.log("Unique Numbers:", uniqueNumbers);


/*🔹 একই Output আসবে:

[1, 5, 61, 58, 7, 81]

🎯 মনে রাখবে:

ছোট প্রজেক্ট বা শেখার সময় → loop method ভালো

বাস্তব প্রজেক্টে → Set method বেশি clean ও efficient */

const min = Math.min(45, 21, 65, 99, 126, 5, 8);
console.log(min);

const max = Math.max(45, 21, 65, 99, 126, 5, 8);
console.log(max);

console.log(Math.PI);
console.log(Math.abs(-10));
console.log(Math.round(2.25));
console.log(Math.round(2.85));
console.log(Math.ceil(6.48));
console.log(Math.floor(3.85));
console.log(Math.random());
console.log(Math.random()*10);

const rand = Math.round(Math.random()*11);
console.log(rand);

const today = new Date();
const date = new Date('2026-02-03');
console.log(date);
console.log(today);
console.log(date.getMonth());
console.log(date.getDate());
const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));


let a = 5;
let b= 7;

console.log(a, b);
// a = b;
// b = a;

const temp = a;
a= b;
b= temp;
console.log(a, b);

let x= 5; 
let y = 7;

console.log((`x = ${x}, y = ${y}`));

[x, y] = [y, x];
console.log((`x = ${x}, y = ${y}`));

// Module-19: Practice

// inside a function
function getMax(num1, num2) {
  if(num1 > num2) {
    return num1;
  
} else {
    return num2;
}
  
}
  
const max2 = getMax(56, 79);
const max3 = getMax(59, 205);
const ultimateMax = getMax(max2, max3);

console.log(ultimateMax);
console.log("Max of the is:", max2);

const jim = 56;
const tim = 89; 
const kim = 168;

if (jim > tim && jim> kim) {
  console.log('Jim is the ultimate boss');
} 
else if (tim > jim && tim > kim) {
  console.log('Tim is the boss');
} else {
  console.log('Kim is the kardashians boss');
}


const num1 = 10; 
const num2 = 50;
const num3 = 40;

function maxOfThree (num1, num2, num3) {
  if(num1 > num2 && num1 > num3) {
    console.log(num1 + ' is the biggest number');
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2 + ' is the biggest number');
  } else {
    console.log(num3 + ' is the biggest number');
  }
}

maxOfThree(num1, num2, num3);

// 🔥 Even Cleaner Version (Best Practice)

// You can simplify everything using Math.max():

// const num1 = 10;
// const num2 = 50;
// const num3 = 40;

// function maxOfThree(a, b, c) {
//   console.log(Math.max(a, b, c) + " is the biggest number");
// }

// maxOfThree(num1, num2, num3);


const max4 = Math.max(12, 1, 56);
console.log('Max issuing Math.max', max4);

const heights = [65, 66, 68, 72, 78, 60, 65, 71];

function getMax2(numbers) {
  let max3 = numbers[0];
  for (const num of numbers) {
    if (num > max3) {
        max3 = num;
    }
  }
  return max3;
}

const max5 = getMax2(heights);
console.log('Maximum value is ', max5);

// 🔥 ১️⃣ reduce() দিয়ে Max বের করা
const max6 = heights.reduce((acc, current) => {
  return current > acc ? current : acc;
});

console.log("Maximum value is:", max6);

/* 🔍 কীভাবে কাজ করছে?

acc = accumulator (আগের বড় মান)

current = বর্তমান সংখ্যা

যদি current > acc হয় → current রাখবে

না হলে → acc রাখবে */

// ❄️ ২️⃣ reduce() দিয়ে Min বের করা
const min4 = heights.reduce((acc, current) => {
  return current < acc ? current : acc;
});

console.log("Minimum value is:", min4);

/* 🔍 কীভাবে কাজ করছে?

এখানে শুধু comparison উল্টো হয়েছে:

যদি current < acc হয় → current রাখবে

না হলে → acc রাখবে

ফলাফল 👉 60
*/
// ✨ আরো ছোট করে লেখা যায়
const max7 = heights.reduce((a, b) => a > b ? a : b);
console.log(max7);
const min3 = heights.reduce((a, b) => a < b ? a : b);
console.log(min3);

// 🎯 Bonus Tip (Best Practice)

// Empty array থাকলে error এড়াতে initial value দেওয়া ভালো:

const max8 = heights.reduce((a, b) => a > b ? a : b, heights[0]);
console.log(max8);

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChaiWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotalWood = chairQuantity * perChaiWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;
  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

  return totalWood;
}

const wood = woodQuantity(1, 2, 2);
console.log('Wood needed:', wood);

function calculateTotalPrice(shirtQuantity, pantQuantity, shoeQuantity) {
  const SHIRT_PRICE = 500;
  const PANT_PRICE = 300;
  const SHOE_PRICE = 900;

  const totalShirtPrice = shirtQuantity * SHIRT_PRICE;
  const totalPantPrice = pantQuantity * PANT_PRICE;
  const totalShoePrice = shoeQuantity * SHOE_PRICE;

  const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

  return totalPrice;
}

const grandTotal1 = calculateTotalPrice(2, 1, 2);
console.log('Grand Total 1:', grandTotal1);


/* 🔍 আরেকটু Professional Touch (Optional)

যদি future-এ product বাড়ে (ধরো hat, belt ইত্যাদি), তাহলে এই structure একটু বড় হয়ে যাবে। তখন scalable করার জন্য object ব্যবহার করা যায়। */

// 🚀 Advanced Scalable Version
function calculateTotalPrice(items) {
  const PRICES = {
    shirt: 500,
    pant: 600,
    shoe: 1000
  };

  let total = 0;

  for (const item in items) {
    // const quantity = items[item];
    // console.log(quantity);
    // const price = PRICES[item];
    // console.log(price);
    // const itemTotal = quantity * price;
    // console.log(itemTotal);

    // total = total + itemTotal;
    // console.log(total);

    // এই চারটা লাইনকে ছোট করে লেখা হয়েছে:

    total += items[item] * PRICES[item];
  }

  return total;
}

const cart = {
  shirt: 2,
  pant: 1,
  shoe: 2
};

const grandTotal2 = calculateTotalPrice(cart);
console.log("Grand Total:", grandTotal2);

/* 👉 কেন এটা ভালো?

নতুন product যোগ করতে শুধু PRICES object এ add করলেই হবে

Function parameter কমে গেছে

Code scalable হয়েছে */

// Get minium Price

const prices = [10000, 20000, 50000, 100000, 120000, 8000, 30000, 35000];

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if(num < min) {
      min = num;
    }
  }
  return min;
}

const cheap = getMin(prices);
console.log('cheapest one is:', cheap);

// Get Maxium Price

const prices2 = [10000, 20000, 50000, 100000, 120000, 8000, 30000, 35000];

function getMax3(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if(num > max) {
      max = num;
    }
  }
  return max;
}

const expensive = getMax3(prices2);
console.log('Most expensive one is:', expensive);

// Get cheapest Phone Price

const phones = [
  {name: 'samsung', price: 20000, camera: '12mp', color: 'black'},
  {name: 'samsung', price: 18000, camera: '12mp', color: 'black'},
  {name: 'samsung', price: 30000, camera: '12mp', color: 'black'},
  {name: 'samsung', price: 100000, camera: '12mp', color: 'black'},
  {name: 'samsung', price: 27000, camera: '12mp', color: 'black'},
]

function getCheapestPhone(phones) {
  let cheapest = phones[0];

  for (const phone of phones) {
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }

  return cheapest;
}

const cheapPhone = getCheapestPhone(phones);
console.log('Cheapest phone is:', cheapPhone);

/**
 * upto 100: ---> 100
 * more than 101-200: ---> 90
 * more than 200: --- 70
 */

function discoutedPrice(quantity) {
  if (quantity <=100) {
    const total = quantity * 100;
    return total;
  } else if ( quantity <=200) {
    const total = quantity * 90;
    return total;
  } else {
    const total = quantity * 70;
    return total;
  }
}

const total = discoutedPrice(210);
console.log(total);

/**
 * first 100: --> 100
 * 101- 200: --> 90
 * above 200: --> 70
 */


function layeredDiscountedTotal (quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;

  } else if ( quantity <= 200) {
    const first100Total = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * second100Price;
    const total = first100Total + remainingTotal;
    return total;

  } else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * above200Price
    const total = first100Total + second100Total + remainingTotal;
    return total;
  }
}
const total = layeredDiscountedTotal2 (250);
console.log("Total price is:", total);

// console.log(layeredDiscountedTotal(250));


// ✅ সবচেয়ে সহজ Version (কম কোড)
function layeredDiscountedTotal2 (quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  let total = 0;

  if (quantity > 200) {
    // total = total + (100 * first100Price);
    total += 100 * first100Price;
    total += 100 * second100Price;
    // total = total + ((quantity - 200) * above200Price);
    total += (quantity - 200) * above200Price;

  } else if (quantity > 100) {
    total += 100 * first100Price;
    total += (quantity - 100) * second100Price;

  } else {
    total += quantity * first100Price;
  }

  return total;
}

const total2 = layeredDiscountedTotal2 (250);
console.log("Total price is:", total2);
// console.log(layeredDiscountedTotal(250));
/*
🎯 কেন এটা সহজ?

✔ বারবার return নেই
✔ কোড repeat কম
✔ একটাই total variable
✔ পড়তে পরিষ্কার */

// 🚀 আরেকটা Ultra Clean Version (Math ব্যবহার করে)
function layeredDiscountedTotal3 (quantity) {
  const first100 = Math.min(quantity, 100);
  const second100 = Math.min(Math.max(quantity - 100, 0), 100);
  const rest = Math.max(quantity - 200, 0);

  return first100 * 100 + second100 * 90 + rest * 70;
}

const total3 = layeredDiscountedTotal3 (250);
console.log("Total price is:", total3);
// console.log(layeredDiscountedTotal(250));

/*
🧠 এটা কীভাবে কাজ করছে?

ধরি quantity = 250

first100  = 100
second100 = 100
rest      = 50


তারপর:

100×100 + 100×90 + 50×70

🎖 কোনটা ব্যবহার করবে?

🔹 Beginner হলে → প্রথম version
🔹 Interview / Professional code হলে → দ্বিতীয় version */

// Calculator

function add (num1, num2) {
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Division by zero is not allowed.";
  } else if (num2 < 0) {
    return "Num2 should not be negative.";
  }
  return num1 / num2;
}

// 🔥 আরও Clean Professional Version
// function divide(num1, num2) {
//   if (num2 <= 0) {
//     return "Num2 must be greater than 0.";
//   }
//   return num1 / num2;
// }

function calculator (a, b, operation) {
  if (operation === 'add') {
    const result = add(a, b);
    return result;

  } else if (operation === 'subtract') {
    const result = subtract (a, b);
    return result;

  } else if (operation === 'multiply') {
    // const result = multiply (a, b);
      return multiply (a, b);

    } else if (operation === 'divide') {
      return divide (a, b);

    } else {
      return "Only 'add', 'subtract', 'multiply', 'divide' operation allowed."
    }
  }

  const result = calculator (21, 7, 'divide');
  console.log(result);

  // ✅ Cleaner Calculator (Switch Version)
  
function calculator(a, b, operation) {
  switch (operation) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    default:
      return "Only 'add', 'subtract', 'multiply', 'divide' allowed.";
  }
}

const result = calculator(21, 7, 'divide');
console.log(result);

// Another Calculation

function multiply (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Please provide a number";
  }
  const mult = a * b;
  return mult;
}

const result = multiply (5, 'ten');
console.log(result);

function fullName (first, second) {
  if(typeof first !== 'string') {
    return 'First name should be a string';
  } else if (typeof second !== 'string') {
    return 'Second name should be a string';
  }

  const full = first + ' ' + second;
  return full;
}

const full = fullName ('Sajid', 3);
console.log(full);

// Validation check
function getPrice(product) {
  if (typeof product !== 'object') {
    return 'Please provide an object';
  }
  const price = product.price;
  return price;
}

// const price = getPrice({name: 'Tooth Paste', price: 200, color: 'green'});
const price = getPrice(5);
console.log('Price:', price);

function getSecond(numbers) {
  if (Array.isArray(numbers) === false) {
    return 'Please provide an array';
  }
  const second = numbers[1];
  return second;
}

const second = getSecond ([25, 30, 54]);
console.log(second);