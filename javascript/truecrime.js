const books = [
    {
      id :138,
      title: "In Cold Blood",
      author: "Truman Capote",
      description: "A pioneering work of true crime literature that reconstructs the brutal 1959 murders of the Clutter family in Kansas.",
      image: "image/in cold blood.jpg",
      price: 2500 // in PKR
    },
    {
        id :139,
      title: "The Stranger Beside Me",
      author: "Ann Rule",
      description: "Ann Rule's chilling account of her friendship with Ted Bundy, one of the most infamous serial killers in history.",
      image: "image/The Stranger Beside Me.jpg",
      price: 2300
    },
    {
        id :140,
      title: "I'll Be Gone in the Dark",
      author: "Michelle McNamara",
      description: "A true crime masterpiece that chronicles the hunt for the Golden State Killer, written by the late Michelle McNamara.",
      image: "image/I'll Be Gone in the Dark.jpg",
      price: 2700
    },
    {
        id :141,
      title: "Mindhunter",
      author: "John E. Douglas & Mark Olshaker",
      description: "A fascinating look into the early days of criminal profiling at the FBI, written by the man who inspired the Netflix series.",
      image: "image/Mindhunter.jpg",
      price: 2600
    },
    {
        id :142,
      title: "The Devil in the White City",
      author: "Erik Larson",
      description: "A gripping narrative intertwining the 1893 Chicago World's Fair and the crimes of serial killer H.H. Holmes.",
      image: "image/The Devil in the White City.jpg",
      price: 2800
    },
    {
        id :143,
      title: "The Spider and the Fly",
      author: "Claudia Rowe",
      description: "A lesser-known but deeply psychological true crime book exploring the relationship between a journalist and a serial killer.",
      image: "image/The Spider and the Fly.jpg",
      price: 2100
    },
    {
        id :144,
      title: "American Predator",
      author: "Maureen Callahan",
      description: "An unsettling deep dive into Israel Keyes, one of the most meticulous and terrifying serial killers in modern history.",
      image: "image/American Predator.jpg",
      price: 2500
    },
    {
        id :145,
      title: "Lost Girls",
      author: "Robert Kolker",
      description: "A heartbreaking and investigative account of the Long Island serial killer case and the forgotten victims.",
      image: "image/Lost Girls.jpg",
      price: 2200
    },
    {
        id :146,
      title: "The Five: The Untold Lives of the Women Killed by Jack the Ripper",
      author: "Hallie Rubenhold",
      description: "A groundbreaking work that focuses on the lives of the women killed by Jack the Ripper, rather than the killer himself.",
      image: "image/The Five The Untold Lives of the Women Killed by Jack the Ripper.jpg",
      price: 2400
    },
    {
        id :147,
      title: "The Midnight Assassin",
      author: "Skip Hollandsworth",
      description: "A lesser-known but compelling account of America's first recorded serial killer in 1880s Austin, Texas.",
      image: "image/The Midnight Assassin.jpg",
      price: 2000
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
