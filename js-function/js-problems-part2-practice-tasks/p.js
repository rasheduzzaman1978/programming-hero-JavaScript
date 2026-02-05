// 🔰 1️⃣ Beginner Level (Loop ব্যবহার করে)
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


function findAveragePhonePrice(phones) {
  let total = 0;

  for (let i = 0; i < phones.length; i++) {
    total = total + phones[i].price;
    console.log(total); // চাইলে রাখতে পারেন
  }

  const average = total / phones.length;
  return average;
}

console.log(findAveragePhonePrice(phones));

/*🔎 কী হচ্ছে?

প্রতিটা phone এর price যোগ করা হয়েছে

শেষে মোট যোগফলকে array এর length দিয়ে ভাগ করা হয়েছে

📌 Output:

58166.666666666664*/

// 🟡 2️⃣ Intermediate Level (for...of ব্যবহার করে)
function findAveragePhonePrice(phones) {
    let total = 0;

    for (const phone of phones) {
        total += phone.price;
    }

    return total / phones.length;
}


// 👉 Cleaner & readable version

// 🟠 3️⃣ Advanced Level (Reduce ব্যবহার করে)
function findAveragePhonePrice(phones) {

    const total = phones.reduce((sum, phone) => {
        return sum + phone.price;
    }, 0);

    return total / phones.length;
}


// 👉 reduce() পুরো array কে একটি total value বানিয়ে দেয়।

// 🔥 Professional Version (Error Handling + Clean Code)
function findAveragePhonePrice(phones) {

    if (!Array.isArray(phones) || phones.length === 0) {
        return "Invalid input!";
    }

    const total = phones.reduce((sum, phone) => sum + phone.price, 0);

    return Number((total / phones.length).toFixed(2));
}

/*
👉 এখানে:

Empty array হলে error দেখাবে

Average ২ decimal পর্যন্ত round করবে

📊 Final Result (Rounded)
58166.67
*/

