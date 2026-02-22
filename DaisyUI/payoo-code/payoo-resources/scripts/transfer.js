document.getElementById('transfer-btn').addEventListener('click', function () {

  const transferNumber = getValueFromInput('transfer-number');

  if (transferNumber.length != 11) {

    alert('Invalid number');
    return;

  }


  const transferAmount = getValueFromInput('transfer-amount');

  const currentBalance = getBalance();

  const newBalance = currentBalance - Number(transferAmount);


  if (newBalance < 0) {

    alert('Invalid amount');
    return;

  }


  const pin = getValueFromInput('transfer-pin');


  if (pin === '1234') {

    alert(`Transfer successful! New balance: ${newBalance.toFixed(2)}`);


    setBalance(newBalance);



    // ✅ History add start


    const history = document.getElementById('history-container');


    const newHistory = document.createElement('div');



    // Bangladesh time
    const now = new Date();

    const bdTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );


    const timeString = bdTime.toLocaleTimeString("en-US", {

      hour: "2-digit",
      minute: "2-digit",
      hour12: true

    });



    newHistory.innerHTML = `

    <div class="transction-card p-5 bg-base-100 rounded-xl shadow mb-3">

      Transfer ${transferAmount} Tk. success to ${transferNumber}

      <div class="text-sm text-gray-400">

        Today ${timeString}

      </div>

    </div>

    `;



    history.append(newHistory);



  }

  else {

    alert('Invalid pin');

  }

});