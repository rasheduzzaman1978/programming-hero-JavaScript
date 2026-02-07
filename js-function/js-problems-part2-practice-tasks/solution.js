// Task -1: Find the lowest, highest, total, average, sorted (Ascending, Descending) number in the array below.
// <br>
// `const heights = [167, 190, 120, 165, 137];`
// 🔰 1️⃣ Beginner Level (Manual Way – Loop ব্যবহার করে)

// সবচেয়ে সহজ এবং বোঝার মতো পদ্ধতি:
const heights = [62, 78, 54, 69, 62, 48, 54, 78, 60];

let lowest = heights[0];
let highest = heights[0];
let total = 0;
const unique = [];
// কোন সংখ্যা কতবার আছে তা বের করার জন্য
const count = {};

for (let i = 0; i < heights.length; i++) {
  total = total + heights[i];

  if (heights[i] < lowest) {
    lowest = heights[i];
  }
  if (heights[i] > highest) {
    highest = heights[i];
  }

  // Repeater value বাদ দেয়ার জন্য 
  if(!unique.includes(heights[i])){
    unique.push(heights[i]);
  }

  // কোন সংখ্যা কতবার আছে
  const num = heights[i];

  // if(count[num]) {
  //   count[num]++;
  // } else {
  //   count[num] = 1;
  // }
  // 📌 আরেকটু পরিষ্কারভাবে লেখা যায়
if (count[num] !== undefined) {
  count[num] = count[num] + 1;
} else {
  count[num] = 1;
}

// ⚡ সবচেয়ে স্মার্ট ভার্সন
// count[num] = (count[num] || 0) + 1; // অথবা, নিচের কোড
// এটা একই কাজ এক লাইনে করে।
// এখানে || হচ্ছে OR অপারেটর।

// 👉 নিয়ম:

// যদি বাম পাশ truthy হয় → সেটাই নেবে

// না হলে ডান পাশ নেবে
// 🏆 Best Practice

// Frequency count এর জন্য:

count[num] = (count[num] ?? 0) + 1;

// এটা সবচেয়ে সঠিক ও আধুনিক পদ্ধতি ✅
// 🔥 2. Nullish Coalescing (??)
// value ?? "default"
// 👉 শুধু null বা undefined হলে "default" নেবে।

}

heights[2] = 70;
heights.unshift(90);
heights.shift();
heights.push(56);
heights.pop();

const average = total / heights.length;
const sortedHeights = [...heights].sort((a, b) => a - b);
const sortedHeights2 = [...heights].sort((b, a) => b - a);

console.log("Total:", total);
console.log("Average:", average.toFixed(2));
console.log("Lowest:", lowest);
console.log('Highest:', highest);
console.log('Original:', heights);
console.log('Sorted (Ascending):', sortedHeights);
console.log('Sorted (Descending):', sortedHeights2);
console.log('unique:', unique);
console.log('Count:', count);
// console.log(heights[5]);
// console.log(heights[0]);


/*🔎 কীভাবে কাজ করছে?

প্রথম মানটাকে lowest হিসেবে ধরা হয়েছে।

তারপর loop দিয়ে প্রতিটা সংখ্যার সাথে তুলনা করা হয়েছে।

যদি ছোট পাওয়া যায় → lowest আপডেট হয়েছে।

📌 Output:

Lowest number is: 120

🟡 2️⃣ Intermediate Level (Math.min ব্যবহার করে)

JavaScript এ built-in method আছে 👉 Math.min() */

const heights = [167, 190, 120, 165, 137];

const lowest = Math.min(...heights);

console.log("Lowest number is:", lowest);

/*🔎 এখানে কী হলো?

...heights হলো Spread Operator

এটা array কে আলাদা আলাদা সংখ্যায় ভেঙে দেয়

Math.min() সবচেয়ে ছোট সংখ্যা বের করে

📌 Output:

Lowest number is: 120


✅ এটা cleaner এবং professional way।

🟠 3️⃣ Advanced Level (Reduce Method ব্যবহার করে) */
const heights = [167, 190, 120, 165, 137];

