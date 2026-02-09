// ✅ 1️⃣ Sum বের করার Function
function getSum(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}

console.log('Total sum of array:', getSum([10, 85, 45, 18, 68]));