const books = [
    {
        id :118,
      title: "Atomic Habits",
      author: "James Clear",
      description: "An easy and proven way to build good habits and break bad ones.",
      image: "image/Atomic Habits.jpg",
      price: 2500,
    },
    {
        id :119,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      description: "A guide to spiritual enlightenment and living in the present moment.",
      image: "image/The Power of Now.jpg",
      price: 1800,
    },
    {
        id :120,
      title: "Think Like a Monk",
      author: "Jay Shetty",
      description: "Train your mind for peace and purpose every day.",
      image: "image/Think Like a Monk.jpg",
      price: 2200,
    },
    {
        id :121,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      description: "A counterintuitive approach to living a good life.",
      image: "image/the subtle art of not giving a f.png",
      price: 2000,
    },
    {
        id :122,
      title: "Deep Work",
      author: "Cal Newport",
      description: "Rules for focused success in a distracted world.",
      image: "image/Deep Work.jpg",
      price: 2300,
    },
    {
        id :123,
      title: "The Untethered Soul",
      author: "Michael A. Singer",
      description: "The journey beyond yourself.",
      image: "image/The Untethered Soul.jpg",
      price: 2100,
    },
    {
        id :124,
      title: "Man's Search for Meaning",
      author: "Viktor E. Frankl",
      description: "A psychologist's memoir and lessons on finding purpose in life.",
      image: "image/Man's Search for Meaning.jpg",
      price: 1700,
    },
    {
        id :125,
      title: "The Mountain Is You",
      author: "Brianna Wiest",
      description: "Transforming self-sabotage into self-mastery.",
      image: "image/The Mountain Is You.png",
      price: 1900,
    },
    {
        id :126,
      title: "You Are a Badass",
      author: "Jen Sincero",
      description: "How to stop doubting your greatness and start living an awesome life.",
      image: "image/You Are a Badass.jpg",
      price: 2000,
    },
    {
        id :127,
      title: "Ikigai",
      author: "Héctor García and Francesc Miralles",
      description: "The Japanese secret to a long and happy life.",
      image: "image/Ikigai.jpg",
      price: 1600,
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
