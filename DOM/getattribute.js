function showHref() {
  let link = document.getElementById('myLink');
  let hrefValue = link.getAttribute('href');
  document.getElementById('output').innerText = 'Link: ' + hrefValue;
}

function changeImage() {
  let image = document.getElementById('myImage');
  image.setAttribute('src', './images/tea-1.png');
}