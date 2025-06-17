const books = [
    {
        id :190,  
      title: "Watchmen",
      author: "Alan Moore, Dave Gibbons",
      description: "A groundbreaking deconstruction of the superhero genre, 'Watchmen' explores themes of power, morality, and identity in an alternate history where superheroes exist.",
      image: "image/Watchmen.jpg",
      price: 3500,
    },
    {
        id :191,  
      title: "Batman: The Killing Joke",
      author: "Alan Moore, Brian Bolland",
      description: "A chilling exploration of the Joker's origin and his attempt to prove that anyone can become insane after one bad day.",
      image: "image/BatmanThe Killing Joke.jpg",
      price: 2500,
    },
    {
        id :192,  
      title: "Saga, Vol. 1",
      author: "Brian K. Vaughan, Fiona Staples",
      description: "A stunning space opera that blends fantasy and sci-fi, following two lovers from warring planets as they try to protect their child.",
      image: "image/Saga, Vol. 1.jpg",
      price: 2800,
    },
    {
        id :193,  
      title: "Maus",
      author: "Art Spiegelman",
      description: "A Pulitzer Prize-winning graphic novel that depicts the Holocaust through the lens of mice and cats, telling a deeply personal and harrowing story.",
      image: "image/Maus.jpg",
      price: 3000,
    },
    {
        id :194,  
      title: "Nimona",
      author: "Noelle Stevenson",
      description: "A quirky and fun adventure featuring a shapeshifting sidekick who teams up with a villain, leading to unexpected twists and heartfelt moments.",
      image: "image/Nimona.jpg",
      price: 2200,
    },
    {
        id :195,  
      title: "Daytripper",
      author: "Fábio Moon, Gabriel Bá",
      description: "An emotional and poetic graphic novel that explores life, love, and death through the eyes of an obituary writer.",
      image: "image/Daytripper.jpg",
      price: 2700,
    },
    {
        id :196,  
      title: "Paper Girls, Vol. 1",
      author: "Brian K. Vaughan, Cliff Chiang",
      description: "A nostalgic sci-fi adventure that follows a group of newspaper delivery girls caught up in a mysterious time-traveling conspiracy.",
      image: "image/Paper Girls, Vol. 1.jpg",
      price: 2600,
    },
    {
        id :197,  
      title: "The Umbrella Academy, Vol. 1: Apocalypse Suite",
      author: "Gerard Way, Gabriel Bá",
      description: "A group of super-powered siblings reunites after their father's death to uncover shocking secrets and prevent an impending apocalypse.",
      image: "image/The Umbrella Academy, Vol. 1 Apocalypse Suite.jpg",
      price: 2900,
    },
    {
        id :198,  
      title: "Sandman, Vol. 1: Preludes & Nocturnes",
      author: "Neil Gaiman",
      description: "A dark and mystical journey through dreams, as Morpheus, the Lord of Dreams, escapes captivity and sets out to reclaim his realm.",
      image: "image/Sandman, Vol. 1 Preludes & Nocturnes.jpg",
      price: 3300,
    },
    {
        id :199,  
      title: "Bone, Vol. 1: Out from Boneville",
      author: "Jeff Smith",
      description: "A charming and whimsical fantasy adventure following three cousins who find themselves in a strange valley filled with magic and danger.",
      image: "image/Bone, Vol. 1 Out from Boneville.jpg",
      price: 2400,
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
