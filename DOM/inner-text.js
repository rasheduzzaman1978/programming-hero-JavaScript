function changeText() {
  let message = document.getElementById('message');
  message.innerText = 'Hello, JavaScript!';
  message.style.color = 'purple';
  message.style.fontSize = '50px';
  message.style.backgroundColor = 'green';
  message.style.textAlign = 'center';
}

function changeName(){
  let nameDiv = document.getElementById('name');
  
  // nameDiv.innerHTML = 
  // // "<h2>New Name Sifat Abdullah!</h2><p>This is updated using innerHTML.</p>";
// }
  nameDiv.innerHTML = 
  "Hello, Sifat Abdullah! How are you?";
}
  // or 
  // nameDiv.innerHTML = 
  // `<h2>New Name Sifat Abdullah!</h2>
  //  <p>This is updated using innerHTML.</p>`;
// }