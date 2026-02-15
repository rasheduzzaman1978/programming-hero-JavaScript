function changePText() {
  let paragraphs = document.getElementsByTagName('p');
  for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerText = 'Updated text ' + (i + 1);
  }
}

// querySelectorAll() + forEach() ব্যবহার করলে কোড clean হয়।
function changePText() {
  let paragraphs = document.querySelectorAll('p');

  paragraphs.forEach((p, index) => {
    p.textContent = 'Changed the text ' + (index + 1);
  });
}  