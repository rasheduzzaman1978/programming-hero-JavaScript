/***

Implement a countdown timer that counts down from 81 to 65.

 */
let countdown = 81;

const timer = setInterval(() => {
  console.log(count);
  count--;

  if (count < 65) {
    clearInterval(timer);
  }
}, 1000);

// or 
for (let i = 81; i >= 65; i--){
  console.log(i);
}

/*programming hero*/