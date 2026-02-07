দুটি সংখ্যা যোগ করার প্রোগ্রাম
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;

console.log("যোগফল:", sum);

2️⃣ দুটি সংখ্যার বিয়োগ, গুণ ও ভাগ
let num1 = 10;
let num2 = 5;

let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

console.log("বিয়োগ:", subtraction);
console.log("গুণ:", multiplication);
console.log("ভাগ:", division);

3️⃣ একটি সংখ্যা even না odd চেক
let number = 7;

if (number % 2 === 0) {
    console.log("সংখ্যাটি Even");
} else {
    console.log("সংখ্যাটি Odd");
}

4️⃣ একটি সংখ্যা positive, negative না zero চেক
let number = -5;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

5️⃣ তিনটি সংখ্যার গড় (Average) বের করা
let num1 = 10;
let num2 = 20;
let num3 = 30;

let average = (num1 + num2 + num3) / 3;

console.log("গড়:", average);

6️⃣ Celsius থেকে Fahrenheit Convert

👉 সূত্র: (C × 9/5) + 32

let celsius = 25;

let fahrenheit = (celsius * 9/5) + 32;

console.log("Fahrenheit:", fahrenheit);

7️⃣ Rectangle এর Area বের করা

👉 সূত্র: length × width

let length = 10;
let width = 5;

let area = length * width;

console.log("Rectangle এর Area:", area);

8️⃣ একটি সংখ্যা 3 এবং 5 উভয় দিয়ে divisible কিনা চেক
let number = 15;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("সংখ্যাটি 3 এবং 5 উভয় দিয়ে বিভাজ্য");
} else {
    console.log("সংখ্যাটি 3 এবং 5 উভয় দিয়ে বিভাজ্য নয়");
}

নিচে সবগুলো প্রোগ্রাম function আকারে দেওয়া হলো। এখন তুমি ইনপুট দিলে সরাসরি রেজাল্ট পাবে ✅

1️⃣ দুটি সংখ্যা যোগ
function add(a, b) {
    return a + b;
}

console.log("যোগফল:", add(10, 5));

2️⃣ বিয়োগ, গুণ ও ভাগ
function calculate(a, b) {
    return {
        subtraction: a - b,
        multiplication: a * b,
        division: a / b
    };
}

let result = calculate(10, 5);

console.log("বিয়োগ:", result.subtraction);
console.log("গুণ:", result.multiplication);
console.log("ভাগ:", result.division);

3️⃣ Even না Odd চেক
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(7));

4️⃣ Positive, Negative না Zero
function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumberType(-5));

5️⃣ তিনটি সংখ্যার গড়
function average(a, b, c) {
    return (a + b + c) / 3;
}

console.log("গড়:", average(10, 20, 30));

6️⃣ Celsius থেকে Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log("Fahrenheit:", celsiusToFahrenheit(25));

7️⃣ Rectangle এর Area
function rectangleArea(length, width) {
    return length * width;
}

console.log("Area:", rectangleArea(10, 5));

8️⃣ 3 এবং 5 উভয় দিয়ে divisible কিনা
function isDivisibleBy3And5(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisibleBy3And5(15));

9️⃣ let, const, var এর পার্থক্য
// var (re-declare এবং re-assign করা যায়)
var x = 10;
var x = 20;   // আবার declare করা যায়
x = 30;       // মান পরিবর্তন করা যায়
console.log("var:", x);

// let (re-assign করা যায়, কিন্তু re-declare করা যায় না)
let y = 10;
// let y = 20; ❌ Error হবে
y = 25;       // মান পরিবর্তন করা যায়
console.log("let:", y);

// const (না re-declare, না re-assign)
const z = 10;
// const z = 20; ❌ Error
// z = 30; ❌ Error
console.log("const:", z);


🔎 মূল পার্থক্যঃ

বিষয়	var	let	const
Re-declare	✅	❌	❌
Re-assign	✅	✅	❌
Block Scope	❌	✅	✅
🔟 একটি ভ্যারিয়েবলের type চেক (typeof)
let name = "Hasan";
let age = 25;
let isStudent = true;

console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof isStudent); // boolean

1️⃣1️⃣ String কে Number এ Convert
let str = "123";

let num1 = Number(str);
let num2 = parseInt(str);
let num3 = +str;  // shortcut

console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(num3, typeof num3);

1️⃣2️⃣ Number কে String এ Convert
let num = 456;

