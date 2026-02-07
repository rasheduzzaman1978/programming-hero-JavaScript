function checkPassword(password) {
  let reasons = [];

  if (password.length < 8) {
    reasons.push("length must be at least 8");
  }

  if (!/[0-9]/.test(password)) {
    reasons.push("missing number");
  }

  if (!/[A-Z]/.test(password)) {
    reasons.push("missing uppercase letter");
  }

  if (password.includes(" ")) {
    reasons.push("must not contain spaces");
  }

  return {
    valid: reasons.length === 0,
    reasons: reasons
  };
}

// 🧪 Test
console.log(checkPassword("helloWorld"));
// { valid: false, reasons: ["missing number"] }

console.log(checkPassword("Hello123"));
// { valid: true, reasons: [] }

