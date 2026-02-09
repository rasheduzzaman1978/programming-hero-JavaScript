function sumArray (arr){
  let largest = 0;
  let sum = 0;

  for(let num of arr) {
    sum +=num;
   
    if (num > largest) {
    largest = num;
  }
  }
   let average = sum / arr.length;
  return {sum, largest, average};
}
const array = sumArray([10, 20, 30, 40]);
console.log(array.sum);
console.log(array.largest);
console.log(array.largest);
console.log(array.average);

function calculator (a, b, operator) {
  if(operator === 'add'){
    return a + b;
  }else if (operator === 'sub'){
    return a - b;
  } else if (operator === 'mul') {
    return a * b;
  } else if (operator === 'div') {
    if( b === 0) {
      return 'Please input valid number';
    }
      return a / b;
  } else {
    return 'Invalid operation';
  }
}

console.log(calculator(10, 5, 'add'));
console.log(calculator(10, 5, 'sub'));
console.log(calculator(10, 5, 'mul'));
console.log(calculator(10, 0, 'div'));