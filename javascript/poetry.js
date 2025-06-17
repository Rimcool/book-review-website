const books  = [
    {
        id :168,
      title: "The Sun and Her Flowers",
      author: "Rupi Kaur",
      description: "A vibrant and transcendent journey about growth and healing, ancestry, and honoring one’s roots and expatriation.",
      image: "image/The Sun and Her Flowers.jpg",
      price: 1500
    },
    {
        id :169,
      title: "Milk and Honey",
      author: "Rupi Kaur",
      description: "A collection of poetry and prose about survival, love, loss, and femininity.",
      image: "image/Milk and Honey.jpg",
      price: 1200
    },
    {
        id :170,
      title: "Pillow Thoughts",
      author: "Courtney Peppernell",
      description: "A collection of poetry that speaks to the soul and touches on love, heartbreak, and healing.",
      image: "image/Pillow Thoughts.png",
      price: 1800
    },
    {
        id :171,
      title: "The Prophet",
      author: "Kahlil Gibran",
      description: "A timeless classic that explores deep themes of life, love, and spirituality through poetic prose.",
      image: "image/The Prophet.jpg",
      price: 2000
    },
    {
        id :172,
      title: "Night Sky with Exit Wounds",
      author: "Ocean Vuong",
      description: "A striking debut poetry collection exploring themes of identity, family, and the immigrant experience.",
      image: "image/Night Sky with Exit Wounds.jpg",
      price: 1700
    },
    {
        id :173,
      title: "If They Come in the Morning",
      author: "Angela Davis",
      description: "A powerful poetic and prose collection that discusses activism, justice, and freedom.",
      image: "image/If They Come in the Morning.jpg",
      price: 1900
    },
    {
        id :174,
      title: "A Thousand Mornings",
      author: "Mary Oliver",
      description: "A deeply reflective collection capturing the beauty of nature and life’s small moments.",
      image: "image/A Thousand Mornings.jpg",
      price: 1600
    },
    {
        id :175,
      title: "The Carrying",
      author: "Ada Limón",
      description: "A mesmerizing collection of poetry that explores themes of love, grief, and the natural world.",
      image: "image/The Carrying.jpg",
      price: 1800
    },
    {
        id :176,
      title: "The Octopus Museum",
      author: "Brenda Shaughnessy",
      description: "A daring and imaginative poetry collection that examines the future and our relationship with the world.",
      image: "image/The Octopus Museum.jpg",
      price: 2100
    },
    {
        id :177,
      title: "Soft Science",
      author: "Franny Choi",
      description: "A bold, genre-blending collection that explores identity, technology, and the human experience.",
      image: "image/Soft Science.jpg",
      price: 1900
    },
    {
        id :178,
      title: "Bang-e-Dra",
      author: "Allama Iqbal",
      description: "A collection of philosophical and revolutionary poetry by one of Pakistan’s greatest poets.",
      image: "image/Bang-e-Dra.jpg",
      price: 2200
    },
    {
        id :179,
      title: "Zarb-e-Kalim",
      author: "Allama Iqbal",
      description: "A powerful book of poetry that critiques modernity and offers spiritual awakening.",
      image: "image/Zarb-e-Kalim.jpg",
      price: 2300
    },
    {
        id :180,
      title: "Shah Jo Risalo",
      author: "Shah Abdul Latif Bhittai",
      description: "A beautiful collection of Sindhi poetry filled with spiritual wisdom and folklore.",
      image: "image/Shah Jo Risalo.jpg",
      price: 2500
    },
    {
        id :181,
      title: "Ghazals of Faiz Ahmed Faiz",
      author: "Faiz Ahmed Faiz",
      description: "A mesmerizing collection of ghazals and revolutionary poetry by one of Pakistan’s most celebrated poets.",
      image: "image/Ghazals of Faiz Ahmed Faiz.jpg",
      price: 2100
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
