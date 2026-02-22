function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}

function getBalance() {
  const balanceElement = document.getElementById('balance');
  const balance = balanceElement.innerText;
  console.log('Current balance:', Number(balance));
  return Number(balance);
}

function setBalance(value) {
  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = value;
}

// machine id -> hide all -> show id 
function showOnly(id){
  // console.log('show only clicked')
  const addmoney = document.getElementById('add-money');
  const cashout = document.getElementById('cashout');
  const history = document.getElementById('history');
  const transfer = document.getElementById('transfer');
  const bonus = document.getElementById('bonus');
  const paybill = document.getElementById('paybill');
  // console.log(`Add Money- ${addmoney} , Cashout- ${cashout}`);

  // shobai k hide kore dao
  addmoney.classList.add('hidden');
  cashout.classList.add('hidden');
  history.classList.add('hidden');
  transfer.classList.add('hidden');
  bonus.classList.add('hidden');
  paybill.classList.add('hidden');


  // id wala element take tumi show koro
  const selected = document.getElementById(id);
  selected.classList.remove('hidden');
}


// Or 

// Get input value
// function getValueFromInput(id) {

//   const value = document.getElementById(id).value.trim();

//   return value;

// }


// // Clear input
// function clearInput(id){

//   document.getElementById(id).value = '';

// }


// // Get balance
// function getBalance() {

//   const balance = document.getElementById('balance').innerText;

//   return Number(balance) || 0;

// }


// // Set balance
// function setBalance(value) {

//   document.getElementById('balance').innerText = Number(value).toFixed(2);

// }
