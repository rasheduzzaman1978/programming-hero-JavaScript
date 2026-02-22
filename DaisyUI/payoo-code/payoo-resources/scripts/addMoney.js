document.getElementById('add-money-btn').addEventListener('click', function (){
  // console.log('add money clicked')

//1. bank account get
const bankAccount = getValueFromInput('add-money-bank');
// console.log(bankAccount);
if (bankAccount == 'Select a Bank') {
  alert('Please select a bank');
  
  return;
}

//2. get bank account number 
const accno = getValueFromInput('add-money-number');
if (accno.length != 11) {
  alert ('Invalid acc no');
  return;
}

// 3. get amount 
  const amount = getValueFromInput('add-money-amount');
  // console.log('Amount to add:', amount);
  const newBalance = getBalance() + Number(amount);
  // console.log(newBalance);

  const pin = getValueFromInput('add-money-pin');
  if (pin == '1234') {
    alert(`Add money success from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);

    // 1. history-container ke dhore niye ashbo
    const history = document.getElementById('history-container');
    // 2. new div create korbo
    const newHistory = document.createElement('div');
    
    // JS 
    const now = new Date();

    const bdTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );

    const timeString = bdTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });


    
    // 3. new div-e innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transction-card p-5 bg-base-100 rounded-xl shadow mb-3">

      Add Money ${amount} Tk. success from Account No. ${accno} 

      <div class="text-sm text-gray-400">

        Today ${timeString}

      </div>

    </div>

    `;
    // 4. history-container e newDiv append korbo
      history.append(newHistory);
  } else {
    alert('Invalid pin')
    return;
  }
  // console.log('Amount to add:', amount);
  // console.log('New Balance:', newBalance);

});