let str1 = String(num);
let str2 = num.toString();
let str3 = num + "";  // shortcut

console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(str3, typeof str3);

1️⃣3️⃣ NaN কিভাবে তৈরি হয়

👉 যখন কোনো অবৈধ গাণিতিক অপারেশন হয় তখন NaN তৈরি হয়।

let result1 = "abc" / 2;  // string কে number দিয়ে ভাগ
let result2 = 0 / 0;      // undefined গণিত

console.log(result1); // NaN
console.log(result2); // NaN

console.log(typeof result1); // number


🔎 লক্ষ্য করো: NaN এর type কিন্তু "number"।

14️⃣ বয়স দিয়ে vote দিতে পারবে কিনা চেক
function canVote(age) {
    if (age >= 18) {
        return "ভোট দিতে পারবে";
    } else {
        return "ভোট দিতে পারবে না";
    }
}

console.log(canVote(20));

15️⃣ একটি সংখ্যা 100 থেকে বড় না ছোট চেক
function checkNumber(num) {
    if (num > 100) {
        return "100 এর থেকে বড়";
    } else if (num < 100) {
        return "100 এর থেকে ছোট";
    } else {
        return "সংখ্যাটি 100";
    }
}

console.log(checkNumber(150));

16️⃣ Student এর mark দিয়ে grade বের করা
function getGrade(mark) {
    if (mark >= 80) {
        return "A+";
    } else if (mark >= 70) {
        return "A";
    } else if (mark >= 60) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else if (mark >= 40) {
        return "D";
    } else {
        return "Fail";
    }
}

console.log(getGrade(75));

17️⃣ Leap Year চেক করার প্রোগ্রাম

👉 নিয়ম:

4 দিয়ে বিভাজ্য হতে হবে

কিন্তু 100 দিয়ে বিভাজ্য হলে leap নয়

তবে 400 দিয়ে বিভাজ্য হলে leap

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap Year";
    } else {
        return "Not Leap Year";
    }
}

console.log(isLeapYear(2024));

18️⃣ তিনটি সংখ্যার মধ্যে সবচেয়ে বড়
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log("সবচেয়ে বড় সংখ্যা:", findLargest(10, 25, 15));

19️⃣ Simple Login System (email && password চেক)
function login(email, password) {
    const correctEmail = "admin@gmail.com";
    const correctPassword = "12345";

    if (email === correctEmail && password === correctPassword) {
        return "Login Successful";
    } else {
        return "Invalid Email or Password";
    }
}

console.log(login("admin@gmail.com", "12345"));

20️⃣ Ternary Operator দিয়ে Even/Odd চেক
function checkEvenOdd(number) {
    return (number % 2 === 0) ? "Even" : "Odd";
}

console.log(checkEvenOdd(8));


21️⃣ 1 থেকে 10 পর্যন্ত সংখ্যা print
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

22️⃣ 1 থেকে 50 পর্যন্ত even সংখ্যা print
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


👉 শর্টকাট উপায়:

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

23️⃣ 10 থেকে 1 পর্যন্ত reverse loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

24️⃣ একটি সংখ্যার নামতা print
function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

printMultiplicationTable(5);

25️⃣ 1–100 এর মধ্যে 3 দিয়ে divisible সংখ্যা
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

26️⃣ Loop ব্যবহার করে sum বের করা (১ থেকে ১০ পর্যন্ত)
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("মোট যোগফল:", sum);

27️⃣ break ব্যবহার করে loop থামানো
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // ৫ এ পৌঁছালে loop বন্ধ হবে
    }
    console.log(i);
}

✅ ১ থেকে ১০ পর্যন্ত সব নামতা
for (let n = 1; n <= 10; n++) {
  console.log(`--- ${n} এর নামতা ---`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

নিচে ২১–২৭ সবগুলো function ব্যবহার করে দেখানো হলো।

21️⃣ 1 থেকে 10 পর্যন্ত সংখ্যা print
function printOneToTen() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

printOneToTen();

22️⃣ 1 থেকে 50 পর্যন্ত even সংখ্যা print
function printEvenToFifty() {
    for (let i = 2; i <= 50; i += 2) {
        console.log(i);
    }
}

printEvenToFifty();

23️⃣ 10 থেকে 1 পর্যন্ত reverse loop
function reverseTenToOne() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

reverseTenToOne();

24️⃣ একটি সংখ্যার নামতা print
function printTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

printTable(7);

25️⃣ 1–100 এর মধ্যে 3 দিয়ে divisible সংখ্যা
function divisibleByThree() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

divisibleByThree();

26️⃣ Loop ব্যবহার করে sum বের করা
function calculateSum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log("মোট যোগফল:", calculateSum(10));

27️⃣ break ব্যবহার করে loop থামানো
function stopAtFive() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }
}

