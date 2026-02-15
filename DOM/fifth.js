// const link = document.querySelector('a');

// // Get attribute
// console.log(link.getAttribute('href'));

// // Set attribute 
// link.setAttribute('href', 'https://google.com');

// // Change text content 
// link.innerText = 'Visit Google';

// // Change HTML content 
// const div = document.querySelector('div');
// div.innerHTML = '<p>New content</p>';

function modify() {
  let para = document.getElementById('demo');
  para.innerText = 'New Text';
  para.style.color = 'blue';

  let img = document.getElementById('image');
  img.setAttribute('src', './images/news-2.png')
}