const lowest = heights.reduce((min, current) => {
    return current < min ? current : min;
});

console.log("Lowest number is:", lowest);

/* 🔎 কীভাবে কাজ করছে?

reduce() পুরো array কে একটি মানে পরিণত করে।

প্রথমে min = 167

তারপর প্রতিটা সংখ্যার সাথে তুলনা করে ছোটটা রাখে।

📌 Output:

Lowest number is: 120

🎯 Extra (Super Clean Modern Version) */
const heights = [167, 190, 120, 165, 137];

console.log(Math.min(...heights));


// Task -2: Find the friend with the smallest and biggest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`



const names = ['sajid', 'sifat', 'Nafisa', 'Jon', 'Alauddin'];

let smallest = names[0];
let biggest = names[0];

for (let i = 1; i < names.length; i++) {
  if (names[i].length < smallest.length) {
    smallest = names[i];
  }

  if (names[i].length > biggest.length) {
    biggest = names[i];
  }

}

console.log('Smallest name is:', smallest);
console.log('Biggest name is:', biggest);

/* 🔎 কীভাবে কাজ করছে?

প্রথম নামকে ছোট ধরে নেওয়া হয়েছে।

প্রতিটি নামের .length তুলনা করা হয়েছে।

ছোট হলে smallest আপডেট হয়েছে।

📌 Output:

Smallest name is: ron */

// 🟡 2️⃣ Intermediate Level (Sort ব্যবহার করে)
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const sorted = heights2.sort((a, b) => a.length - b.length);

console.log("Smallest name is:", sorted[0]);

/* 🔎 এখানে কী হলো?

sort() নামগুলোকে length অনুযায়ী সাজিয়েছে।

সবচেয়ে ছোট নাম প্রথমে চলে এসেছে।

⚠️ Note: sort() original array পরিবর্তন করে। */

// 🟠 3️⃣ Advanced Level (Reduce ব্যবহার করে)
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const smallest = heights2.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
});

console.log("Smallest name is:", smallest);

/*
🔎 Reduce কীভাবে কাজ করে?

প্রথমে shortest = 'rahim'

তারপর প্রতিটা নামের length তুলনা করে ছোটটা রাখে।

শেষ পর্যন্ত সবচেয়ে ছোট নাম রেখে দেয়।

📌 Output:

Smallest name is: ron

// 🎯 Extra Clean Modern Version */
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

console.log(
    heights2.reduce((a, b) => a.length < b.length ? a : b)
);

/*
Task-3: Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

🧩 Task – 3

আমাদের কাজ 👉 মোট বাজেট (total budget) বের করা।

দামগুলো:

💻 Laptop = 35000 tk

📱 Tablet = 15000 tk

📲 Mobile = 20000 tk

আমরা একটি function লিখবো 👉 calculateElectronicsBudget()
যা ইনপুট হিসেবে নিবে:

laptopQuantity, tabletQuantity, mobileQuantity


এবং return করবে 👉 total টাকা। */

// 🔰 1️⃣ Beginner Level (Basic Function)
function calculateElectronicsBudget(laptop, tablet, mobile) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const total = (laptop * laptopPrice) +
                  (tablet * tabletPrice) +
                  (mobile * mobilePrice);

    return total;
}

// Example:
const totalCost = calculateElectronicsBudget(1, 2, 1);
console.log("Total Budget:", totalCost, "tk");

// 📌 Output:
// Total Budget: 85000 tk

// 🟡 2️⃣ Intermediate Level (Input Validation সহ)
function calculateElectronicsBudget(laptop, tablet, mobile) {

    if (laptop < 0 || tablet < 0 || mobile < 0) {
        return "Invalid quantity!";
    }

    const total =
        laptop * 35000 +
        tablet * 15000 +
        mobile * 20000;

    return total;
}


