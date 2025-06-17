const books = [
    {
        id :182,
        title: "Hamlet",
        author: "William Shakespeare",
        description: "A tragedy about Prince Hamlet's quest for revenge against his uncle Claudius, who has murdered his father, taken the throne, and married his mother.",
        image: "image/hamlet.jpg",
        price: 1500
    },
    {
        id :183,
        title: "A Doll's House",
        author: "Henrik Ibsen",
        description: "A play that critiques the traditional roles of men and women in 19th-century marriage, focusing on the life of Nora Helmer.",
        image: "image/A Doll's House.jpg",
        price: 1200
    },
    {
        id :184,
        title: "The Glass Menagerie",
        author: "Tennessee Williams",
        description: "A memory play that explores themes of family, reality vs. illusion, and the struggles of the Wingfield family.",
        image: "image/The Glass Menagerie.jpg",
        price: 1800
    },
    {
        id :185,
        title: "Death of a Salesman",
        author: "Arthur Miller",
        description: "A tragic play about Willy Loman, an aging salesman who struggles with reality and his failure to achieve the American Dream.",
        image: "image/Death of a Salesman.jpg",
        price: 1600
    },
    {
        id :186,
        title: "The Visit",
        author: "Friedrich Dürrenmatt",
        description: "A dark comedy-drama about a wealthy woman who returns to her impoverished hometown with a vengeful proposition.",
        image: "image/The Visit.jpg",
        price: 1400
    },
    {
        id :187,
        title: "Fences",
        author: "August Wilson",
        description: "A drama exploring race relations and generational conflicts within an African-American family in the 1950s.",
        image: "image/Fences.jpg",
        price: 1700
    },
    {
        id :188,
        title: "The Children's Hour",
        author: "Lillian Hellman",
        description: "A gripping drama about the destructive power of lies, as a child's false accusation ruins the lives of two teachers.",
        image: "image/The Children's Hour.jpg",
        price: 1300
    },
    {
        id :189,
        title: "Six Characters in Search of an Author",
        author: "Luigi Pirandello",
        description: "An experimental play that blurs the lines between reality and fiction, as six unfinished characters invade a stage production.",
        image: "image/Six Characters in Search of an Author.jpg",
        price: 1500
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
