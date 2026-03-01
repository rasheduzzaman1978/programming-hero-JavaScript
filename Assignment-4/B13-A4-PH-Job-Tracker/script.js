

// ---------- SELECT ELEMENTS ----------

const jobsElement = document.getElementById("jobsCount");
const totalElement = document.getElementById("totalCount");
const interviewElement = document.getElementById("interviewCount");
const rejectedElement = document.getElementById("rejectedCount");
const tabs = document.querySelectorAll(".tab");
const emptyMessage = document.getElementById("emptyMessage");


// ---------- COUNT VARIABLES ----------

let interviewCount = 0;
let rejectedCount = 0;


// ---------- GET ALL CARDS ----------

function getCards(){

return document.querySelectorAll("#jobContainer .card");

}


// ---------- UPDATE TOTAL COUNT ----------

function updateTotalCount(){

const total = getCards().length;

totalElement.innerText = total;

}


// ---------- UPDATE JOBS COUNT ----------

function updateJobsCount(filter){

const cards = getCards();

const total = cards.length;

const visible = Array.from(cards).filter(card =>
card.style.display !== "none"
).length;


if(filter === "all"){

jobsElement.innerText = total + " jobs";

}
else{

jobsElement.innerText = visible + " of " + total + " jobs";

}

}


// ---------- UPDATE STATUS COUNT ----------

function updateStatusCount(){

interviewElement.innerText = interviewCount;

rejectedElement.innerText = rejectedCount;

}


// ---------- FILTER CARDS ----------

function filterCards(filter){

let visible = 0;

getCards().forEach(card=>{

const status =
card.querySelector(".badge").innerText.toLowerCase();

if(filter==="all"){

card.style.display="block";
visible++;

}

else if(status===filter){

card.style.display="block";
visible++;

}

else{

card.style.display="none";

}

});

updateJobsCount(filter);


// empty message

if(visible===0){

emptyMessage.classList.remove("hidden");

}
else{

emptyMessage.classList.add("hidden");

}

}


// ---------- TAB EVENT ----------

tabs.forEach(tab=>{

tab.addEventListener("click", function(){

tabs.forEach(t=>
t.classList.remove("tab-active","active-tab")
);

this.classList.add("tab-active","active-tab");

filterCards(this.dataset.filter);

});

});


// ---------- DELETE EVENT ----------

document.querySelectorAll(".fa-trash").forEach(btn=>{

btn.addEventListener("click", function(){

const card = this.closest(".card");

const status =
card.querySelector(".badge").innerText;


if(status==="INTERVIEW") interviewCount--;

if(status==="REJECTED") rejectedCount--;


card.remove();


updateTotalCount();

updateStatusCount();

filterCards(
document.querySelector(".tab-active").dataset.filter
);

});

});


// ---------- INTERVIEW BUTTON EVENT ----------

document.querySelectorAll(".btn-success").forEach(btn=>{

btn.addEventListener("click", function(){

const badge =
this.closest(".card").querySelector(".badge");

const status = badge.innerText;


if(status==="REJECTED"){

rejectedCount--;

}


if(status!=="INTERVIEW"){

badge.innerText="INTERVIEW";

badge.classList.remove(
"badge-outline","badge-error"
);

badge.classList.add("badge-success");

interviewCount++;

}


updateStatusCount();

filterCards(
document.querySelector(".tab-active").dataset.filter
);

});

});


// ---------- REJECTED BUTTON EVENT ----------

document.querySelectorAll(".btn-error").forEach(btn=>{

btn.addEventListener("click", function(){

const badge =
this.closest(".card").querySelector(".badge");

const status = badge.innerText;


if(status==="INTERVIEW"){

interviewCount--;

}


if(status!=="REJECTED"){

badge.innerText="REJECTED";

badge.classList.remove(
"badge-outline","badge-success"
);

badge.classList.add("badge-error");

rejectedCount++;

}


updateStatusCount();

filterCards(
document.querySelector(".tab-active").dataset.filter
);

});

});


// ---------- INITIAL COUNT ----------

function initCounts(){

interviewCount=0;
rejectedCount=0;

getCards().forEach(card=>{

const status =
card.querySelector(".badge").innerText;

if(status==="INTERVIEW") interviewCount++;

if(status==="REJECTED") rejectedCount++;

});

updateStatusCount();

}


// ---------- INITIAL LOAD ----------

updateTotalCount();

initCounts();

filterCards("all");
