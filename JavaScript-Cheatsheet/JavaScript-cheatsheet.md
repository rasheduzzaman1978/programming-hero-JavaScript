 📘 JavaScript Cheatsheet 
🎯 Milestone 3: Hello JavaScript

🔢 Math Basics (Programming-এর Foundation)
প্রোগ্রামিং মানেই logic + calculation।
 ওয়েব অ্যাপ, game, e-commerce cart, result calculation—সব জায়গায় math লাগে।
➕ Arithmetic Operators (গণিত অপারেটর)
Operator
কী করে
Example
+
যোগ
5 + 3 = 8
-
বিয়োগ
5 - 3 = 2
*
গুণ
5 * 3 = 15
/
ভাগ
6 / 2 = 3
%
ভাগশেষ
10 % 3 = 1

📌 Modulus (%) কেন দরকার?
even / odd বের করতে


loop-এ pattern বানাতে


time calculation করতে


10 % 2 === 0 // even


📦 Variables (Data রাখার জায়গা)
Variable হলো ডেটা রাখার নাম দেওয়া বাক্স।
let age = 21;

Variable বানাতে লাগে ৫টি জিনিস
keyword → let / const / var


variable name


assign operator → =


value


semicolon ;


let / const / var পার্থক্য
Keyword
Scope
Reassign
ব্যবহার
var
function
✅
পুরোনো
let
block
✅
সাধারণ
const
block
❌
fixed value

📌 Best Practice
default → const


change দরকার → let


var avoid করো



🧠 Data Types 
1️⃣ Number
10, 3.14, -5

📌 JavaScript-এ সব number একই টাইপ
 👉 64-bit floating point
Special number:
NaN → ভুল calculation


Infinity → limit ছাড়ালে



2️⃣ String (Text)
"Hello"
'JavaScript'

📌 String সবসময় quote এর ভেতরে থাকে
 📌 String immutable (পরিবর্তন করা যায় না)

3️⃣ Boolean
true
false

📌 Decision / condition-এ খুব গুরুত্বপূর্ণ

🏷️ Variable Naming Rules
✔ নাম meaningful হবে
 ✔ camelCase ব্যবহার করবে
 ✔ letter বা _ দিয়ে শুরু
 ❌ সংখ্যা দিয়ে শুরু নয়
 ❌ reserved keyword নয়
let userAge;   // correct
let 2age;     // wrong


➗ Operators
Arithmetic Operators
+, -, *, /, %

Shorthand Operators
x += 5; // x = x + 5
x -= 2;
x++;
x--;

📌 Code ছোট ও clean হয়

🔀 Conditionals (Decision Making)
Condition মানে যদি এটা হয়, তাহলে এটা করো

Comparison Operators
Operator
কাজ
> <
বড় / ছোট
>= <=
বড় বা সমান
==
শুধু value check
===
value + type
!= !==
not equal

📌 সবসময় === ব্যবহার করো

if-else Structure
if(condition){
  // true হলে
}else{
  // false হলে
}

📌 Program-কে decision নিতে সাহায্য করে

