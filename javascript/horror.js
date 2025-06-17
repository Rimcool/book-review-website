const books = [
    {
      id :71,
      title: "Dracula",
      author: "Bram Stoker",
      description: "A gothic horror novel introducing the iconic vampire Count Dracula.",
      image: "image/dracula.jpg",
      price: 1500,
    },
    {
      id :72,
      title: "Frankenstein",
      author: "Mary Shelley",
      description: "The story of Victor Frankenstein and his monstrous creation.",
      image: "image/Frankenstein.jpg",
      price: 1300,
    },
    {
      id :73,
      title: "The Shining",
      author: "Stephen King",
      description: "A family is trapped in a haunted hotel during winter.",
      image: "image/The Shining.jpg",
      price: 1800,
    },
    {
      id :74,
      title: "House of Leaves",
      author: "Mark Z. Danielewski",
      description: "A labyrinthine horror story about a mysterious house.",
      image: "image/House of Leaves.jpg",
      price: 2000,
    },
    {
      id :75,
      title: "Bird Box",
      author: "Josh Malerman",
      description: "A post-apocalyptic horror story where sight can kill you.",
      image: "image/Bird Box.jpg",
      price: 1700,
    },
    {
      id :76,
      title: "The Haunting of Hill House",
      author: "Shirley Jackson",
      description: "A psychological horror about a haunted mansion.",
      image: "image/The Haunting of Hill House.jpg",
      price: 1600,
    },
    {
      id :77,
      title: "Mexican Gothic",
      author: "Silvia Moreno-Garcia",
      description: "A gothic horror set in a decaying mansion in Mexico.",
      image: "image/mexican gothic.jpg",
      price: 1900,
    },
    {
      id :78,
      title: "The Silent Companions",
      author: "Laura Purcell",
      description: "A Victorian ghost story with a creepy wooden figure.",
      image: "image/the silent companion.jpg",
      price: 1400,
    },
    {
      id :79,
      title: "Horrorstör",
      author: "Grady Hendrix",
      description: "A horror-comedy set in a haunted furniture store.",
      image: "image/horrorstor.jpg",
      price: 1500,
    },
    {
      id :80,
      title: "The Only Good Indians",
      author: "Stephen Graham Jones",
      description: "A horror story blending Native American culture and supernatural elements.",
      image: "image/the only good indian.jpg",
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
  