// 👉 এখানে negative number দিলে error দেখাবে।

// 🟠 3️⃣ Advanced Level (Object & Clean Code Style)
function calculateElectronicsBudget(laptop, tablet, mobile) {

    const prices = {
        laptop: 35000,
        tablet: 15000,
        mobile: 20000
    };

    return (laptop * prices.laptop) +
           (tablet * prices.tablet) +
           (mobile * prices.mobile);
}

// 🔥 More Advanced (Dynamic Version – Flexible System)
function calculateElectronicsBudget(items) {
  const prices = {
    laptop: 35000,
    tablet: 15000,
    mobile: 20000,
    watch: 5000
  };

  let total = 0;

  for (let item in items) {
    if(item in prices) { 
      total = total + items[item] * prices[item];
    }
  }
  return total;
}


const totalCost = calculateElectronicsBudget({
  laptop: 1,
  tablet: 2,
  mobile: 1,
  watch: 1
});

console.log("Total Budget:", totalCost, "tk");

// console.log(calculateElectronicsBudget({
//   laptop: 1,
//   tablet: 2,
//   mobile: 1
// })
// );


// 👉 এই ভার্সনে future এ নতুন product যোগ করলেও সহজে কাজ করবে।

/*
Task-4: 

(You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.)
"Given a list of phones where each phone has a model name, brand, and price, write a JavaScript function that calculates:

The total price of all phones

The average price

The cheapest phone

The most expensive phone"
**Input**

<br>

        const phones = [
            { model: "PhoneA", brand: "Iphone", price: 95000 },
            { model: "PhoneB", brand: "Samsung", price: 40000 },
            { model: "PhoneC", brand: "Oppo", price: 26000 },
            { model: "PhoneD", brand: "Nokia", price: 35000 },
            { model: "PhoneE", brand: "Iphone", price: 105000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
        ]; */

        // 🔰 1️⃣ Beginner Level (Loop ব্যবহার করে)
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


function findAveragePhonePrice(phones) {
  let total = 0;
  let cheapest = phones[0];
  let expensive = phones[0];

  for (let i =0; i < phones.length; i++) {
    total = total + phones[i].price;
    // To get cheapest phone
    if (phones[i].price < cheapest.price) {
      cheapest = phones[i];
    }
    // To get expensive phone
    if (phones[i].price > expensive.price) {
      expensive = phones[i];
    }
  }
  console.log('Total Price:', total);
  const average = total / phones.length;
  return {average, cheapest, expensive};
}

const result = findAveragePhonePrice(phones);
console.log('Average price:', Math.round(result.average));
console.log('Cheapest Phone:', result.cheapest);
console.log('Expensive Phone:', result.expensive);

/*🔎 কী হচ্ছে?

প্রতিটা phone এর price যোগ করা হয়েছে

শেষে মোট যোগফলকে array এর length দিয়ে ভাগ করা হয়েছে

📌 Output:

58166.666666666664*/

// 🟡 2️⃣ Intermediate Level (for...of ব্যবহার করে)
function findAveragePhonePrice(phones) {
    let total = 0;

    for (const phone of phones) {
        total += phone.price;
    }

    return total / phones.length;
}


// 👉 Cleaner & readable version

// 🟠 3️⃣ Advanced Level (Reduce ব্যবহার করে)
function findAveragePhonePrice(phones) {

    const total = phones.reduce((sum, phone) => {
        return sum + phone.price;
    }, 0);

    return total / phones.length;
}


// 👉 reduce() পুরো array কে একটি total value বানিয়ে দেয়।

// 🔥 Professional Version (Error Handling + Clean Code)
function findAveragePhonePrice(phones) {

    if (!Array.isArray(phones) || phones.length === 0) {
        return "Invalid input!";
    }

    const total = phones.reduce((sum, phone) => sum + phone.price, 0);

    return Number((total / phones.length).toFixed(2));
}

