// const num1 = 12; 
// const num2 = 22; 
// const num3 = 442; 
// const num4 = 442; 

// const numbers = 1222442412412;
// (), {}, []
const friends = ['Abul', 'babul', 'cabul', 'dabul', 'bulbul'];
const passed = [true, false, true, false];
const mixedArray = [12, 'Alahbad', true, 45.566];

const numbers = [12, 22, 78, 54, 65];

// for (let i= 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

// or 
for (const number of numbers) {
  console.log(number);
}

const products =[
  {id: 1, name: 'xiami phone one night', price: 19000},
  {id: 2, name: 'iphone', price: 50000},
  {id: 3, name: 'mac book air', price: 29000},
  {id: 4, name: 'lenovo yoga laptop 2025', price: 39000},
  {id: 5, name: 'Dell insiron laptop', price: 27000},
  {id: 6, name: 'Samsung Phone note 7', price: 20000},
  {id: 7, name: 'Nokia old age Phone gone', price: 10000},
  {id: 8, name: 'Phone one', price: 9000},
];

// for (const product of products) {
//   console.log(product);
// }

function matchedProducts (products, search){
  const matched = [];
  for (const product of products){
    if (product.name.toLowerCase().includes(search.toLowerCase())){
    matched.push(product);
  }
}
  return matched;
}

const result = matchedProducts(products, 'phone');
const result2 = matchedProducts(products, 'laptop');
const result3 = matchedProducts(products, 'mac');
console.log(result);
console.log(result2);
console.log(result3);

// 🔎 1) Price দিয়ে search (range অনুযায়ী)

// ধরো 20,000 টাকার কম প্রোডাক্ট চাই:
function searchByPrice(products, maxPrice){
  return products.filter(p => p.price <= maxPrice);
}

console.log(searchByPrice(products, 20000));

// 🔎 2) Minimum + Maximum price range
function searchByPriceRange(products, min, max){
  return products.filter(p => p.price >= min && p.price <= max);
}

console.log(searchByPriceRange(products, 15000, 30000));

// 🔎 3) ID দিয়ে search
function searchById(products, id){
  return products.find(p => p.id === id);
}

console.log(searchById(products, 4));

// 🔎 4) Multiple keyword (একাধিক শব্দ)
// যেমন: "samsung phone"

function matchedProductsMulti(products, search) {
  const keywords = search.toLowerCase().split(' ');

  return products.filter(product => keywords.every(word => product.name.toLowerCase().includes(word)
)
);
}

console.log(matchedProductsMulti(products, 'samsung phone'));

// 🔎 5) Starts with / Ends with
// যদি নামের শুরুতে থাকে:

function searchStarts(products, word) {
  return products.filter(p => p.name.toLowerCase().startsWith(word.toLowerCase())
);
}

console.log(searchStarts(products, 'iphone'))

// 🚀 Advanced (একই ফাংশনে সব search)
function searchProducts(products, query) {
  return products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.price.toString().includes(query)
  );
}

console.log(searchProducts(products, "19000"));

✅ STEP 1 — Name দিয়ে Search (তোমার বর্তমানটা)

তুমি আগেই করেছ 👍

function matchedProducts(products, search) {
  const matched = [];

  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }

  return matched;
}

console.log(matchedProducts(products, "phone"));

✅ STEP 2 — Price Filter (কম দামের)

২০,০০০ টাকার নিচে:

function searchByMaxPrice(products, maxPrice) {
  return products.filter(p => p.price <= maxPrice);
}

console.log(searchByMaxPrice(products, 20000));

✅ STEP 3 — Price Range (min → max)
function searchByPriceRange(products, min, max) {
  return products.filter(
    p => p.price >= min && p.price <= max
  );
}

console.log(searchByPriceRange(products, 15000, 30000));

✅ STEP 4 — ID দিয়ে Search
function searchById(products, id) {
  return products.find(p => p.id === id);
}

console.log(searchById(products, 4));

✅ STEP 5 — Multiple Word Search

যেমন: "samsung phone"

function searchMultiWord(products, search) {
  const words = search.toLowerCase().split(" ");

  return products.filter(product =>
    words.every(word =>
      product.name.toLowerCase().includes(word)
    )
  );
}

console.log(searchMultiWord(products, "samsung phone"));

✅ STEP 6 — Starts With / Ends With
function searchStarts(products, word) {
  return products.filter(p =>
    p.name.toLowerCase().startsWith(word.toLowerCase())
  );
}

console.log(searchStarts(products, "iphone"));

✅ STEP 7 — Sort by Price (Low → High)
function sortLowToHigh(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

console.log(sortLowToHigh(products));


High → Low:

function sortHighToLow(products) {
  return [...products].sort((a, b) => b.price - a.price);
}

✅ STEP 8 — Combined Search System 🔥

এক ফাংশনে সব:

function advancedSearch(products, query, minPrice, maxPrice) {
  return products.filter(p => {
    const matchName = query
      ? p.name.toLowerCase().includes(query.toLowerCase())
      : true;

    const matchPrice =
      minPrice !== undefined && maxPrice !== undefined
        ? p.price >= minPrice && p.price <= maxPrice
        : true;

    return matchName && matchPrice;
  });
}

console.log(advancedSearch(products, "phone", 10000, 25000));