function isValidNumber(input) {
   if (isNaN(input)) {
    return 'Invalid Number';
   } else {
    return 'Valid Number'
   }
};

console.log(isValidNumber(25));
console.log(isValidNumber('abc'));