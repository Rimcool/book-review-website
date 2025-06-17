// Data for Romance Books
const books =  [
    {
      id :52,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A classic tale of love, misunderstandings, and societal expectations.",
      image: "image/pride and prejidce.jpg",
      price: "RS:2,450"
    },
    {
      id :53,
      title: "The Notebook",
      author: "Nicholas Sparks",
      description: "A heartwarming story of enduring love.",
      image: "image/the notebook.jpg",
      price: "RS:1,950"
    },
    {
      id :54,
      title: "It Ends with Us",
      author: "Colleen Hoover",
      description: "A contemporary romance with themes of love and resilience.",
      image: "image/it end with us.jpg",
      price: "RS:1,450"
    },
    {
      id :55,
      title: "Me Before You",
      author: "Jojo Moyes",
      description: "A bittersweet love story that challenges perceptions of happiness.",
      image: "image/me before you.jpg",
      price: "RS:3,450"
    },
    {
      id :56,
      title: "The Hating Game",
      author: "Sally Thorne",
      description: "A fun enemies-to-lovers workplace romance.",
      image: "image/the hating game.jpg",
      price: "RS:1,850"
    },
  
    {
      id :57,
      title: "The Rosie Project",
      author: "Graeme Simsion",
      description: "A quirky love story about a socially awkward genetics professor.",
      image: "image/the rosie project.jpg",
      price: "RS:2,450"
    },
    {
      id :58,
      title: "Archer's Voice",
      author: "Mia Sheridan",
      description: "A touching romance about healing and acceptance.",
      image: "image/archer's voice.jpg",
      price: "RS:1,950"
    },
    {
      id :59,
      title: "Ayesha at Last",
      author: "Uzma Jalaluddin",
      description: "A Muslim retelling of Pride and Prejudice with cultural twists.",
      image: "image/ayesha at last.jpg",
      price: "RS:1,550"
    },
    {
      id :60,
      title: "The Light We Lost",
      author: "Jill Santopolo",
      description: "A poignant story of love and choices.",
      image: "image/the light we lost.jpg",
      price: "RS:4,450"
    },
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
 