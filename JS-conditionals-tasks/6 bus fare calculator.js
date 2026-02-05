/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
// Solution

let age = 65;
let isStudent = false;
let regularFare = 800;
let fare;

if (age < 10) {
  fare = 0;
  console.log("Ticket is free for children.");

} else if (isStudent) {
  // 50% discount
  fare = regularFare * 0.5;
  console.log("Student discount applied. Ticket fare:", fare, "tk");

} else if (age >= 60) {
  // 85% discount
  fare = regularFare * 0.85;
  console.log("Senior citizen discount applied. Ticket fare:", fare, "tk");

} else {
  fare = regularFare;
  console.log("Regular ticket fare:", fare, "tk");
}
