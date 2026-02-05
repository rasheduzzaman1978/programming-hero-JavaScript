/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let i = 55; i <= 85; i++) {
  // যদি সংখ্যা even হয়, তাহলে skip 
  if (i % 2 === 0) {
    continue;
  }


// যদি সংখ্যা 5 দিয়ে বিভাজ্য হয়, তাহলে skip

if (i % 5 === 0) {
  continue;
}

console.log(i);

}

// or
for (let i = 55; i <= 85; i++) {
  if (i % 2 !== 0 && i % 5 !== 0) {
    console.log(i);
  }
}


// or

for (let i = 55; i <= 85; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    continue;
  }
  
  console.log(i);
}