stopAtFive();


28️⃣ একটি array তৈরি করে সব element print
function printArray() {
    let arr = [10, 20, 30, 40, 50];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray();

29️⃣ array এর length বের করা
function getArrayLength(arr) {
    return arr.length;
}

console.log(getArrayLength([1, 2, 3, 4, 5]));

30️⃣ প্রথম ও শেষ element বের করা
function firstAndLast(arr) {
    let first = arr[0];
    let last = arr[arr.length - 1];

    return { first, last };
}

console.log(firstAndLast([10, 20, 30, 40]));

31️⃣ array এর সব সংখ্যার যোগফল
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

32️⃣ array থেকে even সংখ্যা বের করা
function getEvenNumbers(arr) {
    let even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
    }

    return even;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

33️⃣ array এর মধ্যে largest number
function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(findLargest([5, 12, 8, 20, 3]));

34️⃣ array reverse
function reverseArray(arr) {
    return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4]));


👉 Loop দিয়ে করলে:

function reverseWithLoop(arr) {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

35️⃣ array sort (numeric)

⚠️ মনে রাখবে: default sort string অনুযায়ী কাজ করে

function sortNumeric(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

console.log(sortNumeric([40, 10, 5, 25]));

36️⃣ duplicate remove
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


👉 Loop দিয়ে করলে:

function removeDuplicatesLoop(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

28️⃣ Array তৈরি করে সব element print
✅ সাধারণভাবে
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

✅ Function সহ
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray([10, 20, 30, 40, 50]);

29️⃣ Array এর length বের করা
✅ সাধারণভাবে
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);

✅ Function সহ
function getLength(arr) {
    return arr.length;
}

console.log(getLength([1, 2, 3, 4, 5]));

30️⃣ প্রথম ও শেষ element বের করা
✅ সাধারণভাবে
let numbers = [5, 10, 15, 20];

console.log("প্রথম:", numbers[0]);
console.log("শেষ:", numbers[numbers.length - 1]);

✅ Function সহ
function firstAndLast(arr) {
    return {
        first: arr[0],
        last: arr[arr.length - 1]
    };
}

console.log(firstAndLast([5, 10, 15, 20]));

31️⃣ Array এর সব সংখ্যার যোগফল
✅ সাধারণভাবে
let numbers = [10, 20, 30];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("যোগফল:", sum);

✅ Function সহ
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([10, 20, 30]));

32️⃣ Even সংখ্যাগুলো বের করা
✅ সাধারণভাবে
let numbers = [1, 2, 3, 4, 5, 6];

for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

✅ Function সহ
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

33️⃣ Largest number বের করা
✅ সাধারণভাবে
let numbers = [10, 50, 25, 80, 15];
let largest = numbers[0];

for (let num of numbers) {
    if (num > largest) {
        largest = num;
    }
}

console.log("সবচেয়ে বড়:", largest);

✅ Function সহ
function findLargest(arr) {
    return Math.max(...arr);
}

console.log(findLargest([10, 50, 25, 80, 15]));

34️⃣ Array reverse
✅ সাধারণভাবে
let numbers = [1, 2, 3, 4];
numbers.reverse();
console.log(numbers);

✅ Function সহ
function reverseArray(arr) {
    return [...arr].reverse(); // original array পরিবর্তন হবে না
}

console.log(reverseArray([1, 2, 3, 4]));

35️⃣ Numeric sort

⚠️ sort() default string হিসেবে sort করে, তাই compare function দরকার।

✅ সাধারণভাবে
let numbers = [10, 5, 40, 25];
numbers.sort((a, b) => a - b);
console.log(numbers);

✅ Function সহ
function sortNumeric(arr) {
    return [...arr].sort((a, b) => a - b);
}

console.log(sortNumeric([10, 5, 40, 25]));

36️⃣ Duplicate remove
✅ সাধারণভাবে
let numbers = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(numbers)];
console.log(unique);

✅ Function সহ
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


