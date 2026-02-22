let buttons = document.querySelectorAll(".addBtn");

let cart = document.getElementById("cart");

let count = document.getElementById("count");

let total = document.getElementById("total");


let cartCount = 0;

let totalPrice = 0;



// ADD TO CART

buttons.forEach(function(button){

button.addEventListener("click", function(){

let item = button.closest(".item");

let name = item.querySelector(".name").innerText;

let price = parseInt(item.querySelector(".price").innerText);


// create li

let li = document.createElement("li");

li.innerHTML = `

${name} - ${price} Tk

<button class="removeBtn">Remove</button>

`;

cart.appendChild(li);


// count increase

cartCount++;

count.innerText = cartCount;


// total increase

totalPrice += price;

total.innerText = totalPrice;



});

});




// REMOVE BUTTON

cart.addEventListener("click", function(e){

if(e.target.classList.contains("removeBtn")){


let li = e.target.closest("li");


// price বের করা

let text = li.innerText;

let price = parseInt(text.match(/\d+/)[0]);


// remove

li.remove();


// count decrease

cartCount--;

count.innerText = cartCount;


// total decrease

totalPrice -= price;

total.innerText = totalPrice;


}

});
