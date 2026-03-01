// Example 1
function outerFunction() {
    let outerVariable = 'I am from the outer function';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}   
const closureFunction = outerFunction();
closureFunction(); // Output: I am from the outer function  

// Example 2
function outerFunction2(name) {
    let greeting = 'Hello';

    function innerFunction2() {
     // এখানে 'innerFunction' বাইরের 'greeting' এবং 'name' ভেরিয়েবল অ্যাক্সেস করছে  
     console.log(greeting + ', ' + name + '!');
    }
    return innerFunction2;
}

const myClosure = outerFunction2('Rashed');
//  outerFunction এর কাজ এখানে শেষ, কিন্তু...
myClosure(); //Output: Hello, Rashed!

// Example 3
function createCounter() {
    let count = 0; // এটি একটি প্রাইভেট ভেরিয়েবল
    
    return function() {
        count++;
        console.log(count);
    };
}
const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

// Example 4
function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    } 
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Example 5
function createGreeting(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    } 
}
const sayHello = createGreeting('Hello');
const sayHi = createGreeting('Hi');
sayHello('Alice'); // Output: Hello, Alice!
sayHi('Bob'); // Output: Hi, Bob!

// Example 6
function createCounter2() {
    let count = 0;
    return {
        increment: function() {
            count++;  
            console.log(count);
        },
        decrement: function() {
            count--;  
            console.log(count);
        }
    };
}
const counterObj = createCounter2();
counterObj.increment(); // Output: 1
counterObj.increment(); // Output: 2
counterObj.decrement(); // Output: 1
counterObj.decrement(); // Output: 0  

// Example 7
function createSecret(secret) {
    return function() {
        console.log(`The secret is: ${secret}`);
    } 
}
const mySecret = createSecret('I love JavaScript!');
mySecret(); // Output: The secret is: I love JavaScript!

// Example 8
function createBankAccount(customerName, initialBalance) {
    let balance = initialBalance;
    return {
        getBalance: function() {
            return balance;
        },
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited ${amount}. New balance: ${balance}`);
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew ${amount}. New balance: ${balance}`);
            } else {
                console.log("Insufficient funds");
            }
        }
    };
}
const account = createBankAccount('Alice', 1000);
console.log(account.getBalance()); // Output: 1000
account.deposit(500); // Output: Deposited 500. New balance: 1500
account.withdraw(200); // Output: Withdrew 200. New balance: 1300
account.withdraw(1500); // Output: Insufficient funds 

// Example 9
function createTimer() {
    let seconds = 0;
    let timerId = null; // এখানে আমরা ইন্টারভাল আইডি জমা রাখব

    return {
        start: function() {
            // যদি আগে থেকেই টাইমার চলতে থাকে, তবে নতুন করে শুরু করার দরকার নেই
            if (timerId) return; 

            timerId = setInterval(() => {
                seconds++;
                console.log(`Timer: ${seconds} seconds`);
            }, 1000);
        },
        stop: function() {
            if (timerId) {
                clearInterval(timerId); // টাইমার থামিয়ে দিবে
                timerId = null; // আইডি ক্লিয়ার করে দিলাম
                console.log("Timer stopped.");
            }
        },
        reset: function() {
            seconds = 0;
            console.log("Timer reset to 0.");
        }
    };
}

const timer = createTimer();

timer.start(); // টাইমার শুরু হলো

// ৫ সেকেন্ড পর টাইমারটি নিজে নিজেই বন্ধ হয়ে যাবে
setTimeout(() => {
    timer.stop();
}, 5000);


// Example 10
function createBankAccount2(customerName, initialDeposit) {
    let balance = initialDeposit; // এটি একটি Private Variable, বাইরে থেকে দেখা যাবে না

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`অভিনন্দন ${customerName}! আপনি ${amount} টাকা জমা দিয়েছেন। বর্তমান ব্যালেন্স: ${balance}`);
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log("দুঃখিত, আপনার অ্যাকাউন্টে পর্যাপ্ত টাকা নেই!");
            } else {
                balance -= amount;
                console.log(`${amount} টাকা তোলা হয়েছে। বর্তমান ব্যালেন্স: ${balance}`);
            }
        },
        checkBalance: function() {
            return `${customerName}, আপনার বর্তমান ব্যালেন্স: ${balance} টাকা।`;
        }
    };
}

const rashedAccount = createBankAccount2("Rashed", 1000);

// কাজ করবে:
rashedAccount.deposit(500);   // আউটপুট: বর্তমান ব্যালেন্স: 1500
rashedAccount.withdraw(200);  // আউটপুট: বর্তমান ব্যালেন্স: 1300
console.log(rashedAccount.checkBalance()); // আউটপুট: বর্তমান ব্যালেন্স: 1300 টাকা।

// কাজ করবে না (নিরাপদ):
console.log(rashedAccount.balance); // আউটপুট: undefined (বাইরে থেকে এক্সেস নেই)