37️⃣ String এর length বের করা
✅ (ক) সাধারণভাবে
let text = "Hello World";
console.log(text.length);


Output:

11


ব্যাখ্যা:
length প্রপার্টি string এর মোট অক্ষর সংখ্যা গণনা করে (space সহ)।

✅ (খ) Function সহ
function getStringLength(str) {
    return str.length;
}

console.log(getStringLength("JavaScript"));


Output:

10

38️⃣ String কে Uppercase করা
✅ (ক) সাধারণভাবে
let text = "hello";
console.log(text.toUpperCase());


Output:

HELLO


ব্যাখ্যা:
toUpperCase() সব ছোট হাতের অক্ষরকে বড় হাতের অক্ষরে রূপান্তর করে।

✅ (খ) Function সহ
function toUpper(str) {
    return str.toUpperCase();
}

console.log(toUpper("bangladesh"));


Output:

BANGLADESH

39️⃣ String এর মধ্যে নির্দিষ্ট word আছে কিনা চেক
✅ (ক) সাধারণভাবে
let sentence = "I love JavaScript";
console.log(sentence.includes("JavaScript"));


Output:

true


ব্যাখ্যা:
includes() নির্দিষ্ট শব্দ থাকলে true রিটার্ন করে।

✅ (খ) Function সহ
function containsWord(str, word) {
    return str.includes(word);
}

console.log(containsWord("I love coding", "love"));


Output:

true

40️⃣ Sentence থেকে সব word আলাদা করা
✅ (ক) সাধারণভাবে
let sentence = "I love JavaScript";
let words = sentence.split(" ");
console.log(words);


Output:

["I", "love", "JavaScript"]


ব্যাখ্যা:
split(" ") স্পেস অনুযায়ী string কে array তে ভাগ করে।

✅ (খ) Function সহ
function splitSentence(str) {
    return str.split(" ");
}

console.log(splitSentence("Learning JavaScript is fun"));


Output:

["Learning", "JavaScript", "is", "fun"]

41️⃣ String Reverse করা
✅ (ক) সাধারণভাবে
let text = "hello";
let reversed = text.split("").reverse().join("");
console.log(reversed);


Output:

olleh


ব্যাখ্যা:

split("") → অক্ষর আলাদা করে array বানায়

reverse() → উল্টায়

join("") → আবার string বানায়

✅ (খ) Function সহ
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));


Output:

tpircSavaJ

42️⃣ String Palindrome কিনা চেক

👉 Palindrome = সামনে ও পিছন থেকে একই রকম

✅ (ক) সাধারণভাবে
let text = "madam";
let reversed = text.split("").reverse().join("");

console.log(text === reversed);


Output:

true

✅ (খ) Function সহ
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));


Output:

true
false


ব্যাখ্যা:
মূল string ও reverse string এক হলে সেটি palindrome।

43️⃣ Student info দিয়ে একটি Object তৈরি
✅ (ক) সাধারণভাবে
let student = {
    name: "Rahim",
    age: 20,
    grade: "A",
    isStudent: true
};

console.log(student);


Output:

{ name: "Rahim", age: 20, grade: "A", isStudent: true }


ব্যাখ্যা:
Object {} এর ভিতরে key:value আকারে তথ্য রাখা হয়।

✅ (খ) Function সহ
function createStudent(name, age, grade) {
    return {
        name: name,
        age: age,
        grade: grade
    };
}

console.log(createStudent("Karim", 22, "B"));

44️⃣ Object থেকে সব key print
✅ (ক) সাধারণভাবে
let student = {
    name: "Rahim",
    age: 20,
    grade: "A"
};

console.log(Object.keys(student));


Output:

["name", "age", "grade"]


ব্যাখ্যা:
Object.keys() সব property নাম (key) array আকারে দেয়।

✅ (খ) Function সহ
function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys({a:1, b:2, c:3}));

45️⃣ Object এর সব value print
✅ (ক) সাধারণভাবে
let student = {
    name: "Rahim",
    age: 20,
    grade: "A"
};

console.log(Object.values(student));


Output:

["Rahim", 20, "A"]


ব্যাখ্যা:
Object.values() সব value array আকারে দেয়।

✅ (খ) Function সহ
function getValues(obj) {
    return Object.values(obj);
}

console.log(getValues({x:10, y:20}));

46️⃣ নির্দিষ্ট property আছে কিনা চেক
✅ (ক) সাধারণভাবে
let student = {
    name: "Rahim",
    age: 20
};