/*
👉 এখানে:

Empty array হলে error দেখাবে

Average ২ decimal পর্যন্ত round করবে

📊 Final Result (Rounded)
58166.67
*/

/* Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
```
 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ]; 
        */

 /* 🧩 Task – 5 (Hard)
📌 Problem বুঝে নিই

প্রতিটি employee এর current salary (yearly) হিসাব হবে এভাবে:

currentSalary = starting + (increment × experience)


তারপর আমাদের বের করতে হবে 👉
Company-কে মোট কত টাকা প্রতি মাসে (monthly) দিতে হবে

⚠️ যেহেতু salary yearly হিসেবে বের হচ্ছে, তাই শেষে 12 দিয়ে ভাগ করতে হবে। */

// 📥 Input
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

// 🔰 Step 1: Logic Breakdown
// 🔹 Employee 1 (shahin)
= 20000 + (5000 × 5)
= 20000 + 25000
= 45000 (yearly)

// 🔹 Employee 2 (shihab)
= 15000 + (7000 × 3)
= 15000 + 21000
= 36000

// 🔹 Employee 3 (shikot)
= 30000 + (1000 × 9)
= 30000 + 9000
= 39000

// 🔹 Employee 4 (shohel)
= 29000 + (4000 × 0)
= 29000

// ✅ Total Yearly Salary
45000 + 36000 + 39000 + 29000
= 149000 (yearly total)

// 🎯 Monthly Total
149000 / 12 = 12416.67

// 🔰 Beginner Solution (Loop ব্যবহার করে)
function calculateMonthlyTotalSalary(employees) {
    let totalYearly = 0;

    for (let i = 0; i < employees.length; i++) {
        const currentSalary =
            employees[i].starting +
            (employees[i].increment * employees[i].experience);

        totalYearly += currentSalary;
    }

    return totalYearly / 12;
}

console.log(Math.round(calculateMonthlyTotalSalary(employees)));

// 🟡 Intermediate (for...of)
function calculateMonthlyTotalSalary(employees) {
    let totalYearly = 0;

    for (const emp of employees) {
        const salary = emp.starting + (emp.increment * emp.experience);
        totalYearly += salary;
    }

    return totalYearly / 12;
}

// 🟠 Advanced (Reduce Version – Professional Style)
function calculateMonthlyTotalSalary(employees) {

    const totalYearly = employees.reduce((total, emp) => {
        return total + (emp.starting + emp.increment * emp.experience);
    }, 0);

    return Number((totalYearly / 12).toFixed(2));
}

console.log(calculateMonthlyTotalSalary(employees));

/*
📊 Final Answer
12416.67

🧠 Hard Level Insight

এখানে tricky part হলো:

প্রথমে individual salary calculate করতে হবে

তারপর সব যোগ করতে হবে

তারপর yearly থেকে monthly convert করতে হবে */

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function calculateMonthlyTotalSalary(employees) {
    let totalYearly = 0;

    for (let i = 0; i < employees.length; i++) {
        const currentSalary = employees[i].starting + (employees[i].increment * employees [i].experience);

        totalYearly += currentSalary;
    }

    return totalYearly / 12;
}

console.log(Math.round(calculateMonthlyTotalSalary(employees)));

🔹 Reduce দিয়ে লেখা কোড
const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateMonthlyTotalSalary(employees) {
  let totalYearly = employees.reduce((sum, emp) => {
    let currentSalary = emp.starting + emp.increment * emp.experience;
    return sum + currentSalary;
  }, 0);

  return totalYearly / 12;
}

console.log(Math.round(calculateMonthlyTotalSalary(employees)));

🎯 Output
29583

✅ কীভাবে কাজ করছে

reduce() দিয়ে sum (total yearly salary) বের করা হচ্ছে।

প্রতিটি employee-এর salary = starting + increment * experience

সব employee-এর salary যোগ করা হচ্ছে।

শেষে / 12 দিয়ে মাসিক total salary বের করা হচ্ছে।