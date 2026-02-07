🔷 reduce() কী?

reduce() হলো JavaScript array-এর একটি method, যা পুরো array-কে একটি single value-এ রূপান্তর করে।

মানে — অনেকগুলো মান নিয়ে শেষে একটা ফলাফল দেয়।

👉 যেমন:

সব সংখ্যার যোগফল

গড়

সর্বোচ্চ মান

একটা object বানানো

grouping করা

count করা

🔷 Syntax
array.reduce((accumulator, currentValue, index, array) => {
    return updatedAccumulator;
}, initialValue);

🔹 Parameter ব্যাখ্যা
Parameter	ব্যাখ্যা
accumulator	আগের iteration-এর result
currentValue	বর্তমান element
index (optional)	বর্তমান index
array (optional)	পুরো array
initialValue	accumulator-এর শুরুর মান
🔷 Reduce কীভাবে কাজ করে?

ধরো:

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

Step-by-step:
Iteration	acc	    curr	result
    1	    0	    1	    1
    2	    1	    2	    3
    3	    3	    3	    6
    4	    6	    4	    10

Final result → 10

🔷 কেন initialValue গুরুত্বপূর্ণ?

যদি initialValue না দাও:

numbers.reduce((acc, curr) => acc + curr);


তাহলে:

প্রথম element accumulator হবে

iteration শুরু হবে ২য় element থেকে

⚠️ Empty array হলে error দিবে।

👉 Best practice → সবসময় initialValue ব্যবহার করা।

🔷 বিভিন্ন বাস্তব উদাহরণ
1️⃣ Array এর যোগফল
const sum = [10, 20, 30].reduce((acc, curr) => acc + curr, 0);

2️⃣ গড় বের করা
const numbers = [10, 20, 30];

const average = numbers.reduce((acc, curr, index, array) => {
    acc += curr;
    if (index === array.length - 1) {
        return acc / array.length;
    }
    return acc;
}, 0);

console.log(average);

3️⃣ সর্বোচ্চ মান বের করা
const max = [5, 12, 8, 20].reduce((acc, curr) =>
    curr > acc ? curr : acc
);

4️⃣ Object array থেকে total salary
const employees = [
    { salary: 20000 },
    { salary: 30000 },
    { salary: 25000 }
];

const total = employees.reduce((acc, emp) =>
    acc + emp.salary, 0
);

5️⃣ Count করা (frequency counter)
const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(count);


Output:

{
  apple: 2,
  banana: 2,
  orange: 1
}

🔷 Reduce দিয়ে grouping
const people = [
    { name: "A", age: 20 },
    { name: "B", age: 25 },
    { name: "C", age: 20 }
];

const grouped = people.reduce((acc, person) => {
    if (!acc[person.age]) {
        acc[person.age] = [];
    }
    acc[person.age].push(person);
    return acc;
}, {});

🔷 Reduce vs For Loop
For Loop	Reduce
বেশি verbose	কম কোড
imperative	functional
beginner-friendly	powerful
🔷 Reduce কবে ব্যবহার করা উচিত?

✔ যখন একটা final single value দরকার
✔ যখন transformation দরকার
✔ যখন grouping/counting দরকার
✔ যখন functional style দরকার

🔷 Common Mistakes

❌ return ভুলে যাওয়া
❌ initialValue না দেওয়া
❌ accumulator পরিবর্তন না করা

🔷 Mental Model

👉 reduce() মানে:

"একটা array নিয়ে ধাপে ধাপে একটা চূড়ান্ত ফলাফল বানানো"

JavaScript-এর reduce() মেথডটি array-এর সব element একত্র করে একটি মাত্র মান (single value) বানাতে ব্যবহৃত হয়—যেমন যোগফল, গুণফল, object তৈরি, counting, grouping ইত্যাদি।

চলুন ধাপে ধাপে সহজভাবে বুঝি 👇

🔹 Syntax
array.reduce((accumulator, currentValue, index, array) => {
  return newValue;
}, initialValue);

এখানে—

accumulator 👉 আগের ধাপের জমা মান

currentValue 👉 বর্তমান element

index 👉 current index (optional)

array 👉 পুরো array (optional)

initialValue 👉 accumulator-এর শুরু মান (খুব গুরুত্বপূর্ণ)

