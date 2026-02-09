// ✅ 3️⃣ Largest Number বের করার Function

function getLargest(arr) {
  let largest = arr[0];

  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}

console.log('Largest:', getLargest([10, 85, 45, 18, 68]));