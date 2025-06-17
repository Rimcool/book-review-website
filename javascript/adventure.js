const books = [
    {
      id : 81,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "A timeless classic about Bilbo Baggins' unexpected journey through Middle-earth to reclaim a lost treasure guarded by a dragon.",
      image: "image/hobbit.jpg",
      price: 1500,
    },
    {
      id : 82,
      title: "Life of Pi",
      author: "Yann Martel",
      description: "The story of a young boy stranded on a lifeboat with a Bengal tiger, exploring survival and spirituality.",
      image: "image/life of pi.jpg",
      price: 1200,
    },
    {
      id : 83,
      title: "Into the Wild",
      author: "Jon Krakauer",
      description: "The true story of Christopher McCandless' journey into the Alaskan wilderness in search of a simpler life.",
      image: "image/into the wild.jpg",
      price: 1400,
    },
    {
      id : 84,
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A philosophical adventure following Santiago, a shepherd, on his quest to find a hidden treasure.",
      image: "image/the alechemist.jpg",
      price: 1000,
    },
    {
      id : 85,
      title: "The Lost City of Z",
      author: "David Grann",
      description: "The gripping tale of British explorer Percy Fawcett's search for a fabled city in the Amazon.",
      image: "image/the lost of cityz.jpg",
      price: 1600,
    },
    {
      id : 86,
      title: "The Call of the Wild",
      author: "Jack London",
      description: "A thrilling tale of survival and adventure in the Alaskan wilderness through the eyes of a sled dog.",
      image: "image/the call of wild.jpg",
      price: 800,
    },
    {
      id : 87,
      title: "Hatchet",
      author: "Gary Paulsen",
      description: "The story of a young boy's survival in the Canadian wilderness after a plane crash.",
      image: "image/the hatchet.jpg",
      price: 900,
    },
    {
      id : 88,
      title: "Journey to the Center of the Earth",
      author: "Jules Verne",
      description: "A classic science fiction adventure of a professor and his companions exploring the Earth's core.",
      image: "image/a journey to the centre of the earth.jpg",
      price: 1100,
    },
    {
      id : 89,
      title: "Wildwood",
      author: "Colin Meloy",
      description: "A fantastical adventure set in a magical forest, filled with danger and wonder.",
      image: "image/wildwood.jpg",
      price: 1300,
    },
    {
      id : 90,
      title: "The River of Doubt",
      author: "Candice Millard",
      description: "The harrowing true story of Theodore Roosevelt's journey through the uncharted Amazon.",
      image: "image/the river of doubt.jpg",
      price: 1800,
    }
  ];
  
  // Get the container
  const bookCardsContainer = document.getElementById("book-cards");
  
  // Generate cards
  books.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
  <div class="card-content">
    <h3 class="card-title">${book.title}</h3>
    <p class="card-description">${book.description}</p>
    <p class="card-price">${book.price}</p>
    <div class="card-buttons">
      <button class="add-to-cart" 
              data-title="${book.title}" 
              data-price="${book.price}" 
              data-image="${book.image}">
        Add to Cart
      </button>
      <button class="buy-now" 
              data-title="${book.title}" 
              data-price="${book.price}" 
              data-image="${book.image}">
        Buy Now
      </button>
    </div>
  </div>`;

  
    bookCardsContainer.appendChild(card);
  });
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
      const title = event.target.getAttribute("data-title");
      const price = event.target.getAttribute("data-price");
      const image = event.target.getAttribute("data-image");
  
      // Retrieve existing cart from localStorage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Add the selected book to the cart
      cart.push({ title, price, image });
  
      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
  
      alert(`${title} has been added to the cart!`);
    }
  
    if (event.target.classList.contains("buy-now")) {
      const title = event.target.getAttribute("data-title");
      const price = event.target.getAttribute("data-price");
      const image = event.target.getAttribute("data-image");
  
      // Save the selected book to localStorage as a single-item cart
      localStorage.setItem(
        "buyNowItem",
        JSON.stringify({ title, price, image })
      );
  
      // Redirect to checkout page
      window.location.href = "checkout.html";
    }
  });
  