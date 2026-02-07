//Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {
  if (currentPrice <= 0 || typeof currentPrice !== 'number' || discount < 0 || discount > 100 || typeof discount !== 'number') {
    return 'Invalid';
  }
  const discountedPrice = (currentPrice * discount) / 100;
  const finalPrice = (currentPrice- discountedPrice).toFixed(3);
  
  return finalPrice;
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp !== 'string') {
    return 'Invalid';
}
  if (otp.length !== 8 || !otp.startsWith('ph-')) {
    return false;
  } else {
    return true;
  }
}

//Problem-03: BCS Final Score Calculator

function finalScore(omr) {
   if (typeof omr !== 'object' || omr === null || typeof omr.right !== 'number' || typeof omr.wrong !== 'number' || typeof omr.skip !== 'number') {
    return 'Invalid';
  }

  if((omr.right + omr.wrong + omr.skip) !== 100) {
    return 'Invalid';
  }
  
  const rightValue = omr.right * 1;
  const wrongValue = omr.wrong * 0.5;
  const total = Math.round(rightValue - wrongValue);
  return total;
}

//Problem-04: Upcoming Gono Vote

function gonoVote (array) {
  if (!Array.isArray(array)) {
    return 'Invalid';
  }

  let haNumber = 0;
  let naNumber = 0;

  for (let vote of array) {
    if (vote === 'ha') {
      haNumber = haNumber + 1;
    } else if (vote === 'na') {
      naNumber = naNumber + 1;
    }
  }

  if(haNumber > naNumber) {
    return true;
  } else if (haNumber == naNumber) {
    return 'equal';
  } else {
    return false;
  }
}

//Problem-05: Text Analyzer for an AI Company

function  analyzeText(str) {
  if(typeof str !== 'string' || str.trim().length === 0) {
    return 'Invalid';
  }

  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if(word.length >longestWord.length) {
      longestWord = word;
    }
  }

    let wordCount = str.split(" ").length;
    let charCount = str.split(' ').join('').length;
      
  return {
    longwords: longestWord,
    token: charCount 
  };
}

