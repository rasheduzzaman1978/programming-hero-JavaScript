// console.log('Third file');

const thirdList = document.getElementById('third-list');
console.log(thirdList);

// create the child নিচে নতুন লিস্ট আইটেম যুক্ত করতে
const li = document.createElement('li');
li.innerText = 'Brand New list item';
// or 
// li.textContent = 'Brand New list item';

thirdList.appendChild(li);

// উপরে নতুন লিস্ট আইটেম যুক্ত করতে

let li2 = document.createElement('li');
li2.textContent = 'New Item';

thirdList.prepend(li2);