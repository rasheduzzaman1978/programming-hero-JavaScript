const king = {
    name: 'Mufasa',
    kingdom: 'Pride Rock',
    age: 10,
    isAlive: true
};
console.log('Before freezing:', king);

// Object.freeze(king);
// king.age = 11;  
// king.isAlive = false;
// console.log('After freezing:', king);

// delete king.name;
// delete king.kingdom;
delete king.age;
console.log('After attempting to delete name:', king);
Object.seal(king);
delete king.name;
delete king.kingdom;
delete king.age;
console.log('After attempting to delete name:', king);
king.queen = 'Sarabi';
console.log('After attempting to add queen:', king);

king.name = 'King Simba';
console.log('After attempting to change name:', king);