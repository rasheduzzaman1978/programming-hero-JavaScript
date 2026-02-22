document.getElementById('cashout-btn').addEventListener('click', function () {
  const cashoutNumber = getValueFromInput('cashout-number');
  if(cashoutNumber.length != 11) {
    alert('Invalid number');
    return;
  }

  const cashoutAmount = getValueFromInput('cashout-amount');

  const currentBalance = getBalance();
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert ('Invalid amount');
    return;
  }

  const pin = getValueFromInput('cashout-pin');
  if (pin === '1234') {
    alert(`Cashout successful! New balance: ${newBalance.toFixed(2)}`);
    setBalance(newBalance);

    // To show cashout transactions 
    // 1. history-container ke dhore niye ashbo
    const history = document.getElementById('history-container');

    // Date update JS 
    const now = new Date();

    const bdTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );

    const timeString = bdTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    // 2. new div create korbo
    const newHistory = document.createElement('div');

    // 3. new div-e innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transction-card p-5 bg-base-100 rounded-xl shadow mb-3">

      Cashout ${cashoutAmount} Tk. success from ${cashoutNumber}

      <div class="text-sm text-gray-400">

        Today ${timeString}

      </div>

    </div>

    `;
    // 4. history-container e newDiv append korbo
      history.append(newHistory);

  } else {
    alert('invalid pin');
    return;
  }
});






// or 

// ===============================
// Cashout Button Click Event
// ===============================
// document.getElementById('cashout-btn')
// .addEventListener('click', function () {

//     // ==========================
//     // Get input elements
//     // ==========================
//     const numberInput = document.getElementById('cashout-number');
//     const amountInput = document.getElementById('cashout-amount');
//     const pinInput = document.getElementById('cashout-pin');


//     // ==========================
//     // Get values
//     // ==========================
//     const cashoutNumber = getValueFromInput('cashout-number');

//     const cashoutAmount = Number(getValueFromInput('cashout-amount'));

//     const pin = getValueFromInput('cashout-pin');

//     const currentBalance = getBalance();



//     // ==========================
//     // Validation Start
//     // ==========================


//     // Mobile empty
//     if (cashoutNumber === '') {

//         alert('Enter mobile number');

//         numberInput.focus();

//         return;

//     }


//     // Mobile must be 11 digits
//     if (cashoutNumber.length !== 11) {

//         alert('Mobile number must be exactly 11 digits');

//         numberInput.focus();

//         numberInput.select();

//         return;

//     }



//     // Amount validation
//     if (isNaN(cashoutAmount) || cashoutAmount <= 0) {

//         alert('Enter valid amount');

//         amountInput.focus();

//         amountInput.select();

//         return;

//     }



//     // PIN empty
//     if (pin === '') {

//         alert('Enter PIN');

//         pinInput.focus();

//         return;

//     }



//     // PIN incorrect
//     if (pin !== '1234') {

//         alert('Invalid PIN');

//         pinInput.focus();

//         pinInput.select();

//         return;

//     }



//     // Balance check
//     if (cashoutAmount > currentBalance) {

//         alert(
//             `Insufficient balance. Current balance: ${currentBalance.toFixed(2)}`
//         );

//         amountInput.focus();

//         return;

//     }



//     // ==========================
//     // Cashout Success
//     // ==========================

//     const newBalance = currentBalance - cashoutAmount;


//     // Update balance
//     setBalance(newBalance);



//     // Success message
//     alert(
//         `Cashout successful!\nNew Balance: ${newBalance.toFixed(2)}`
//     );



//     // ==========================
//     // Clear inputs
//     // ==========================

//     // clearInput('cashout-number');

//     // clearInput('cashout-amount');

//     // clearInput('cashout-pin');



//     // Focus first field
//     numberInput.focus();



//     // ==========================
//     // Console Log
//     // ==========================

//     console.log('Previous Balance:', currentBalance);

//     console.log('Cashout Amount:', cashoutAmount);

//     console.log('New Balance:', newBalance);

// });


 
// Or 

// document.getElementById('cashout-btn').addEventListener('click', function () {

//   const numberInput = document.getElementById('cashout-number');
//   const amountInput = document.getElementById('cashout-amount');
//   const pinInput = document.getElementById('cashout-pin');
//   const balanceElement = document.getElementById('balance');


//   const cashoutNumber = numberInput.value.trim();
//   const cashoutAmountText = amountInput.value.trim();
//   const cashoutPin = pinInput.value.trim();
//   const currentBalance = parseFloat(balanceElement.textContent);


//   // Agent number validation
//   if (cashoutNumber.length !== 11 || isNaN(cashoutNumber)) {

//     alert('Invalid Agent number');
//     numberInput.focus();
//     return;

//   }


//   // Amount validation
//   if (cashoutAmountText === '') {

//     alert('Please enter amount');
//     amountInput.focus();
//     return;

//   }


//   const cashoutAmount = parseFloat(cashoutAmountText);


//   if (isNaN(cashoutAmount) || cashoutAmount <= 0) {

//     alert('Invalid amount');
//     amountInput.focus();
//     return;

//   }


//   // Pin validation
//   if (cashoutPin === '') {

//     alert('Please enter pin');
//     pinInput.focus();
//     return;

//   }


//   if (cashoutPin !== '1234') {

//     alert('Invalid pin');
//     pinInput.focus();
//     return;

//   }


//   // Balance check
//   if (cashoutAmount > currentBalance) {

//     alert(`Insufficient balance. Current balance: ${currentBalance.toFixed(2)}`);
//     return;

//   }


//   // Cashout success
//   const newBalance = currentBalance - cashoutAmount;

//   balanceElement.textContent = newBalance.toFixed(2);

//   alert(`Withdrawal successful! New balance: ${newBalance.toFixed(2)}`);


//   // Clear fields
//   // numberInput.value = '';
//   amountInput.value = '';
//   pinInput.value = '';


//   console.log('Current balance:', currentBalance);
//   console.log('Cashout Amount:', cashoutAmount);
//   console.log('New balance:', newBalance);

// });
