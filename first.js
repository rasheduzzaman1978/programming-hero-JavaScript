// Problem- 1: Calculate the remaining money after buying an apple and an orange.
let givenMoney = 1000;
let apple = 300;
let orange = 400;
let total = apple + orange;
let remainingMoney = givenMoney - total;
console.log(remainingMoney);
// Expected output: 300

// Problem- 2: Calculate the average of 5 marks.
let bangla = 85;
let math = 90;
let science = 78.56;
let english = 92.89;
let history = 88.09;
let average = (bangla + math + science + english + history) / 5;  
console.log(average.toFixed(2));
// Expected output: 86.6

// Problem- 3: divide by 5 and remainder.
let number = 17;
let remainder = number % 5;
console.log(remainder);
// Expected output: 2

// Problem- 4:
const a = isNaN('11');
console.log(a);
// Expected output: false
// Problem- 5:
const b = isNaN('hello');
console.log(b);
// Expected output: true
// Problem- 6:
const c = parseFloat('99.99');
console.log(c);
// Expected output: 99.99
// Problem- 7:
const d = parseInt('100.55');
console.log(d);
// Expected output: 100 
// Problem- 8:
const e = (0.1 + 0.2).toFixed(2);
console.log(e);
// Expected output: 0.30
// Problem- 9:
const f = Math.round(4.6);
console.log(f);
// Expected output: 5
// Problem- 10:
const g = Math.ceil(4.1); 
console.log(g);
// Expected output: 5
// Problem- 11:
const h = Math.floor(4.9);
console.log(h);
// Expected output: 4
// Problem- 12:
const i = Math.random();
console.log(i);
// Expected output: A random number between 0 and 1
// Problem- 13:
const j = Math.random() * 100;
console.log(j);
// Expected output: A random number between 0 and 100
// Problem- 14:
const k = Math.round(Math.random() * 100);
console.log(k);
// Expected output: A random integer between 0 and 100
// Problem- 15:
const l = Math.abs(-50);
console.log(l);
// Expected output: 50
// Problem- 16:
const m = Math.sqrt(64);
console.log(m);
// Expected output: 8
// Problem- 17:
const n = Math.pow(3, 4); 
console.log(n);
// Expected output: 81
// Problem- 18: 
const o = Math.min(5, 10, 2, 8, 3);
console.log(o);
// Expected output: 2
// Problem- 19:
const p = Math.max(5, 10, 2, 8, 3); 
console.log(p);
// Expected output: 10
// Problem- 20:
const q = Number('123.45');
console.log(q);
// Expected output: 123.45  
// Problem- 21:
const r = Number('hello');
console.log(r);
// Expected output: NaN
// Problem- 22:
const s = (5 / 0);
console.log(s);
// Expected output: Infinity
// Problem- 23:
const t = ( -5 / 0);
console.log(t);
// Expected output: -Infinity
// Problem- 24:
const u = (0 / 0);
console.log(u);
// Expected output: NaN
// Problem- 25:
const v = typeof NaN;
console.log(v);
// Expected output: "number"
// Problem- 26:
const w = typeof Infinity;
console.log(w);
// Expected output: "number"
// Problem- 27:
const x = (0.2 + 0.1) === 0.3;
console.log(x);
// Expected output: false
// Problem- 28:
const y = Number((0.2 + 0.1).toFixed(1)) === 0.3;
console.log(y);
// Expected output: true
// Problem- 29:
const z = isNaN(2-10):
console.log(z);
// Expected output: false
// Problem- 30:
const aa = isNaN('2' - '10');
console.log(aa);
// Expected output: false   
// Problem- 31:
const ab = isNaN('two' - 'ten');
console.log(ab);
// Expected output: true
// Problem- 32:
const ac = parseFloat('123.456abc');
console.log(ac);  
// Expected output: 123.456
// Problem- 33:
const ad = parseInt('456xyz');
console.log(ad);
// Expected output: 456

if age =20 {
    console.log("I am 20 years old");
}
else {
    console.log("I am not 20 years old");
}
age == 20 ? "I am 20 years old" : "I am not 20 years old";
// output: I am 20 years old
// Problem- 34: