let page = 1;
const itemsPerPage = 10;
let isLoading = false;

async function loadMoreData() {
    if (isLoading) return;
    isLoading = true;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`);
    const data = await response.json();

    const content = document.getElementById('content');

    data.forEach(post => {
    const element = document.createElement('div');
    element.className = 'post';
    element.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    content.appendChild(element);
    });

    page++;
    isLoading = false;
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    loadMoreData();
    }
});

loadMoreData();