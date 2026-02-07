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