const loadPhoto = () => {

const url = "https://jsonplaceholder.typicode.com/photos";

fetch(url)
.then(res => res.json())
.then(data => displayPhoto(data.slice(0, 20)))
.catch(error => console.log(error));

};


const displayPhoto = (photos) => {

const container = document.getElementById("photo-container");

container.innerHTML = "";

photos.forEach(photo => {

const card = document.createElement("div");

card.className =
"bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 p-4 space-y-3 border border-gray-200";


card.innerHTML = `

<img src="https://picsum.photos/300/200?random=${photo.id}"
class="w-full h-52 object-cover rounded-lg">


<h2 class="font-semibold text-blue-600">
${photo.title}
</h2>

<p class="text-sm text-gray-500">
Album ID: ${photo.albumId}
</p>

`;

container.appendChild(card);

});

};

loadPhoto();