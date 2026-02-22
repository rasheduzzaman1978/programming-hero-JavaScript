document.getElementById("cashout-btn").addEventListener("click", function() {
  // 1. Get the agent Number and validate
  const cashoutNumberInput = document.getElementById("cashout-number").value.trim();
  // const cashoutAgentNumber = cashoutNumberInput.replace(/\D/g, ""); 
  // // console.log("Agent Number:", cashoutAgentNumber);
  // if (cashoutNumberInput.length !=11) {
  //   alert('Invalid Agent Number');
  //   return;
  // }

  const cashoutAgentNumber = cashoutNumberInput.trim();

if (cashoutAgentNumber.length !== 11 || isNaN(cashoutAgentNumber)) {
  alert("Invalid Agent Number");
  return;
}

  console.log("Agent Number:", cashoutAgentNumber);
  // Remove non-digit characters
  // if (cashoutNumberInput === "") {
  //   alert("Please enter the agent number.");
  //   return;
  // }
  // 2. Get the amount and validate, convert to number
  const cashoutAmountInput = document.getElementById("cashout-amount").value.trim();
  const cashoutAmount = parseFloat(cashoutAmountInput);
  console.log("Amount:", cashoutAmount);
  // if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
  //   alert("Please enter a valid amount.");
  //   return;
  // }
  // 3. Get the current balance, validate and convert to number
  const currentBalanceElement = document.getElementById("balance");
  const currentBalance = parseFloat(currentBalanceElement.textContent);
  console.log("Current Balance:", currentBalance);
  // 4. Calculate the new balance and validate
  const newBalance = currentBalance - cashoutAmount;
//  console.log("New Balance:", newBalance);
  if (newBalance < 0) {
      alert("Insufficient balance for this withdrawal. Your current balance is: " + currentBalance.toFixed(2));
      return;
    }
     console.log("New Balance:", newBalance);
  // 5. get the pin number and validate
  const cashoutPinInput = document.getElementById("cashout-pin").value.trim();
  console.log("Pin Number:", cashoutPinInput);
    if (cashoutPinInput === "1234") {
      // Update the balance on the page
      currentBalanceElement.textContent = newBalance.toFixed(2);
      alert("Withdrawal successful! Your new balance is: " + newBalance.toFixed(2));

    } else {
      alert("Invalid pin number. Please try again.");
      return;
    }
  // 5.1. If all validations pass, update the balance and show success message
      
  // 5.2. If any validation fails, show error message and return

});