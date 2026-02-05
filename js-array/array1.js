let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruits[2]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
fruits.push('mango');
console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);

// Total Fruits
console.log(fruits);
// Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

// Problem- 1: Access the first fruit
let firstFruit = fruits[0];
console.log(firstFruit);
// Expected output: apple

// Problem- 2: Access the last fruit
let lastFruit = fruits[fruits.length - 1];
console.log(lastFruit);
// Expected output: elderberry

// Find the index of 'cherry'

let cherryIndex = fruits.indexOf('cherry'); 
console.log(cherryIndex);
// Expected output: 2

// Problem- 3: Add a new fruit 'fig' to the end of the array
fruits.push('fig');
console.log(fruits);
// Expected output: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']
// Problem- 4: Remove the first fruit from the array
fruits.shift();
console.log(fruits);  
// Expected output: ['banana', 'cherry', 'date', 'elderberry', 'fig']

// Problem- 5: Find the length of the array
let fruitsLength = fruits.length;
console.log(fruitsLength);
// Expected output: 5
// Problem- 6: Check if 'date' is in the array
let hasDate = fruits.includes('date');
console.log(hasDate);
// Expected output: true
// Problem- 7: Create a new array with the first three fruits
let firstThreeFruits = fruits.slice(0, 3);
console.log(firstThreeFruits);
// Expected output: ['banana', 'cherry', 'date']
// Problem- 8: Replace 'elderberry' with 'grape'
let elderberryIndex = fruits.indexOf('elderberry');
if (elderberryIndex !== -1) {
    fruits[elderberryIndex] = 'grape';
}
console.log(fruits);
// Expected output: ['banana', 'cherry', 'date', 'grape', 'fig']
// Problem- 9: Sort the array in alphabetical order
fruits.sort();
console.log(fruits);
// Expected output: ['banana', 'cherry', 'date', 'fig', 'grape'] Join all fruits into a single string separated by commas
let fruitsString = fruits.join(', ');
console.log(fruitsString);
// Expected output: 'banana, cherry, date, fig, grape'
// Problem- 18: Reverse the order of the array
fruits.reverse();
console.log(fruits);
// Expected output: ['grape', 'fig', 'date', 'cherry', 'banana']
// Problem- 17: Remove 'fig' from the array
let figIndex = fruits.indexOf('fig');
if (figIndex !== -1) {
    fruits.splice(figIndex, 1);
}
console.log(fruits);
// Expected output: ['grape', 'date', 'cherry', 'banana']

// Problem- 19: Add 'kiwi' to the beginning of the array
fruits.unshift('kiwi');
console.log(fruits);
// Expected output: ['kiwi', 'grape', 'date', 'cherry', 'banana']
// Problem- 20: Create a copy of the array
let fruitsCopy = fruits.slice();
console.log(fruitsCopy);
// Expected output: ['kiwi', 'grape', 'date', 'cherry', 'banana'] 

// splice method
let vegetables = ['carrot', 'broccoli', 'spinach', 'potato', 'cabbage'];
// Problem- 1: Remove 'spinach' and 'potato', and add 'lettuce' and 'kale' in their place
let spinachIndex = vegetables.indexOf('spinach');
if (spinachIndex !== -1) {
    vegetables.splice(spinachIndex, 2, 'lettuce', 'kale');
} 
console.log(vegetables);
// Expected output: ['carrot', 'broccoli', 'lettuce', 'kale', 'cabbage']  
// Problem- 2: Remove the last vegetable from the array
vegetables.splice(vegetables.length - 1, 1);
console.log(vegetables);
// Expected output: ['carrot', 'broccoli', 'lettuce', 'kale']
// Problem- 3: Add 'tomato' and 'cucumber' at index 2
vegetables.splice(2, 0, 'tomato', 'cucumber');
console.log(vegetables);
// Expected output: ['carrot', 'broccoli', 'tomato', 'cucumber', 'lettuce', 'kale']
// Problem- 4: Replace 'broccoli' with 'asparagus'
let broccoliIndex = vegetables.indexOf('broccoli');
if (broccoliIndex !== -1) {
    vegetables.splice(broccoliIndex, 1, 'asparagus');
}
console.log(vegetables);
// Expected output: ['carrot', 'asparagus', 'tomato', 'cucumber', 'lettuce', 'kale']  \
// Problem- 5: Remove the first two vegetables from the array
vegetables.splice(0, 2);
console.log(vegetables);
// Expected output: ['tomato', 'cucumber', 'lettuce', 'kale']
// Problem- 6: Add 'onion' and 'garlic' to the end of the array
vegetables.splice(vegetables.length, 0, 'onion', 'garlic'); 
console.log(vegetables);
// Expected output: ['tomato', 'cucumber', 'lettuce', 'kale', 'onion', 'garlic']
// concat method
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// Problem- 1: Concatenate array1 and array2
let combinedArray = array1.concat(array2);
console.log(combinedArray);
// Expected output: [1, 2, 3, 4, 5, 6]
// Problem- 2: Concatenate three arrays 
let array3 = [7, 8, 9];
let combinedThreeArrays = array1.concat(array2, array3);
console.log(combinedThreeArrays); 
// Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Problem- 3: Concatenate an array with a single value
let combinedWithValue = array1.concat(10);
console.log(combinedWithValue);
// Expected output: [1, 2, 3, 10]
// Problem- 4: Concatenate nested arrays
let nestedArray1 = [1, 2];  
let nestedArray2 = [3, 4];
let combinedNestedArrays = nestedArray1.concat(nestedArray2);
console.log(combinedNestedArrays);  
// Expected output: [1, 2, 3, 4]
// Problem- 5: Concatenate arrays with different data types
let mixedArray1 = [1, 'two', true];
let mixedArray2 = ['three', 4, false];
let combinedMixedArrays = mixedArray1.concat(mixedArray2);
console.log(combinedMixedArrays); 
// Expected output: [1, 'two', true, 'three', 4, false]

// split method 

let str1 = 'We love programming and web development';

// let strArray = str1.split(' ');
// let reverseArray = strArray.reverse();
// let reverseStr = reverseArray.join(' ');
// console.log(strArray);
// console.log(reverseArray);
// console.log(reverseStr);

// Shortcut:
let reverseStr = str1.split(' ').reverse().join(' ');

console.log(reverseStr);

// count a specific letter
let string = 'We love to travel and watch movie.'
let count = 0;

for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    console.log(letter);
    if(letter.toLowerCase() == 'w') {
        count++;
    }
}

console.log(count);
