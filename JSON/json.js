const loadData = () => { fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
};

// const loadPosts = () => { fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => { 
//     const postContainer = document.getElementById('post-container');
//     data.forEach(post => {
//       const postDiv = document.createElement('div');
//       postDiv.classList.add('post');
//       postDiv.innerHTML = `
//         <h3>${post.title}</h3>
      const loadPost = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url) 
        .then((res) => res.json())
        // .then(data => console.log(data))
        .then((json) => {
          console.log(json);
          displayPost(json);
        });
      };

      const displayPost = (posts) => {
        posts.forEach((post) => {
          // console.log(post);
          
        });
      };
