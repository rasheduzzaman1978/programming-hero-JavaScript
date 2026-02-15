// New Section Create

// 1. parent node
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

// 2. create child node
const placeSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1');
h1.innerText= 'Places I want to visit';
placeSection.appendChild(h1);

const ul1 = document.createElement('ul');


const li1 = document.createElement('li');
li1.innerText = 'Bandorbon';

const li2 = document.createElement('li');
li2.innerText = 'Khagrachhori';

const li3 = document.createElement('li');
li3.innerText = 'Rangamati';

const li4 = document.createElement('li');
li4.innerText = "Cox's Bazar";

ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);

placeSection.appendChild(ul1);

// 3. append placeSection to the mainContainer
mainContainer.appendChild(placeSection);

// New Section Create 
// Another way / Easier to creat HTML 

const booksSection = document.createElement('section');

booksSection.innerHTML =`
<h1>Books I need to read</h1>
<ul>
  <li>Physics</li>
  <li>Chemistry</li>
  <li>Math</li>
  <li>Biology</li>
</ul>
`
mainContainer.appendChild(booksSection);