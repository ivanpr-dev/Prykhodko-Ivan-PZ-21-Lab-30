const itemsPerPage = 10;
let currentPage = 1;

async function fetchPage(page) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`);
  const data = await response.json();

  const container = document.getElementById('data');
  container.innerHTML = '';

  data.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.id}. ${item.title}`;
    container.appendChild(div);
  });

  document.getElementById('page').textContent = `Сторінка ${page}`;
}

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchPage(currentPage);
  }
});

document.getElementById('next').addEventListener('click', () => {
  currentPage++;
  fetchPage(currentPage);
});

fetchPage(currentPage);