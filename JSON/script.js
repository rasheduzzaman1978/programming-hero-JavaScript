// Load Posts

const loadPost = () => {

fetch("https://jsonplaceholder.typicode.com/posts")

.then(res => res.json())

.then(data => displayPost(data));

};



// Display Posts

const displayPost = (posts) => {

const container = document.getElementById("post-container");

container.innerHTML = "";

posts.slice(0, 12).forEach(post => {

const div = document.createElement("div");

// important class (for delete fix)
div.classList.add("post");

div.innerHTML = `

<div class="bg-white p-5 rounded-lg shadow hover:shadow-xl transition duration-300 h-full flex flex-col">

<h3 class="text-sm text-gray-500">
ID: ${post.id}
</h3>

<h2 class="text-lg font-bold my-2 text-blue-600">
<span class="text-red-500">Title:</span>
${post.title}
</h2>

<p class="text-gray-600 flex-grow text-justify">
${post.body}
</p>

<div class="mt-4 flex gap-2">

<button onclick="deletePost(this)"
class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">

Delete

</button>


<button onclick='detailsPost(${post.id}, ${JSON.stringify(post.title)}, ${JSON.stringify(post.body)})'
class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">

Details

</button>

</div>

</div>

`;

container.appendChild(div);

});

};



// Delete Post (No Gap Fix)

function deletePost(button){

const post = button.closest(".post");

post.remove();

}



// Details Post

function detailsPost(id, title, body){

alert(

`Post ID: ${id}

Title: ${title}

Body: ${body}`

);

}



// Auto Load

loadPost();