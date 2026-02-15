const form = document.querySelector('form');

// Submit event 
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  // Prevent form submission
  console.log('Form submitted!');
});

// Change event 
const input = document.querySelector('input');
input.addEventListener('change', function(){
  console.log('Input value changed:', input.value);
});