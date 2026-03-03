const loadUsers = () => {

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
.then(res => res.json())
.then(data => displayUsers(data));

};

// {
//     "id": 10,
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//         "street": "Kattie Turnpike",
//         "suite": "Suite 198",
//         "city": "Lebsackbury",
//         "zipcode": "31428-2261",
//         "geo": {
//             "lat": "-38.2386",
//             "lng": "57.2232"
//         }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//         "name": "Hoeger LLC",
//         "catchPhrase": "Centralized empowering task-force",
//         "bs": "target end-to-end models"
//     }
// }

const displayUsers = (users) => {
console.log(users);
const container = document.getElementById("user-container");

container.innerHTML = "";

users.forEach(user => {

const card = document.createElement("div");

card.className =
"bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 p-6 space-y-3 border border-gray-200";


card.innerHTML = `
<img src="./images/rashed.png" class='w-[100px] h-[100px]'>

<h2 class="text-xl font-bold text-blue-600">
<span class="font-semibold">Name:</span>
${user.name}
</h2>

<p>
<span class="font-semibold">Username:</span>
${user.username}
</p>

<p>
<span class="font-semibold">Email:</span>
<a href="mailto:${user.email}"
class="text-blue-600 hover:underline">

${user.email}

</a>
</p>

<p>
<span class="font-semibold">Phone:</span>
${user.phone}
</p>

<p>
<span class="font-semibold">Website:</span>
<a href="https://${user.website}" target="_blank"
class="text-blue-600 hover:underline">

${user.website}

</a>
</p>

<p>
<span class="font-semibold">Company:</span>
${user.company.name}
</p>

<p class="text-gray-600 text-sm">
<span class="font-semibold">Address:</span>
📍 ${user.address.city}, ${user.address.street}
</p>

`;

container.appendChild(card);

});

};


loadUsers();