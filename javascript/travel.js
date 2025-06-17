const books = [
    {
        id :148,
      title: "Into the Wild",
      author: "Jon Krakauer",
      description: "A true story of a young man who ventured into the Alaskan wilderness in search of meaning and adventure.",
      image: "image/into the wild.jpg",
      price: 2200,
    },
    {
        id :149,
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A philosophical travel novel about a shepherd's journey to find treasure and his personal legend.",
      image: "image/the alechemist.jpg",
      price: 1800,
    },
    {
        id :150,
      title: "In Patagonia",
      author: "Bruce Chatwin",
      description: "A classic travelogue about the author's fascinating journey through Patagonia, filled with history and adventure.",
      image: "image/In Patagonia.jpg",
      price: 2500,
    },
    {
        id :151,
      title: "The Geography of Bliss",
      author: "Eric Weiner",
      description: "A humorous travel book exploring the world's happiest places and the people who live there.",
      image: "image/The Geography of Bliss.jpg",
      price: 2100,
    },
    {
        id :152,
      title: "Vagabonding",
      author: "Rolf Potts",
      description: "A practical guide to long-term world travel, emphasizing the importance of experiences over possessions.",
      image: "image/Vagabonding.jpg",
      price: 2300,
    },
    {
        id :153,
      title: "A Short Walk in the Hindu Kush",
      author: "Eric Newby",
      description: "A humorous travel memoir about an amateur adventurer's expedition into the Hindu Kush mountains.",
      image: "image/A Short Walk in the Hindu Kush.jpg",
      price: 2000,
    },
    {
        id :154,
      title: "The Snow Leopard",
      author: "Peter Matthiessen",
      description: "A spiritual and travel narrative about a journey through the Himalayas in search of the elusive snow leopard.",
      image: "image/The Snow Leopard.jpg",
      price: 2400,
    },
    {
        id :155,
      title: "The Art of Travel",
      author: "Alain de Botton",
      description: "A philosophical exploration of why we travel and what we gain from it, blending personal anecdotes with insights from great thinkers.",
      image: "image/The Art of Travel.jpg",
      price: 1950,
    },
    {
        id :156,
      title: "Arabian Sands",
      author: "Wilfred Thesiger",
      description: "A fascinating account of the author's journey across the Empty Quarter of Arabia, experiencing the Bedouin way of life.",
      image: "image/Arabian Sands.jpg",
      price: 2700,
    },
    {
        id :157,
      title: "Blue Highways",
      author: "William Least Heat-Moon",
      description: "An American road trip memoir that explores the culture, history, and people of the less-traveled roads of the USA.",
      image: "image/Blue Highways.jpg",
      price: 2200,
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