console.log("name" in student);  // true
console.log("grade" in student); // false


ব্যাখ্যা:
in operator দিয়ে property আছে কিনা চেক করা যায়।

✅ (খ) Function সহ
function hasProperty(obj, prop) {
    return prop in obj;
}

console.log(hasProperty({a:1, b:2}, "a"));
console.log(hasProperty({a:1, b:2}, "c"));

47️⃣ Object এর উপর loop চালানো
✅ (ক) সাধারণভাবে (for...in)
let student = {
    name: "Rahim",
    age: 20,
    grade: "A"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}


Output:

name: Rahim
age: 20
grade: A


ব্যাখ্যা:
for...in loop দিয়ে object এর প্রতিটি key এর উপর loop চালানো যায়।

✅ (খ) Function সহ
function loopObject(obj) {
    for (let key in obj) {
        console.log(key + ":", obj[key]);
    }
}

loopObject({brand: "Toyota", model: "Corolla", year: 2022});


🧱 G. Objects (43–47) — Full Solution Guide

ধরা যাক আমাদের একটি student object আছে:

const student = {
  name: "Rahim",
  age: 15,
  class: 9,
  section: "A",
  marks: 82
};

✅ 43. একটি object তৈরি করো student info দিয়ে
👉 (ক) সাধারণভাবে
const student = {
  name: "Rahim",
  age: 15,
  class: 9,
  section: "A",
  marks: 82
};

console.log(student);

🖥 Output:
{ name: 'Rahim', age: 15, class: 9, section: 'A', marks: 82 }

📘 ব্যাখ্যা:

{} দিয়ে object বানানো হয়

key:value format থাকে

এখানে student এর তথ্য রাখা হয়েছে

👉 (খ) Function ব্যবহার করে
function createStudent(name, age, className, section, marks) {
  return {
    name: name,
    age: age,
    class: className,
    section: section,
    marks: marks
  };
}

const s1 = createStudent("Karim", 16, 10, "B", 90);
console.log(s1);

🖥 Output:
{ name: 'Karim', age: 16, class: 10, section: 'B', marks: 90 }

✅ 44. object থেকে সব key print করো
👉 (ক) সাধারণভাবে
const keys = Object.keys(student);
console.log(keys);

🖥 Output:
[ 'name', 'age', 'class', 'section', 'marks' ]

📘 ব্যাখ্যা:

Object.keys() সব property name array আকারে দেয়

👉 (খ) Function সহ
function printKeys(obj) {
  console.log(Object.keys(obj));
}

printKeys(student);

✅ 45. object এর সব value print করো
👉 (ক) সাধারণভাবে
const values = Object.values(student);
console.log(values);

🖥 Output:
[ 'Rahim', 15, 9, 'A', 82 ]

👉 (খ) Function সহ
function printValues(obj) {
  console.log(Object.values(obj));
}

printValues(student);

✅ 46. object এর মধ্যে নির্দিষ্ট property আছে কিনা চেক করো
👉 (ক) সাধারণভাবে
✔️ in operator
console.log("age" in student);
console.log("roll" in student);

🖥 Output:
true
false

✔️ hasOwnProperty()
console.log(student.hasOwnProperty("class"));
console.log(student.hasOwnProperty("grade"));

👉 (খ) Function সহ
function hasProperty(obj, prop) {
  return prop in obj;
}

console.log(hasProperty(student, "marks"));
console.log(hasProperty(student, "email"));

✅ 47. object এর উপর loop চালাও
👉 (ক) সাধারণভাবে
✔️ for...in loop
for (let key in student) {
  console.log(key, "=>", student[key]);
}

🖥 Output:
name => Rahim  
age => 15  
class => 9  
section => A  
marks => 82

✔️ Object.entries()
Object.entries(student).forEach(([key, value]) => {
  console.log(key, value);
});

👉 (খ) Function সহ
function loopObject(obj) {
  for (let key in obj) {
    console.log(key + ":", obj[key]);
  }
}

loopObject(student);

🎯 সংক্ষেপে শেখা হলো:
কাজ	Method
Object তৈরি	{}
Key বের	Object.keys()
Value বের	Object.values()
Property আছে কিনা	in, hasOwnProperty()
Loop	for...in, Object.entries()

48️⃣ দুটি সংখ্যার যোগফল বের করার function
function add(a, b) {
    return a + b;
}