🔹 Example 1: সব সংখ্যার যোগফল
let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(sum); // 10

কী হচ্ছে?
Step	total	num	result
start	0	1	1
2	1	2	3
3	3	3	6
4	6	4	10
🔹 Example 2: গুণফল বের করা
let nums = [2, 3, 4];

let product = nums.reduce((acc, n) => acc * n, 1);

console.log(product); // 24

🔹 Example 3: সবচেয়ে বড় সংখ্যা বের করা (max)
let arr = [5, 20, 8, 15];

let max = arr.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});

console.log(max); // 20


👉 এখানে initialValue দেওয়া হয়নি, তাই প্রথম element (5)-ই accumulator হয়েছে।

🔹 Example 4: Array থেকে Object বানানো
let fruits = ["apple", "banana", "apple", "orange", "banana"];

let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 2, banana: 2, orange: 1 }


👉 খুব কাজে লাগে frequency / counting করার সময়।

🔹 Example 5: Nested Array flatten করা
let nested = [[1, 2], [3, 4], [5]];

let flat = nested.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(flat); // [1,2,3,4,5]

🔹 কেন initialValue গুরুত্বপূর্ণ?

যদি না দেন—

[].reduce((a, b) => a + b); // ❌ Error


কিন্তু—

[].reduce((a, b) => a + b, 0); // ✅ 0


👉 empty array হলে initialValue না দিলে error হয়।

🔹 Reduce কখন ব্যবহার করবেন?

✔️ Sum / product বের করতে
✔️ Max / min বের করতে
✔️ Count / group করতে
✔️ Object বানাতে
✔️ Flatten করতে
✔️ Complex calculation

আপনি চাইলে আমি পরের ধাপে দেখাতে পারি:

👉 map() vs reduce() পার্থক্য
👉 বাস্তব জীবনের mini-project-style উদাহরণ
👉 reduce দিয়ে Ticket Fare Calculator / Result Analyzer

বলুন কোনটা জানতে চান 😊

👉 map() vs reduce() পার্থক্য
👉 বাস্তব জীবনের mini-project-style উদাহরণ
👉 reduce দিয়ে Ticket Fare Calculator / Result Analyzer

চমৎকার 👍
তাহলে আমরা তিনটা অংশে আলোচনা করব—

1️⃣ map() vs reduce() পার্থক্য
2️⃣ বাস্তব জীবনের mini-project-style উদাহরণ
3️⃣ reduce দিয়ে Ticket Fare Calculator / Result Analyzer

সবগুলোই সহজ ভাষায় ও practical কোডসহ 👇

✅ 1️⃣ map() vs reduce() পার্থক্য
🔹 map()

👉 Array-এর প্রতিটি element পরিবর্তন করে নতুন array বানায়।

Example:

let numbers = [1, 2, 3, 4];

let doubled = numbers.map(num => num * 2);

console.log(doubled);
// [2, 4, 6, 8]


✔️ Output = নতুন array
✔️ Same length থাকে

🔹 reduce()

👉 পুরো array থেকে একটা মাত্র মান বের করে (number / object / array)।

Example:

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);
// 10


✔️ Output = single value
✔️ flexible (anything হতে পারে)

📊 তুলনামূলক টেবিল
বিষয়	map()	reduce()
Output	নতুন array	single value / object / array
Length	same থাকে	1
Use	transform	aggregate / calculate
Example	salary increase	total salary
✅ 2️⃣ Mini-Project Style Example: Shopping Cart Total

ধরি একটি shopping cart আছে 👇

let cart = [
  { name: "Pen", price: 10, qty: 3 },
  { name: "Book", price: 100, qty: 2 },
  { name: "Bag", price: 500, qty: 1 }
];

🎯 Goal:

👉 Total price বের করা

let totalBill = cart.reduce((total, item) => {
  return total + item.price * item.qty;
}, 0);

console.log("Total Bill:", totalBill);
// Total Bill: 730

🎯 With Discount (10% if bill > 700)
let finalAmount = cart.reduce((total, item) => {
  return total + item.price * item.qty;
}, 0);

if (finalAmount > 700) {
  finalAmount *= 0.9;
}

console.log("Payable:", finalAmount);

