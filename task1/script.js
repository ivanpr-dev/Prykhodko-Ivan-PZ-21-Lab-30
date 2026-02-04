const data = Array.from({ length: 100 }, (_, i) => ({
  img1: `image1.jpg`,
  img2: `image2.jpg`,
  img3: `image3.jpg`,
  img4: `image4.jpg`,
  img5: `image5.jpg`
}));


const itemsPerPage = 10;
let currentPage = 1;

function displayPage(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = data.slice(start, end);

  const container = document.getElementById("content");
  container.innerHTML = "";

  pageItems.forEach(item => {
    const div = document.createElement("div");
    if (currentPage === 1) {
      div.innerHTML = `<img src="${item.img1}" alt="${item.title}" width="100">`;
    } else if (currentPage === 2) {
      div.innerHTML = `<img src="${item.img2}" alt="${item.title}" width="100">`;
    } else if (currentPage === 3) {
      div.innerHTML = `<img src="${item.img3}" alt="${item.title}" width="100">`;
    } else if (currentPage === 4) {
      div.innerHTML = `<img src="${item.img4}" alt="${item.title}" width="100">`;
    } else {
      div.innerHTML = `<img src="${item.img5}" alt="${item.title}" width="100">`;
    }
    container.appendChild(div);
  });

  console.log(`Сторінка ${page}`, pageItems);
}

function goToPage(page) {
  currentPage = page;
  displayPage(currentPage);
}

document.getElementById("page1").addEventListener("click", () => 
  goToPage(1)
);
document.getElementById("page2").addEventListener("click", () => 
  goToPage(2)
);
document.getElementById("page3").addEventListener("click", () => 
  goToPage(3)
);
document.getElementById("page4").addEventListener("click", () => 
  goToPage(4)
);
document.getElementById("page5").addEventListener("click", () => 
  goToPage(5)
);

goToPage(currentPage);
