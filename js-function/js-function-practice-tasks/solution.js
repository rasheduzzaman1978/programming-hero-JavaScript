// Task-1:
function multiply (a, b, c, d) {
  return a * b * c * d;
}

const nums = multiply(4, 5, 2, 3);
console.log(nums);

// Task-2:

function evenMultiplyDivide(numbers) {
     if(numbers % 2 === 0) {
      numbers = numbers / 2;
    } else {
      if(numbers % 2 !== 0) {
        numbers = numbers * 2;
      }
    } return numbers;
  } 


const numb = evenMultiplyDivide(9);
console.log(numb);

// Task-3:

function make_avg1(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  console.log(arr);
  return sum / arr.length;
}

console.log('Average is:', make_avg1([10, 20, 30, 50]).toFixed(2));

// or 
function make_avg(numbers, size) {
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += numbers[i];
  } 
  console.log(numbers);
  return sum / size;
}

const array = [10, 20, 30, 40];
const result = make_avg(array, array.length);

console.log('Average is:', result);

// or 

function make_avg(arr) {
  // যদি array খালি হয়
  if (arr.length === 0) {
    return 0;
  }

  // সব সংখ্যার যোগফল বের করা
  const sum = arr.reduce((sum, num) => sum + num, 0);

  // গড় বের করা
  const average = sum / arr.length;

  return average;
}

// Example 1
const numbers1 = [10, 20, 30, 40];
const result1 = make_avg(numbers1);
console.log("Average is:", result1);

// Example 2 (Empty array)
const numbers2 = [];
const result2 = make_avg(numbers2);
console.log("Average is:", result2);


// or 
function make_avg(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

const numbers3 = [20, 30, 40, 60];
const result3 = make_avg(numbers3);
console.log('Average is:', result3);

// Task-4:

function count_zero(binaryString) {
  let count = 0;
  for (let char of binaryString) {
    if (char === '0') {
      count++;
    }
  }
  return count;
}

const result4 = count_zero('1010010010');
console.log('Number of zeros:', result4)

// or 
function count_zero(binaryString) {
  return binaryString.split('0').length - 1;
}

const result5 = count_zero('10100001010010');
console.log('Number of zeros:', result5);

// Task-5:


function isEven(number) {
  if (number % 2 === 0) {
    // return `${number} is a even number.`;
    return 'Even';
  } else {
    // return `${number} is a odd number.`;
    return 'Odd';
  }
}

const evenNum = isEven(5);
console.log(evenNum);

// Or 
function odd_even(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Function call 
const result6 = odd_even(24);
console.log(result6);

console.log(odd_even(29));