✅ 3️⃣ reduce দিয়ে Ticket Fare Calculator / Result Analyzer
🎟️ Ticket Fare Calculator

ধরি যাত্রীদের data আছে—

let passengers = [
  { age: 8, type: "child" },
  { age: 22, type: "student" },
  { age: 65, type: "senior" },
  { age: 40, type: "regular" }
];

let baseFare = 800;

Rules:

age < 10 → Free

Student → 50% discount

age >= 60 → 15% discount

Otherwise → full fare

✅ Total collection calculate
let totalCollection = passengers.reduce((sum, p) => {
  let fare = baseFare;

  if (p.age < 10) {
    fare = 0;
  } else if (p.type === "student") {
    fare *= 0.5;
  } else if (p.age >= 60) {
    fare *= 0.85;
  }

  return sum + fare;
}, 0);

console.log("Total Collection:", totalCollection);

📊 Result Analyzer (Pass / Fail count)

ধরি marks array আছে—

let marks = [78, 35, 90, 40, 55, 28];

let result = marks.reduce(
  (acc, mark) => {
    if (mark >= 40) acc.pass++;
    else acc.fail++;
    return acc;
  },
  { pass: 0, fail: 0 }
);

console.log(result);
// { pass: 4, fail: 2 }

🎯 BONUS: Grade Counter
let grades = ["A", "B", "A", "C", "F", "B"];

