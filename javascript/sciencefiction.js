// Updated book data
const books = [
    {
      id:16,
      title: "Dune",
      author: "Frank Herbert",
      description: "A masterpiece of political intrigue, religion, and ecology on the desert planet Arrakis.",
      image: "image/Dune-Frank_Herbert_(1965)_First_edition.jpg",
      price: "RS:3,099"
    },
    {
      id:17,
      title: "Ender’s Game",
      author: " Orson Scott Card",
      description: "A gripping tale of a child prodigy training for an intergalactic war.",
      image: "image/ender games book.jpg",
      price: "RS:3.299"
    },
    {
      id:18,
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    description: "A hard science fiction novel that explores first contact with an alien civilization.",
    image: "image/the three body problem.jpg",
    price: "RS:2,999"},
    {
      id:19,
        title: "Neuromancer",
        author: "William Gibson",
        description: "A seminal cyberpunk novel that explores artificial intelligence and virtual reality.",
        image: "image/Neuromancer.jpg",
        price: "RS:2,199"
    },
    {
    id:20,  
    title: "Foundation",
    author: "Isaac Asimov",
    description: "A complex saga of humans scattered on planets throughout the galaxy all living under the rule of the Galactic Empire.",
    image: "image/Foundation.jpg",
    price: "RS:2,499"
    },
    {
      id:21,
        title: "Snow Crash",
        author: "Neal Stephenson",
        description: "A fast-paced cyberpunk novel that explores a dystopian future dominated by corporations.",
        image: "image/the snowcrash.jpg",
        price: "RS:2,799"
    },
    {
      id:22,
        title: "Hyperion",
        author: "Dan Simmons",
        description: "A science fiction novel that follows seven pilgrims as they journey to the distant world of Hyperion.",
        image: "image/Hyperion.jpg",
        price: "RS:3,499"
    },
    {
      id:23,
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        description: "A groundbreaking novel that explores themes of gender and sexuality on a distant planet.",
        image: "image/The Left Hand of Darkness.jpg",
        price: "RS:2,899"
    },
    {
      id:24,
    title:"The Martian",
    author: "Andy Weir",
    description: "A survival story of an astronaut stranded on Mars.",
    image: "image/The_Martian_(Weir_novel).jpg",
    price: "RS:3,199"
    },
    {
      id:25,
    title: "1984",
    author : "George Orwell",
    description: "A dystopian novel set in a totalitarian society under constant surveillance.",
    image: "image/1984 book.jpg",
    price: "RS:2,599"
    },
    {
      id:26,
        title: "Brave New World",
        author: "Aldous Huxley",
        description: "A dystopian novel that explores a futuristic society driven by technological advancements and social engineering.",
        image: "image/brave new world.jpg",
        price: "RS:2,699"
    },
    {
        id:27,
        title: "The Blindsght",
        author: "Peter Watts",
        description: "A hard science fiction novel that explores the nature of consciousness and alien intelligence.",
        image: "image/blindsight.jpg",
        price: "RS:2,799"
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
  