// ===== Array Example =====
const shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];

const friendsAgeArray = [12, 45, 78, 12, 32, 14];


// ===== Object Example =====
const friendsAgeObject = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
};


const shoppingCart = {
    books: 3, 
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
};


// ===== Get Keys & Values =====
const keys = Object.keys(shoppingCart);
console.log("Keys:", keys);

const values = Object.values(shoppingCart);
console.log("Values:", values);


// ===== Loop Using Object.keys() =====
for (let i = 0; i < keys.length; i++) {
    const propertyName = keys[i];
    const propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}


// ===== Loop Using for...in =====
for (const propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}
