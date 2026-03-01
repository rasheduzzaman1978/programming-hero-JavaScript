function greet(name, callback) {
  console.log('Hello, ' + name + '!');
  callback();
}

function sayGoodbye(){
  console.log('Bye!');
}

greet('Rashed', sayGoodbye);

// Output: Hello, Rashed! Bye!


// ধরা যাক, আপনি একটি অনলাইন শপ থেকে কিছু কিনছেন। প্রথমে আপনাকে পেমেন্ট করতে হবে, তারপর কনফার্মেশন পাবেন।

// JavaScript
// এই ফাংশনটি পেমেন্ট প্রসেস করবে
function processPayment(amount, callback) {
    console.log(amount + ' Money payment is processing...');
    
    // মনে করি পেমেন্ট হতে ২ সেকেন্ড সময় লাগবে
    setTimeout(function() {
        console.log("পেমেন্ট সফল হয়েছে!");
        callback(); // পেমেন্ট শেষ হলে কলব্যাক ফাংশনটি চলবে
    }, 2000);
}

// এই ফাংশনটি হলো আমাদের কলব্যাক
function sendConfirmation() {
    console.log('Confirm your order. Thank you!');
}

// কল করা হচ্ছে
processPayment(500, sendConfirmation);
