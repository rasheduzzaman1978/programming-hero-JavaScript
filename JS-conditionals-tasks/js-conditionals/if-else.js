let balance = 2000;
let withdrawAmount = 2500;

if (withdrawAmount <= balance) {  
    balance -= withdrawAmount;
    console.log(`Withdrawal successful! New balance is $${balance}.`);
} else {
    console.log("Insufficient funds for this withdrawal.");
}


let orderAmount = 1200;
if (orderAmount >= 1000) {
  console.log("Your Delivery charge free.")
} else {
  console.log("Your Delivery charge is 80 taka.")
}

let withdrawalAmount = 2000;
let balance2 = 1900;

if (withdrawalAmount <= balance2) {
  if (withdrawalAmount % 500 === 0) {
   console.log("Withdrawal Successful.");
  } else{
  console.log("Enter amount multiple of 500");
}
} else {
  console.log("Insufficient balance.")
}
