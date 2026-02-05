
function multiply (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Please provide a number";
  }
  const mult = a * b;
  return mult;
}

const result = multiply (5, 'ten');
console.log(result);

function fullName (first, second) {
  if(typeof first !== 'string') {
    return 'First name should be a string';
  } else if (typeof second !== 'string') {
    return 'Second name should be a string';
  }

  const full = first + ' ' + second;
  return full;
}

const full = fullName ('Sajid', 3);
console.log(full);

function getPrice(product) {
  if (typeof product !== 'object') {
    return 'Please provide an object';
  }
  const price = product.price;
  return price;
}

// const price = getPrice({name: 'Tooth Paste', price: 200, color: 'green'});
const price = getPrice(5);
console.log('Price:', price);

function getSecond(numbers) {
  if (Array.isArray(numbers) === false) {
    return 'Please provide an array';
  }
  const second = numbers[1];
  return second;
}

const second = getSecond ([25, 30, 54]);
console.log(second);