// Updated book data
const books = [
    {
      id :40,
      title: "",
      author: "",
      description: "",
      image: "",
      price: "RS:1,299"
    },
    {
      id :41,
      title: "Sharp Objects",
      author: "Gillian Flynn",
      description: "A journalist returns to her hometown to investigate a series of murders.",
      image: "image/Sharp Objects.jpg",
      price: "RS:2,299"
    },
    {
      id :42,
      title: "",
      author: "",
      description: "",
      image: "",
      price: "RS:3,299"
    },
    {
      id :43,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      description: "A psychological thriller about a woman who stops speaking after being accused of murdering her husband.",
      image: "image/The Silent Patient.jpg",
      price: "RS:1,499"
    },
    {
      id :44,
      title: "Big Little Lies",
    author: "Liane Moriarty",
    description: "A gripping tale of three women whose lives unravel in the face of secrets and lies.",
    image: "image/Big Little Lies.jpg",
    price: "RS:1,799"
    },
    {
      id :45,
    title: "And Then There Were None",
    author: "Agatha Christie",
    description: "Ten strangers are invited to a remote island, where they are accused of crimes and start dying one by one.",
    image: "image/And Then There Were None.jpg",
    price: "RS:1,599"
    },
    {
      id :46,
      title:"The 7 1/2 Deaths of Evelyn Hardcastle",
    author: "Stuart Turton",
    description: "A unique mystery where a man must solve a murder by living the same day over and over again in different bodies.",
    image: "image/The 7 ½ Deaths of Evelyn Hardcastle.png",
    price: "RS:1,899"
    },
    {
      id :47,
     title:"In The Woods",
     author:"Tana French",
     description:"A dark, atmospheric story of a detective confronting his past while solving a murder. ",
    image:"image/In the Woods.jpg",
    price:"RS:2,143"
    },
    {
      id :48,
     title:"The Sweetness at the Bottom of the Pie",
     author:"Alan Bradley",
     description:"A quirky mystery featuring an 11-year-old amateur detective, Flavia de Luce.",
     image:"image/The Sweetness at the Bottom of the Pie.jpg",
     price:"RS:2,350"
    },
    {
      id :49,
      title:"The Word Is Murder",
      author:"Anthony Horowitz",
      description:"A meta-mystery where the author inserts himself as a character in the investigation.",
      image:"image/The Word Is Murder.jpg",
      price:"RS:2,190"
    },
    {
      id :50,
      title:"Before She Knew Him",
      author:"Peter Swanson",
      description:"A chilling story about a woman who suspects her neighbor is a killer.",
      image:"image/Before She Knew Him.jpg",
      price:"RS:1,290"
    },
    {
      id :51,
      title:"Bluebird, Bluebird",
      author:"Attica Locke",
      description:"A compelling story of race, justice, and murder in East Texas.",
      image:"image/Bluebird, Bluebird.jpg",
      price:"RS:4,500"
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
  