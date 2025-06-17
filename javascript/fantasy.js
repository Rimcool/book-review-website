// Updated book data
const books = [
    {
      id: 1,
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      description: "A gifted musician and magician recounts his journey to becoming a legend.",
      image: "image/the name of wind.jpeg",
      price: "RS:1,099"
    },
    {
      id: 2,
      title: "Mistborn: The Final Empire",
      author: "Brandon Sanderson",
      description: "A street thief discovers her magical powers and joins a rebellion.",
      image: "image/Mistborn.jpeg",
      price: "$12.99"
    },
    {
      id: 3,
      title: "The Priory of the Orange Tree",
      author: "Samantha Shannon",
      description: "An epic tale of dragons, queens, and forbidden magic.",
      image: "image/The Priory of the Orange Tree.jpg",
      price: "RS:1,599"
    },
    {
      id: 4,
      title: "The Night Circus",
      author: "Erin Morgenstern",
      description: "Two magicians locked in a mysterious competition create a dazzling circus.",
      image: "image/The Night Circus.jpg",
      price: "RS:1,499"
    },
    {
      id: 5,
      title: "A Song of Ice and Fire (Game of Thrones)",
      author: "George R.R. Martin",
      description: "A gritty tale of power, betrayal, and survival in a medieval world.",
      image: "image/A Song of Ice and Fire (Game of Thrones).jpg",
      price: "RS:1,999"
    },
    {
      id: 6,
      title: "Spinning Silver",
      author: "Naomi Novik",
      description: "A creative retelling of Rumpelstiltskin, following a young woman who turns silver into gold.",
      image: "image/Spinning Silver.jpg",
      price: "RS:1,399"
    },
    {
      id: 7,
      title: "The Bone Season",
      author: "Samantha Shannon",
      description: "A clairvoyant girl is captured and enslaved by a race of otherworldly beings.",
      image: "image/The Bone Season.jpg",
      price: "RS:1,199"
    },
    {
      id: 8,
      title: "The Library of the Unwritten",
      author: "A.J. Hackwith",
      description: "An unfinished book escapes its library, and a librarian must retrieve it.",
      image: "image/The Library of the Unwritten.jpg",
      price: "RS:1,249"
    },
    {
      id: 9,
      title: "Uprooted",
      author: "Naomi Novik",
      description: "A village girl is chosen by a mysterious wizard to serve in his tower, discovering her own magical power.",
      image: "image/Uprooted.jpg",
      price: "RS:1,699"
    },
  { id: 10,
      title: "The Golem and the Jinni",
      author: "Helene Wecker",
      description: "A mystical tale of a golem and a jinni struggling to fit into 19th-century New York City.",
      image: "image/The Golem and the Jinni.jpg",
      price: "RS:1,449"
    },
    {
      id: 11,
      title: "The Ocean at the End of the Lane",
      author: "Neil Gaiman",
      description: "A haunting story of childhood memories, a mysterious pond, and ancient powers.",
      image: "image/The Ocean at the End of the Lane.jpg",
      price: "RS:1,349"
    },
    {
      id: 12,
      title: "Sorcery of Thorns",
      author: "Margaret Rogerson",
      description: "In a world where books of magic can come alive, an apprentice librarian must team up with a sorcerer.",
      image: "image/Sorcery of Thorns.jpg",
      price: "RS:1,499"
    },
    {
      id: 13, 
      title: "Elantris",
      author: "Brandon Sanderson",
      description: "Once a city of gods, Elantris has fallen into decay. A prince uncovers the truth behind its collapse.",
      image: "image/Elantris.jpg",
      price: "RS:1,199"
    },
    {
      id: 14,
      title: "City of Stairs",
      author: "Robert Jackson Bennett",
      description: "In a city where gods were once real but are now dead, a spy uncovers dangerous secrets.",
      image: "image/City of Stairs.jpg",
      price: "$1,399"
    },
    {
      id: 15,
      title: "The Paper Magician",
      author: "Charlie N. Holmberg",
      description: "An apprentice magician specializing in paper magic discovers the true power of her craft.",
      image: "image/The Paper Magician.jpg",
      price: "RS:999"
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
  