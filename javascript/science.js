const books = [
    {
        id :128,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      description: "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking's book explores the origins and structure of the universe.",
      image: "image/A Brief History of Time.jpg",
      price: 1500,
    },
    {
        id :129,
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      description: "A brilliant exploration of evolution and the role of genes in shaping the behavior of living organisms.",
      image: "image/The Selfish Gene.jpg",
      price: 1200,
    },
    {
        id :130,
      title: "Cosmos",
      author: "Carl Sagan",
      description: "Carl Sagan takes you on a journey through the universe, revealing the science and history behind our understanding of the cosmos.",
      image: "image/Cosmos.jpg",
      price: 1800,
    },
    {
        id :131,
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      description: "The story of Henrietta Lacks and how her cells became one of the most important tools in medicine.",
      image: "image/The Immortal Life of Henrietta Lacks.jpg",
      price: 1000,
    },
    {
        id :132,
      title: "Surely You're Joking, Mr. Feynman!",
      author: "Richard P. Feynman",
      description: "The quirky memoirs of a Nobel Prize-winning physicist, filled with humor and fascinating anecdotes.",
      image: "image/Surely You're Joking, Mr. Feynman.jpg",
      price: 1400,
    },
    {
        id :133,
      title: "The Gene: An Intimate History",
      author: "Siddhartha Mukherjee",
      description: "A sweeping history of genetics and its implications for humanity's future.",
      image: "image/The Gene An Intimate History.jpg",
      price: 1600,
    },
    {
        id :134,
      title: "The Emperor of All Maladies",
      author: "Siddhartha Mukherjee",
      description: "A biography of cancer, exploring its history, treatment, and impact on humanity.",
      image: "image/The Emperor of All Maladies.jpg",
      price: 1500,
    },
    {
        id :135,
      title: "Packing for Mars",
      author: "Mary Roach",
      description: "A humorous and insightful look at the bizarre challenges of space travel.",
      image: "image/Packing for Mars.jpg",
      price: 1300,
    },
    {
        id :136,
      title: "The Fabric of the Cosmos",
      author: "Brian Greene",
      description: "A deep dive into the nature of space, time, and reality itself.",
      image: "image/The Fabric of the Cosmos.jpg",
      price: 1700,
    },
    {
        id :137,
      title: "Lab Girl",
      author: "Hope Jahren",
      description: "A memoir about the joys and struggles of a woman in science, filled with insights into plant life and personal growth.",
      image: "image/Lab Girl.jpg",
      price: 1100,
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