let count = grades.reduce((acc, g) => {
  acc[g] = (acc[g] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { A: 2, B: 2, C: 1, F: 1 }


আপনি চাইলে পরের ধাপে আমরা—

👉 reduce দিয়ে Leaderboard / Topper finder
👉 Group by class
👉 Average calculator
👉 Complex chaining: filter + map + reduce

এর মধ্যে কোনটা দেখাব? 😄

জি

চলুন তাহলে আমরা এবার advanced কিন্তু খুবই practical কয়েকটা বিষয় একসাথে দেখি 👇

আজ দেখব—

✅ reduce দিয়ে Average Calculator
✅ Topper / Leaderboard Finder
✅ Group By (Class-wise result)
✅ filter + map + reduce chaining

সবগুলোই স্কুল–স্টাইল data দিয়ে 😄

✅ 1️⃣ Average Calculator (reduce দিয়ে)
let marks = [70, 85, 90, 55, 60];

let average =
  marks.reduce((sum, m) => sum + m, 0) / marks.length;

console.log("Average:", average);


👉 reduce দিয়ে total → তারপর length দিয়ে ভাগ।

✅ 2️⃣ Topper Finder
let students = [
  { name: "Rahim", marks: 78 },
  { name: "Karim", marks: 92 },
  { name: "Salma", marks: 85 }
];

let topper = students.reduce((best, current) => {
  return current.marks > best.marks ? current : best;
});

console.log("Topper:", topper);

✅ 3️⃣ Group By Class (Class-wise Result)
let data = [
  { name: "Arafat", class: "5", marks: 60 },
  { name: "Mitu", class: "5", marks: 40 },
  { name: "Rafi", class: "6", marks: 70 },
  { name: "Nila", class: "6", marks: 35 }
];

let grouped = data.reduce((acc, s) => {
  if (!acc[s.class]) {
    acc[s.class] = [];
  }

  acc[s.class].push(s);
  return acc;
}, {});

console.log(grouped);


👉 Output:

{
  5: [ {...}, {...} ],
  6: [ {...}, {...} ]
}

✅ 4️⃣ filter + map + reduce Chaining

ধরি আমরা শুধু pass করা ছাত্রদের average বের করতে চাই 👇

let marks2 = [45, 30, 80, 25, 60];

let avgPass =
  marks2
    .filter(m => m >= 40)
    .map(m => m) // optional
    .reduce((sum, m) => sum + m, 0)
    / marks2.filter(m => m >= 40).length;

console.log("Pass Average:", avgPass);


👉 আগে filter → তারপর reduce।

🎯 Mini Challenge আপনার জন্য 😉

এই data দিয়ে—

let students = [
  { name: "Rina", class: "7", marks: 55 },
  { name: "Tuhin", class: "7", marks: 35 },
  { name: "Sadia", class: "8", marks: 80 },
  { name: "Imran", class: "8", marks: 65 }
];


চেষ্টা করুন—

1️⃣ মোট average marks বের করা
2️⃣ Class-wise pass count
3️⃣ Topper বের করা reduce দিয়ে

আপনি কোড লিখে পাঠান—আমি দেখে ঠিক করে দেব 👍

মোট average marks বের করা
2️⃣ Class-wise pass count
3️⃣ Topper বের করা reduce দিয়ে

চলুন এই data দিয়েই তিনটা কাজ reduce ব্যবহার করে করি 👇

let students = [
  { name: "Rina", class: "7", marks: 55 },
  { name: "Tuhin", class: "7", marks: 35 },
  { name: "Sadia", class: "8", marks: 80 },
  { name: "Imran", class: "8", marks: 65 }
];

✅ 1️⃣ মোট Average Marks (reduce দিয়ে)

প্রথমে total বের করব → তারপর length দিয়ে ভাগ।

let totalMarks = students.reduce((sum, s) => {
  return sum + s.marks;
}, 0);

let average = totalMarks / students.length;

console.log("Overall Average:", average);

✅ 2️⃣ Class-wise Pass Count (reduce দিয়ে)

ধরি pass mark = 40 👇

let classWisePass = students.reduce((acc, s) => {
  if (!acc[s.class]) {
    acc[s.class] = 0;
  }

  if (s.marks >= 40) {
    acc[s.class]++;
  }

  return acc;
}, {});

console.log(classWisePass);
// { 7: 1, 8: 2 }

✅ 3️⃣ Topper বের করা (reduce দিয়ে)
let topper = students.reduce((best, current) => {
  return current.marks > best.marks ? current : best;
});

console.log("Topper:", topper);
// { name: "Sadia", class: "8", marks: 80 }


🎯 Summary Output হবে—

Overall Average → 58.75

Class-wise Pass → {7:1, 8:2}

Topper → Sadia

আপনি চাইলে আমরা পরের ধাপে চেষ্টা করতে পারি 👇

👉 Class-wise average
👉 Fail list
👉 Grade assign reduce দিয়ে
👉 Merit list sort করে

বলুন কোনটা করবেন 😊

Lower বের করুন

ঠিক আছে 👍
এই একই students array থেকে এবার আমরা Lowest Marks (Lower / weakest student) বের করব reduce() ব্যবহার করে 👇

📌 Data:
let students = [
  { name: "Rina", class: "7", marks: 55 },
  { name: "Tuhin", class: "7", marks: 35 },
  { name: "Sadia", class: "8", marks: 80 },
  { name: "Imran", class: "8", marks: 65 }
];

✅ Lowest / Lower Student (reduce দিয়ে)
let lowest = students.reduce((worst, current) => {
  return current.marks < worst.marks ? current : worst;
});

console.log("Lowest Student:", lowest);

🎯 Output:
Lowest Student: { name: "Tuhin", class: "7", marks: 35 }


👉 এখানে কী হচ্ছে?

প্রথম student → worst

প্রতিটা student-এর marks তুলনা

যেটার marks সবচেয়ে কম → সেটাই রেখে দিচ্ছে

আপনি চাইলে আমরা next ধাপে দেখাতে পারি 👇

👉 Class-wise lowest
👉 Pass/Fail list reduce দিয়ে
👉 Grade distribution
👉 Merit list (Top 3)

কোনটা দেখতে চান? 😊

জি

চলুন এবার Class-wise Lowest Marks / Fail List / Grade Distribution / Top 3 Merit List একসাথে দেখাই reduce() দিয়ে।
আমরা ধাপে ধাপে সহজভাবে দেখব 👇

📌 Data
let students = [
  { name: "Rina", class: "7", marks: 55 },
  { name: "Tuhin", class: "7", marks: 35 },
  { name: "Sadia", class: "8", marks: 80 },
  { name: "Imran", class: "8", marks: 65 }
];

1️⃣ Class-wise Lowest Marks
let classWiseLowest = students.reduce((acc, s) => {
  if (!acc[s.class] || s.marks < acc[s.class].marks) {
    acc[s.class] = s;
  }
  return acc;
}, {});

console.log("Class-wise Lowest:", classWiseLowest);


Output:

{
  7: { name: "Tuhin", class: "7", marks: 35 },
  8: { name: "Imran", class: "8", marks: 65 }
}

2️⃣ Fail List (marks < 40)
let failList = students.reduce((acc, s) => {
  if (s.marks < 40) acc.push(s);
  return acc;
}, []);

console.log("Fail List:", failList);


Output:

[ { name: "Tuhin", class: "7", marks: 35 } ]

3️⃣ Grade Distribution (A: ≥80, B: ≥60, C: ≥40, F: <40)
let gradeDist = students.reduce((acc, s) => {
  let grade;
  if (s.marks >= 80) grade = "A";
  else if (s.marks >= 60) grade = "B";
  else if (s.marks >= 40) grade = "C";
  else grade = "F";

  acc[grade] = (acc[grade] || 0) + 1;
  return acc;
}, {});

console.log("Grade Distribution:", gradeDist);


Output:

{ A: 1, B: 2, C: 1, F: 1 }


(note: data অনুযায়ী)

4️⃣ Top 3 Merit List
let top3 = students
  .sort((a, b) => b.marks - a.marks)  // descending order
  .slice(0, 3);

console.log("Top 3 Merit List:", top3);


Output:

[
  { name: "Sadia", class: "8", marks: 80 },
  { name: "Imran", class: "8", marks: 65 },
  { name: "Rina", class: "7", marks: 55 }
]


🎯 Summary:

Class-wise lowest → Tuhin (7), Imran (8)

Fail list → Tuhin

Grade distribution → {A:1, B:2, C:1, F:1}

Top 3 merit → Sadia, Imran, Rina

যদি চাইলে আমি এবার একটি single reduce দিয়ে সবকিছু একসাথে বের করার কোড দেখাতে পারি, যাতে একবারে সব হিসাব হয়ে যায়।

আপনি কি সেটা দেখতে চান?

জি

দারুণ 😄
এবার আমরা একই reduce() ব্যবহার করে একবারে সবকিছু বের করব—অর্থাৎ

মোট average

Class-wise pass count

Topper

Lowest student

Fail list

Grade distribution

একসাথে ✅

📌 Data
let students = [
  { name: "Rina", class: "7", marks: 55 },
  { name: "Tuhin", class: "7", marks: 35 },
  { name: "Sadia", class: "8", marks: 80 },
  { name: "Imran", class: "8", marks: 65 }
];

✅ Single Reduce Solution
let result = students.reduce((acc, s) => {
  // 1️⃣ Total Marks for average
  acc.totalMarks += s.marks;

  // 2️⃣ Class-wise Pass Count (pass >= 40)
  if (!acc.classPass[s.class]) acc.classPass[s.class] = 0;
  if (s.marks >= 40) acc.classPass[s.class]++;

  // 3️⃣ Topper
  if (!acc.topper || s.marks > acc.topper.marks) acc.topper = s;

  // 4️⃣ Lowest
  if (!acc.lowest || s.marks < acc.lowest.marks) acc.lowest = s;

  // 5️⃣ Fail list
  if (s.marks < 40) acc.failList.push(s);

  // 6️⃣ Grade Distribution
  let grade;
  if (s.marks >= 80) grade = "A";
  else if (s.marks >= 60) grade = "B";
  else if (s.marks >= 40) grade = "C";
  else grade = "F";

  acc.gradeDist[grade] = (acc.gradeDist[grade] || 0) + 1;

  return acc;
}, {
  totalMarks: 0,
  classPass: {},
  topper: null,
  lowest: null,
  failList: [],
  gradeDist: {}
});

// 7️⃣ Calculate Average
result.average = result.totalMarks / students.length;

console.log(result);

🎯 Output Example
{
  totalMarks: 235,
  classPass: { '7': 1, '8': 2 },
  topper: { name: 'Sadia', class: '8', marks: 80 },
  lowest: { name: 'Tuhin', class: '7', marks: 35 },
  failList: [ { name: 'Tuhin', class: '7', marks: 35 } ],
  gradeDist: { C: 2, F: 1, B: 1, A: 1 },
  average: 58.75
}


✅ এইভাবে আমরা একবারে সব গুরুত্বপূর্ণ তথ্য বের করতে পারি।
reduce() সত্যিই খুব শক্তিশালী যখন একাধিক aggregation করতে হয়।