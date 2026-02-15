// document.getElementById('student-person').childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

// Create element and set innerText or innerHTML

const newChild = document.createElement('li');
newChild.innerText = 'New born student here named Zaima Rahman';

// Find the parent where you will add the child
const studentList = document.getElementById('student-list');

// append the child to the parent 
studentList.appendChild(newChild);

// অন্য নিয়ম
// ৩️⃣ নতুন li তৈরি
    const newStudent = document.createElement('li');
    newStudent.innerText = 'Sakib';

    // ul এ append করলাম
    document.querySelector('#student-person ul').appendChild(newStudent);