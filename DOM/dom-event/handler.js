document.getElementById('btn-update-title')
    .addEventListener('click', function() {
      // console.log('btn clicked')
      const pageTitleElement = document.getElementById('page-title');
      // console.log(pageTitleElement);
      pageTitleElement.innerText = 'Updated page title text';
    })


    document.getElementById('btn-login')
    .addEventListener('click', function () {
      // console.log('login button clicked')
      const userInfoE1 = document.getElementById('user-info');
      userInfoE1.innerText = 'user logged in successfully.'
    })

    // set event listener 
    document.getElementById('btn-update')
    .addEventListener('click', function () {
      // console.log('update button clicked');
      // 2. get the text from the input field
      const nameInput = document.getElementById('input-name');
      // console.log(nameInput);
      const name = nameInput.value;
      // console.log('Name:', name);

      // set the name 
      const nameP = document.getElementById('name');
       // পুরো p tag এর রঙ পরিবর্তন করতে চাইলে
        // nameP.style.color = 'red';
        // শুধু নামের রঙ পরিবর্তন করতে চাইলে
          nameP.innerHTML = 'Name: <span style="color:red;">' + name + '</span>';
          // সাধারণভাবে দেখতে চাইলে
        // nameP.innerText = 'Name: ' + name;
          // input box খালি করার জন্য
            nameInput.value = '';
     
    })

    const makeBlue = document.getElementById('btn-make-blue').addEventListener('click', function() {
      document.body.style.backgroundColor = 'blue';
    })

    const makeWhite = document.getElementById('btn-make-white').addEventListener('click', function(){
      document.body.style.backgroundColor = 'white';
    })