console.log(add(10, 5));


Output:

15


ব্যাখ্যা:
a এবং b দুইটি parameter। return a + b যোগফল রিটার্ন করে।

49️⃣ Even/Odd চেক করার function
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(7));
console.log(checkEvenOdd(8));


Output:

Odd
Even


ব্যাখ্যা:
সংখ্যা 2 দিয়ে ভাগ করলে ভাগশেষ 0 হলে Even, না হলে Odd।

50️⃣ Array এর সব সংখ্যার sum বের করার function
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([10, 20, 30, 40]));


Output:

100


ব্যাখ্যা:
Loop ব্যবহার করে প্রতিটি সংখ্যা যোগ করা হয়েছে।

51️⃣ String reverse করার function
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));


Output:

olleh


ব্যাখ্যা:

split("") → অক্ষর আলাদা

reverse() → উল্টানো

join("") → আবার string বানানো

52️⃣ Leap Year Check Function
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap Year";
    } else {
        return "Not Leap Year";
    }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));


Output:

Leap Year
Not Leap Year


ব্যাখ্যা:
Leap year এর নিয়ম অনুযায়ী condition ব্যবহার করা হয়েছে।

53️⃣ Array থেকে Largest Number বের করার function
function findLargest(arr) {
    let largest = arr[0];

    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
}

console.log(findLargest([10, 50, 25, 80, 15]));


Output:

80


ব্যাখ্যা:
প্রথম সংখ্যাকে বড় ধরে নিয়ে তুলনা করা হয়েছে।

54️⃣ Unit Convert Function (Inch → Feet)

👉 1 foot = 12 inches

function inchToFeet(inch) {
    return inch / 12;
}

console.log(inchToFeet(24));


Output:

2


ব্যাখ্যা:
ইঞ্চিকে ১২ দিয়ে ভাগ করলে ফুট পাওয়া যায়।

55️⃣ Calculator Function (add, sub, mul, div)
function calculator(a, b, operator) {

    if (operator === "add") {
        return a + b;
    } 
    else if (operator === "sub") {
        return a - b;
    } 
    else if (operator === "mul") {
        return a * b;
    } 
    else if (operator === "div") {
        return a / b;
    } 
    else {
        return "Invalid Operator";
    }
}

console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "mul"));


Output:

15
50


ব্যাখ্যা:
তৃতীয় parameter দিয়ে অপারেশন নির্ধারণ করা হয়েছে।

56️⃣ Array এর Average বের করা
function getAverage(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum / arr.length;
}

console.log(getAverage([10, 20, 30, 40]));


Output:

25


ব্যাখ্যা:
প্রথমে সব সংখ্যার যোগফল বের করা হয়েছে, তারপর মোট সংখ্যার উপর ভাগ করা হয়েছে।

57️⃣ Array থেকে শুধু Unique Value রাখা
function getUniqueValues(arr) {
    return [...new Set(arr)];
}

console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5]));


Output:

[1, 2, 3, 4, 5]


ব্যাখ্যা:
Set duplicate মান বাদ দেয়। তারপর ... দিয়ে আবার array বানানো হয়েছে।

58️⃣ Object এর ভিতরে Nested Object Access
function getStudentCity(student) {
    return student.address.city;
}

let student = {
    name: "Rahim",
    age: 20,
    address: {
        city: "Dhaka",
        zip: 1207
    }
};

console.log(getStudentCity(student));


Output:

Dhaka


ব্যাখ্যা:
student.address.city দিয়ে nested object এর ভিতরের property access করা হয়েছে।

59️⃣ Function এর ভিতরে Function ব্যবহার (Nested Function)
function outerFunction(a, b) {

    function add(x, y) {
        return x + y;
    }

    return add(a, b);
}

console.log(outerFunction(10, 5));


Output:

15


ব্যাখ্যা:
add() function টি outerFunction() এর ভিতরে তৈরি করা হয়েছে এবং ভিতরেই ব্যবহার করা হয়েছে।

60️⃣ User Input Validate করা (Number কিনা চেক)
function isValidNumber(input) {
    if (isNaN(input)) {
        return "Invalid Number";
    } else {
        return "Valid Number";
    }
}

console.log(isValidNumber(25));
console.log(isValidNumber("abc"));


Output:

Valid Number
Invalid Number


ব্যাখ্যা:
isNaN() চেক করে মানটি number না হলে true রিটার্ন করে।