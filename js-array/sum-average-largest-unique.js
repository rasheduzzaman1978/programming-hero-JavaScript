// Array থেকে সংখ্যাগুলোর যোগ, গড়, বৃহত্তম ও ইউনিক সংখ্যা বের করার ফাংশন
function analyzeArray(arr){
  let largest = arr[0];
  let sum = 0;
  let unique = [];
  
  for (let num of arr){
    if (!unique.includes(num)){
      unique.push(num);
    }

    sum += num;

    if(num > largest){
      largest = num;
    }
  }

  let average = sum / arr.length;
  
  return {
    sum,
    average,
    largest,
    unique
  };
}

console.log('Array- 1:', analyzeArray([10, 85, 45, 18, 68]));
console.log('Array- 2:', analyzeArray([10, 85, 45, 85, 10, 85, 18, 68]));