Logical Operators
Operator
অর্থ
&&
সব শর্ত true
`


!
উল্টো ফল


Ternary Operator (Short if-else)
condition ? result1 : result2

📌 ছোট condition-এর জন্য best

🔁 Loops (বারবার কাজ করানো)
Loop মানে একই কাজ বারবার করা

for Loop
for(let i=0; i<5; i++){
  console.log(i);
}

📌 জানি কতবার চলবে → for

while Loop
while(condition){
}

📌 আগে condition, পরে run

do-while Loop
do{
}while(condition)

📌 একবার হলেও চলবেই

break & continue
break → loop থামায়


continue → skip করে



📚 Arrays (সবচেয়ে Important Topic)
Array = এক ভ্যারিয়েবলে অনেক ডেটা
let numbers = [10, 20, 30];

📌 index শুরু হয় 0 থেকে

Basic Operations
arr[0]        // access
arr.length   // size
arr[1] = 50  // modify


Add / Remove Methods
Method
কী করে
push()
শেষে যোগ
pop()
শেষ remove
unshift()
শুরুতে যোগ
shift()
শুরু remove


Search / Check Methods
Method
কাজ
includes()
আছে কিনা
indexOf()
index
Array.isArray()
array কিনা


Transform / Copy
Method
কাজ
slice()
copy
splice()
add/remove
concat()
merge
reverse()
উল্টো
sort()
সাজানো

📌 Numeric sort:
arr.sort((a,b)=>a-b);


Array Loop Methods
Method
ব্যবহার
forEach()
loop
map()
নতুন array
filter()
শর্ত
find()
প্রথম match
reduce()
sum / total


🔤 Strings (Text নিয়ে কাজ)
📌 String immutable → direct change করা যায় না

Common String Methods
Method
কাজ
toLowerCase()
ছোট হাত
toUpperCase()
বড় হাত
trim()
space remove
slice()
কাটে
split()
array
includes()
আছে কিনা
replace()
বদলায়
charAt()
character


Reverse String
str.split('').reverse().join('')

📌 interview-এ popular question

🧱 Objects (Real-life Data)
Object = key : value pair
let person = {
  name: "Sami",
  age: 21
};


Access & Modify
person.name
person["age"]
person.city = "Dhaka";


Object Methods
Method
কাজ
Object.keys()
সব key
Object.values()
সব value
Object.entries()
key+value


Object Loop
for(let key in obj){}


🔢 Math Object (Built-in Calculator)
Method
কাজ
abs()
absolute
round()
round
ceil()
উপরে
floor()
নিচে
random()
0-1
max()
বড়
min()
ছোট
pow()
power
sqrt()
root


🧩 Functions (Reusable Code)
Function মানে একবার লিখে বারবার ব্যবহার
function add(a,b){
  return a+b;
}

📌 Clean code
 📌 Reusability
 📌 Interview essential

🧪 50+ JavaScript Practice Problems

🔢 A. Math & Basic Logic (1–8)
দুটি সংখ্যা যোগ করার একটি প্রোগ্রাম লেখো


দুটি সংখ্যার বিয়োগ, গুণ ও ভাগ বের করো


একটি সংখ্যা even না odd চেক করো


একটি সংখ্যা positive, negative না zero চেক করো


তিনটি সংখ্যার গড় (average) বের করো


Celsius থেকে Fahrenheit convert করো


Rectangle এর area বের করো


একটি সংখ্যা 3 এবং 5 উভয় দিয়ে divisible কিনা চেক করো



📦 B. Variable & Data Type (9–13)
let, const, var দিয়ে একই ভ্যারিয়েবল declare করে পার্থক্য দেখাও


একটি ভ্যারিয়েবলের type চেক করো (typeof)


string কে number এ convert করো


number কে string এ convert করো


NaN কিভাবে তৈরি হয় তার উদাহরণ দেখাও



🔀 C. Conditionals (14–20)
বয়স দিয়ে vote দিতে পারবে কিনা চেক করো


একটি সংখ্যা বড় না ছোট 100 থেকে চেক করো


Student এর mark দিয়ে grade বের করো


Leap year চেক করার প্রোগ্রাম লেখো


তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টা বের করো


Login system বানাও (email && password চেক)


Ternary operator দিয়ে even/odd চেক করো



🔁 D. Loops (21–27)
1 থেকে 10 পর্যন্ত সংখ্যা print করো


1 থেকে 50 পর্যন্ত even সংখ্যা print করো


10 থেকে 1 পর্যন্ত reverse loop চালাও


একটি সংখ্যার নামতা print করো


1–100 এর মধ্যে 3 দিয়ে divisible সংখ্যা বের করো


loop ব্যবহার করে sum বের করো


break ব্যবহার করে loop থামাও



📚 E. Arrays (28–36)
একটি array তৈরি করে সব element print করো


array এর length বের করো


array থেকে প্রথম ও শেষ element বের করো


array এর সব সংখ্যার যোগফল বের করো


array থেকে even সংখ্যাগুলো বের করো


array এর মধ্যে largest number বের করো


array reverse করো


array sort করো (numeric)


array থেকে duplicate remove করো



🔤 F. Strings (37–42)
একটি string এর length বের করো


string কে uppercase করো


string এর মধ্যে নির্দিষ্ট word আছে কিনা চেক করো


একটি sentence থেকে সব word আলাদা করো


string reverse করো


string palindrome কিনা চেক করো



🧱 G. Objects (43–47)
একটি object তৈরি করো student info দিয়ে


object থেকে সব key print করো


object এর সব value print করো


object এর মধ্যে নির্দিষ্ট property আছে কিনা চেক করো


object এর উপর loop চালাও



🧩 H. Functions (48–55)
দুটি সংখ্যার যোগফল বের করার function লেখো


even/odd চেক করার function লেখো


array এর সব সংখ্যার sum বের করার function লেখো


string reverse করার function লেখো


leap year check function লেখো


array থেকে largest number বের করার function লেখো


unit convert করার function লেখো (inch → feet)


calculator function বানাও (add, sub, mul, div)



⭐ Bonus Challenges (56–60)
array এর average বের করো


array থেকে শুধু unique value রাখো


object এর ভিতরে nested object access করো


function এর ভিতরে function ব্যবহার করো


user input validate করো (number কিনা চেক)



🎯 How Students Should Practice- Guideline
✔ আগে নিজে চিন্তা করো
 ✔ problem বুঝে ছোট অংশে ভাগ করো
 ✔ console.log দিয়ে output check করো
 ✔ error হলে ভয় পেও না
 ✔ প্রতিদিন কমপক্ষে ৫টা solve করো


