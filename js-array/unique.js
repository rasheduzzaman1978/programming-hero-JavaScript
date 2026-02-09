// ✅ 4️⃣ Unique Numbers বের করার Function

function getUnique(arr) {
  let unique = [];

  for (let num of arr) {
    if(!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}

console.log('Unique:', getUnique([10, 85, 45, 85, 10, 85, 18, 68]));