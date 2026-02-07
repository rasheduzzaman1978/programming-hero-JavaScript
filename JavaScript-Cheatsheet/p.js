function sumOfArray(array) {
  
  let sum = 0;
  for (let num of array){
    if(num %2 === 0){
      console.log(num);
    sum += num;
    }
    // sum += num;
  }
  return sum;
}

console.log(sumOfArray([10, 20, 21, 35, 48]));

function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

let numbers = [10, 20, 21, 35, 48];
let largest = numbers[0];

for (let num of numbers){
  if(num > largest){
    largest = num;
  }
}
console.log('Largest:', largest);

function findLargest(arr){
  return Math.max(...arr);
}

console.log('Largest:', findLargest([10, 20, 201, 35, 48]));

let numbers2 = [10, 20, 21, 35, 48];
let smallest = numbers2[0];

for (let num of numbers){
  if(num < smallest){
    smallest = num;
  }
}
console.log('Smallest:', smallest);

function findSmallest(arr){
  return Math.min(...arr);
}

console.log('Smallest:', findSmallest([10, 20, 201, 5, 48]));

let m = [10, 20, 201, 5, 48];
console.log(m);
console.log(m.reverse());
m.sort((a, b) => a - b);
// m.sort((a, b) => b - a);
// console.log(m);
console.log(m);

let n = [10, 20, 201, 20, 10, 5, 35, 48];

let unique = [];
for (let num of n) {
  if(!unique.includes(num)){
    unique.push(num);
    unique.sort((a, b) => a - b);
  }
}
console.log(unique);