function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments);
  console.log(arguments[4]);
}

add(12, 13, 15, 24, 85, 45, 12, 35);