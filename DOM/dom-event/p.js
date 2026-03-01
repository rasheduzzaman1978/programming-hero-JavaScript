document.getElementById('change-heading').addEventListener('click', function() {
        const changeHeading = document.getElementById('heading');
        changeHeading.innerText = 'If you practice more and more, it will seem very easy.'
    })

    document.getElementById('styleBtn').addEventListener('click', function() {
        const paraStyle = document.getElementById('para');
        paraStyle.style.color = 'golden';
        paraStyle.style.fontSize = '30px';
        paraStyle.style.backgroundColor = 'lightgreen';
    })

    document.getElementById('updateBtn').addEventListener('click', function(){
      const nameInput = document.getElementById('nameInput');
      const name = nameInput.value;
      const nameP = document.getElementById('name');
      // nameP.innerText = 'Name: ' + name;
      // nameP.textContent = 'Name: ' + name;
      nameP.innerHTML =  'Name: <span style="color:red;">' + name + '</span>';

      nameInput.value = '';
    })

    // Comment Box 
     document.getElementById('post-btn').addEventListener('click', function() {
      const commentElement = document.getElementById('comment-box')
      // console.log(commentElement);
      const commentMessage = commentElement.value;
      console.log(commentMessage);
      const commentContainer = document.getElementById('comment-container');
      
      const commentP = document.createElement('p');
      commentP.classList.add('comment');
      commentP.innerText = commentMessage;
      commentContainer.appendChild(commentP);
      commentElement.value = '';
    })
    
    document.getElementById('makeGreenBtn').addEventListener('click', function() {
      document.body.style.backgroundColor = 'yellowgreen';
    })
    