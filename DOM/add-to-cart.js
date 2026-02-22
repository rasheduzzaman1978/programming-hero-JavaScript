// সব button select করা

let buttons = document.querySelectorAll(".addBtn");


// forEach ব্যবহার

buttons.forEach(function(button){


button.addEventListener("click", function(){


    // closest ব্যবহার করে parent item বের করা

    let item = button.closest(".item");


    // name বের করা

    let name = item.querySelector(".name").innerText;


    // price বের করা

    let price = item.querySelector(".price").innerText;



    // cart এ add করা

    let cart = document.getElementById("cart");

    let li = document.createElement("li");

    // li.innerText = name + " - " + price;
    // or 
    li.innerText = `${name} - ${price}`;

    cart.appendChild(li);


});


});


