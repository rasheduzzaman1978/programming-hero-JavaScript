const nayok = {
  name: 'Sakib Khan',
  id: 101,
  addred: 'Gulshan, Dhaka',
  isSingle: false,
  friends: ['Apu', 'Salman', 'Amir', 'Rajesh'],
  movies: [{name: 'No. 1', year: 2015}, {name: 'King Khan', year: 2018}],
  act: function(){
    console.log('Acting like Sakib Khan');
  },
  car: {
    brand:'tesla',
    price: 1500000,
    made: 2025,
    manufacturer: {
      name: 'tesla',
      ceo: 'Elen Mask',
      country: 'USA'
    }
  }
}
/*
✅ 4) Method / Function Call করা

তুমি যেটা করেছো 👇

nayok.act();


👉 এখানে:

act হলো function

() দিলে সেটা execute হয়

শুধু লিখলে—

console.log(nayok.act);


তাহলে function definition দেখাবে, run হবে না। */
// console.log(nayok.act)
nayok.act();

// ✅ 1) Simple Property পাওয়া
console.log(nayok.name);      // Sakib Khan
console.log(nayok.id);        // 101
console.log(nayok.addred);    // Gulshan, Dhaka
console.log(nayok.isSingle);  // false


// 👉 bracket notation দিয়েও:

console.log(nayok['name']);

// ✅ 2) Array Property (friends)
console.log(nayok.friends);

console.log(nayok.friends[0]); // Apu
console.log(nayok.friends[2]); // Amir

// Loop চালানো:
for (let friend of nayok.friends){
  console.log(friend);
}

// ✅ 3) Array of Objects (movies)
console.log(nayok.movies);


// প্রথম movie:

console.log(nayok.movies[0].name); // No. 1
console.log(nayok.movies[0].year); // 2015

// সব movie print:
for (let movie of nayok.movies) {
  console.log(movie.name, movie.year);
}

// ✅ 5) Nested Object (car)
console.log(nayok.car);
console.log(nayok.car.brand);
console.log(nayok.car.price);

// ✅ 6) Deep Nested Object (manufacturer)
console.log(nayok.car.manufacturer.name);
console.log(nayok.car.manufacturer.ceo);
console.log(nayok.car.manufacturer.country);

// ✅ 7) Object এর সব key বের করা
console.log(Object.keys(nayok));

// ✅ 8) Object এর সব value বের করা
console.log(Object.values(nayok));

// ✅ 9) Loop চালানো object এর উপর
for (let key in nayok){
  console.log(key, ':', nayok[key]);
}

