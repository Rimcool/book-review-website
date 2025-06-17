const books = [
    {
      id :61,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description: "An exploration of the history of humanity, from the Stone Age to the modern era, focusing on the key developments that shaped our societies.",
      image: "image/sapien.jpg",
      price: 1500
    },
    {
      id :62,
      title: "Guns, Germs, and Steel: The Fates of Human Societies",
      author: "Jared Diamond",
      description: "A groundbreaking book that examines the environmental and geographical factors that influenced the development of civilizations.",
      image: "image/Guns, Germs, and Steel The Fates of Human Societies.jpg",
      price: 1800
    },
    {
      id :63,
      title: "The Silk Roads: A New History of the World",
      author: "Peter Frankopan",
      description: "A fresh perspective on history, focusing on the importance of the Silk Roads in connecting cultures and shaping the world.",
      image: "image/The Silk Roads A New History of the World.jpg",
      price: 2000
    },
    {
      id :64,
      title: "A People's History of the United States",
      author: "Howard Zinn",
      description: "A compelling narrative of American history told from the perspective of marginalized groups.",
      image: "image/A People's History of the United States.jpg",
      price: 1700
    },
    {
      id :65,
      title: "The History of the Ancient World",
      author: "Susan Wise Bauer",
      description: "A comprehensive account of ancient civilizations, from Mesopotamia to the fall of Rome.",
      image: "image/The History of the Ancient World.jpg",
      price: 2200
    },
    {
      id :66,
      title: "The Crusades: The Authoritative History of the War for the Holy Land",
      author: "Thomas Asbridge",
      description: "A detailed history of the Crusades, exploring the motivations and consequences of these epic conflicts.",
      image: "image/The Crusades The Authoritative History of the War for the Holy Land.jpg",
      price: 1900
    },
    {
      id :67,
      title: "The Wright Brothers",
      author: "David McCullough",
      description: "The inspiring story of Wilbur and Orville Wright, pioneers of aviation.",
      image: "image/The Wright Brothers.jpg",
      price: 1600
    },
    {
      id :68,
      title: "The Great Partition: The Making of India and Pakistan",
      author: "Yasmin Khan",
      description: "An insightful analysis of the Partition of India, one of the most significant events in South Asian history.",
      image: "image/The Great Partition The Making of India and Pakistan.jpg",
      price: 1800
    },
    {
      id :69,
      title: "Hidden Figures: The American Dream and the Untold Story of the Black Women Mathematicians Who Helped Win the Space Race",
      author: "Margot Lee Shetterly",
      description: "The true story of the African American women who played a crucial role in NASA's success during the space race.",
      image: "image/Hidden Figures The American Dream and the Untold Story of the Black Women Mathematicians.jpg",
      price: 1500
    },
    {
      id :70,
      title: "The Rape of Nanking: The Forgotten Holocaust of World War II",
      author: "Iris Chang",
      description: "A harrowing account of the atrocities committed during the Nanking Massacre in 1937.",
      image: "image/The Rape of Nanking The Forgotten Holocaust of World War II.jpg",
      price: 1700
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
