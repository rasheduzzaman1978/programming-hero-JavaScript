const container = document.getElementById('container');

let div = document.createElement('div');
let name = 'Rashed.';
div.innerHTML = `
  <div>
  <h2>My name is ${name}</h2>
  <p2>This is a paragraph</p2>
  <br>
  <button>Click Me</button>
  </div>
`
container.appendChild(div);

const fruitContainer = document.getElementById('fruit-container');
// console.log(fruitContainer);

fruitContainer.addEventListener('click', function(event) {
  console.log(event.target.parentNode.parentNode.parentNode);
})


let arr = [1, 2, 3, 5, 4, 5, 6, 8, 10, 5];

const findMethod = arr.find (i => i == 5);
// const filterMethod = arr.filter (i => i == 5);
const filterMethod = arr.filter (i => i != 5);
console.log(findMethod);
console.log(filterMethod);