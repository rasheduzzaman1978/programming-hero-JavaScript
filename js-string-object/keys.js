const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb', 
    monitor: 'hp'
}

// const keys = Object.keys(computer);
// console.log(keys)

// const keys = Object.keys(computer);

// console.log(keys);

// const values = Object.values(computer);
// console.log(values);

// for (let key of keys) {
//     console.log(key, ':', computer[key]);
// }
// console.log(keys, ':', computer[values]);

const entries = Object.entries(computer);

for (let [key, value] of entries) {
    console.log(key, ':', value);
}