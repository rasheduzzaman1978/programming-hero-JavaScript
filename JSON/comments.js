const loadComment = () => {

const url = "https://jsonplaceholder.typicode.com/comments";

fetch(url)
.then(res => res.json())
.then(data => displayComment(data.slice(0, 50)));

};


const displayComment = (comments) => {

const commentContainer = document.getElementById('comment-container');

commentContainer.innerHTML = "";

comments.forEach((comment) => {

const commentCard = document.createElement('div');

commentCard.className =
"bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 p-6 space-y-3 border border-gray-200";

commentCard.innerHTML = `

<div class="flex justify-between text-sm text-gray-500">
<p><span class="font-semibold text-gray-700">Post ID:</span> ${comment.postId}</p>
<p><span class="font-semibold text-gray-700">ID:</span> ${comment.id}</p>
</div>

<h2 class="text-lg font-bold text-blue-600"><span class="text-black" >Name:</span> 
${comment.name}
</h2>

<h4 class="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md inline-block">
Email: 📧 
<span class="hover:underline cursor-pointer text-blue-600">
${comment.email}
</span>
</h4>

<p class="text-gray-700 leading-relaxed text-justify">
${comment.body}
</p>
`;

commentContainer.appendChild(commentCard);

})

}

loadComment();