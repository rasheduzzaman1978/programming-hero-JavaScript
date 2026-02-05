const student = {
    name: 'Sifat Abdullah',
    roll: 101,
    studentClass: 6,
    section: 'A',
    schoolInfo: {
      schoolName: 'Momena Ali Biggan School',
      address: 'Ullapara, Sirajgonj'
    },
    fathersName: 'Md. Rasheduzzaman',
    mothersName: 'Bilkis Khatun',
    address: {
      village: 'Kamalpur',
      'post office': 'Goyhatta',
      upazila: 'Ullapara',
      district: 'Sirajgonj'
    },
    friends: ['Golap', 'Talha'],
    isStudent: true,
    mobile: '01716651946',
    
}

console.log(student);
console.log('Name:', student.name + ', ' + 'Class:',student.class + ', '+ 'Roll:', student.roll + ', ' + "Father's Name:", student.fathersName);
console.log(student.address.village);
console.log(student.address['post office']);
console.log(student.friends);

student.section = 'A';
student.age = 12;
student.address.country = 'Bangladesh';
student.friends.push('Raju');
console.log(student);

delete student.mobile;

console.log(student);

student.mobile = '01716651946';
console.log(student);

// 🔁 ১. for...in দিয়ে সব প্রপার্টি দেখানো
for (let key in student) {
  console.log(key, ':', student[key]);
}

// 🎯 Nested Object সহ দেখাতে চাইলে
for (let key in student) {
    if (typeof student[key] === 'object') {
        console.log(key + " :");

        for (let innerKey in student[key]) {
            console.log("    ", innerKey, ":", student[key][innerKey]);
        }

    } else {
        console.log(key, ":", student[key]);
    }
}

// 📦 ২. Object Destructuring : Destructuring মানে হচ্ছে অবজেক্ট থেকে সরাসরি ভ্যারিয়েবল বের করে নেওয়া।

// 🔹 সাধারণ Destructuring

const {name, studentClass, roll, section, age, fathersName, mothersName, mobile} = student;
const { friends: [firstFriend, secondFriend] } = student; 
const {schoolInfo: {schoolName, address}} = student;
const {address: { village, upazila, district}} = student;
const { address: { country = 'Bangladesh'} = {}} = student;

console.log(name);
console.log(studentClass);
console.log(section);
console.log(schoolName);
console.log(address);
console.log(age);
console.log(fathersName);
console.log(mothersName);
console.log(mobile);
console.log(firstFriend);
console.log(village);
console.log(upazila);
console.log(district);
console.log(country);

// 🔹 Nested Destructuring
// 
// const {address} = student;
// const {district, village} = address;

// console.log(village);
// console.log(district);

// অথবা এক লাইনে:
// const { address: {village, upazila, district} } = student;

// console.log(village);
// console.log(upazila);
// console.log(district);

// 🔑 ১️⃣ Object.keys()

// 👉 এটা অবজেক্টের সব key নিয়ে একটি array রিটার্ন করে।

const keys = Object.keys(student);
console.log(keys);

const values = Object.values(student);
console.log(values);

const entries = Object.entries(student);
console.log(entries);

// 🔁 entries দিয়ে loop করা (সবচেয়ে জনপ্রিয় ব্যবহার)
for (let [key, value] of Object.entries(student)) {
  console.log(key, ':', value);
}

/* 🎯 তুলনা এক নজরে
Method	কী দেয়	Return Type
Object.keys()	শুধু key	Array
Object.values()	শুধু value	Array
Object.entries()	key + value	Array of Array 

💡 ছোট টিপস

✔️ এগুলো শুধু own properties নেয়
✔️ Nested object আলাদা করে নিতে চাইলে আবার Object.keys(student.address) করতে হবে। */

for (let [key, value] of Object.entries(student.address)) {
  console.log(key, ':', value);
}

for (let [key, value] of Object.entries(student.friends)) {
  console.log(key, ':', value);
}