const books =[
    {
        id :106,
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      description: "The diary of Anne Frank, a Jewish teenager, who chronicled her life in hiding during the Nazi occupation of the Netherlands.",
      image: "image/The Diary of a Young Girl.jpg",
      price: 1500,
    },
    {
        id :107,
      title: "Becoming",
      author: "Michelle Obama",
      description: "An intimate, powerful, and inspiring memoir by the former First Lady of the United States.",
      image: "image/Becoming.jpg",
      price: 2200,
    },
    {
        id :108,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      description: "A biography of Steve Jobs, the visionary entrepreneur and co-founder of Apple Inc.",
      image: "image/Steve Jobs.jpg",
      price: 1800,
    },
    {
        id :109,
      title: "Long Walk to Freedom",
      author: "Nelson Mandela",
      description: "The autobiography of Nelson Mandela, chronicling his early life, education, and 27 years in prison.",
      image: "image/Long Walk to Freedom.jpg",
      price: 2000,
    },
    {
        id :110,
      title: "Educated",
      author: "Tara Westover",
      description: "A memoir about a young woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the world through education.",
      image: "image/Educated.jpg",
      price: 1700,
    },
    {
        id :111,
      title: "The Glass Castle",
      author: "Jeannette Walls",
      description: "A memoir about growing up in a dysfunctional family with an alcoholic father and an eccentric artist mother.",
      image: "image/The Glass Castle.jpg",
      price: 1600,
    },
    {
        id :112,
      title: "I Am Malala",
      author: "Malala Yousafzai",
      description: "The story of Malala Yousafzai, the youngest recipient of the Nobel Peace Prize, who stood up for education in Pakistan.",
      image: "image/I Am Malala.jpg",
      price: 1400,
    },
    {
        id :113,
      title: "Unbroken",
      author: "Laura Hillenbrand",
      description: "A World War II story of survival, resilience, and redemption, focusing on the life of Louis Zamperini.",
      image: "image/Unbroken.jpg",
      price: 1900,
    },
    {
        id :114,
      title: "Born a Crime",
      author: "Trevor Noah",
      description: "The memoir of Trevor Noah, born during apartheid in South Africa, detailing his life and comedic journey.",
      image: "image/Born a Crime.jpg",
      price: 1600,
    },
    {
        id :115,
      title: "When Breath Becomes Air",
      author: "Paul Kalanithi",
      description: "A poignant memoir of a young neurosurgeon faced with a terminal cancer diagnosis.",
      image: "image/When Breath Becomes Air.jpg",
      price: 1800,
    },
    {
        id :116,
      title: "Open",
      author: "Andre Agassi",
      description: "A candid autobiography of tennis legend Andre Agassi, exploring his struggles and triumphs on and off the court.",
      image: "image/open.jpg",
      price: 1700,
    },
    {
        id :117,
      title: "Man's Search for Meaning",
      author: "Viktor E. Frankl",
      description: "A memoir by a Holocaust survivor who explores the importance of finding meaning in life, even in the face of suffering.",
      image: "image/Man's Search for Meaning.jpg",
      price: 1500,
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
