const books  = [
    {
        id :158,
      title: "Salt, Fat, Acid, Heat",
      author: "Samin Nosrat",
      description: "A masterful guide to the four elements of good cooking, with stunning illustrations and practical techniques.",
      image: "image/Salt, Fat, Acid, Heat.jpg",
      price: 4500,
    },
    {
        id :159,
      title: "The Food Lab",
      author: "J. Kenji López-Alt",
      description: "A scientific approach to home cooking, with detailed explanations and recipes for perfect results.",
      image: "image/The Food Lab.jpg",
      price: 5200,
    },
    {
        id :160,
      title: "Indian-ish",
      author: "Priya Krishna",
      description: "A vibrant cookbook blending Indian flavors with modern twists, perfect for home cooks.",
      image: "image/Indian-ish.jpg",
      price: 3500,
    },
    {
        id :161,
      title: "Six Seasons: A New Way with Vegetables",
      author: "Joshua McFadden",
      description: "A seasonal guide to cooking with vegetables, offering unique and delicious recipes.",
      image: "image/Six Seasons A New Way with Vegetables.jpg",
      price: 4000,
    },
    {
        id :162,
      title: "The Art of Fermentation",
      author: "Sandor Ellix Katz",
      description: "An in-depth exploration of fermentation techniques from around the world.",
      image: "image/The Art of Fermentation.jpg",
      price: 6000,
    },
    {
        id :163,
      title: "Midnight Chicken",
      author: "Ella Risbridger",
      description: "A touching memoir interwoven with comforting recipes for the soul.",
      image: "image/Midnight Chicken.jpg",
      price: 3800,
    },
    {
        id :164,
      title: "Vegetable Kingdom",
      author: "Bryant Terry",
      description: "A plant-based cookbook celebrating vibrant flavors and sustainability.",
      image: "image/Vegetable Kingdom.jpg",
      price: 4300,
    },
    {
        id :165,
      title: "Honey & Co: The Baking Book",
      author: "Itamar Srulovich & Sarit Packer",
      description: "A delightful collection of Middle Eastern-inspired baking recipes.",
      image: "image/Honey & Co The Baking Book.jpg",
      price: 3900,
    },
    {
        id :166,
      title: "Bread Baking for Beginners",
      author: "Bonnie Ohara",
      description: "An easy-to-follow guide to baking delicious bread at home.",
      image: "image/Bread Baking for Beginners.jpg",
      price: 2800,
    },
    {
        id :167,
      title: "Korean Home Cooking",
      author: "Sohui Kim",
      description: "Authentic Korean recipes made accessible for home cooks.",
      image: "image/Korean Home Cooking.jpg",
      price: 4700,
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
