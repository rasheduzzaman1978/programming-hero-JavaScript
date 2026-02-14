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

// Array থেকে শুধু Unique Value রাখা
function getUniqueValues(arr) {
    return [...new Set(arr)];
}

console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5]));
