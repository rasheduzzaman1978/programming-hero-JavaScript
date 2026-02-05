/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i<= 100; i++) {
  if (Number.isInteger(Math.sqrt(i)) && i !== 1){
    console.log('First squire number found:', i);
    break;
  }
}