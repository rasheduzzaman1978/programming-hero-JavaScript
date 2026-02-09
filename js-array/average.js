// ✅ 2️⃣ Average বের করার Function
function getaverage(arr) {
  let sum = 0;
  
  for (let num of arr) {
    sum += num;
  }
  
  let average = sum / arr.length;
  return average;
}

console.log('Average:', getaverage(([10, 85, 45, 18, 68])));