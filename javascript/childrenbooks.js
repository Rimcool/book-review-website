const books = [
    {
      id : 91,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      description: "A young boy discovers he's a wizard on his 11th birthday and attends Hogwarts School of Witchcraft and Wizardry.",
      image: "image/Harry Potter and the Philosopher's Stone.jpg",
      price: 1200, // Price in PKR
    },
    {
      id : 92,
      title: "Charlotte's Web",
      author: "E.B. White",
      description: "A touching story of friendship between a pig named Wilbur and a spider named Charlotte.",
      image: "image/Charlotte's Web.jpg",
      price: 900,
    },
    {
      id : 93,
      title: "The Gruffalo",
      author: "Julia Donaldson",
      description: "A clever mouse takes a walk through the woods and avoids danger by inventing a monster.",
      image: "image/The Gruffalo.jpg",
      price: 700,
    },
    {
      id : 94,
      title: "Wonder",
      author: "R.J. Palacio",
      description: "A heartwarming tale of a boy with facial differences navigating school for the first time.",
      image: "image/Wonder.jpg",
      price: 1500,
    },
    {
      id : 95,
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      description: "A philosophical tale about a young prince exploring the universe and discovering life's truths.",
      image: "image/The Little Prince.jpg",
      price: 800,
    },
    {
      id : 96,
      title: "Goodnight Moon",
      author: "Margaret Wise Brown",
      description: "A soothing bedtime story that has charmed generations of children.",
      image: "image/goodnight moon.jpg",
      price: 600,
    },
    {
      id : 97,
      title: "Matilda",
      author: "Roald Dahl",
      description: "The story of a brilliant girl with telekinetic powers overcoming adversity.",
      image: "image/Matilda.jpg",
      price: 1100,
    },
    {
      id : 98,
      title: "The Tale of Peter Rabbit",
      author: "Beatrix Potter",
      description: "The classic misadventures of a young rabbit named Peter.",
      image: "image/The Tale of Peter Rabbit.jpg",
      price: 500,
    },
    {
      id : 99,
      title: "Where the Wild Things Are",
      author: "Maurice Sendak",
      description: "A young boy's adventure to an island of wild creatures and his eventual return home.",
      image: "image/Where the Wild Things Are.jpg",
      price: 1000,
    },
    {
      id : 100,
      title: "The Pigeon Has to Go to School!",
      author: "Mo Willems",
      description: "A humorous story about a pigeon reluctant to go to school.",
      image: "image/The Pigeon Has to Go to School.jpg",
      price: 750,
    },
    // Unpopular books
    {
      id : 101,
      title: "The Paper Bag Princess",
      author: "Robert Munsch",
      description: "A princess saves the day in this empowering story that flips traditional roles.",
      image: "image/The Paper Bag Princess.jpg",
      price: 650,
    },
    {
      id : 102,
      title: "Flora and Ulysses",
      author: "Kate DiCamillo",
      description: "A squirrel with superpowers changes the life of a young girl.",
      image: "image/Flora and Ulysses.jpg",
      price: 1200,
    },
    {
      id : 103,
      title: "The Miraculous Journey of Edward Tulane",
      author: "Kate DiCamillo",
      description: "The adventures of a porcelain rabbit learning about love and loss.",
      image: "image/The Miraculous Journey of Edward Tulane.jpg",
      price: 1300,
    },
    {
      id : 104,
      title: "Grandpa Green",
      author: "Lane Smith",
      description: "A story about family history told through a boy and his great-grandfather's garden.",
      image: "image/Grandpa Green.jpg",
      price: 850,
    },
    {
      id : 105,
      title: "Journey",
      author: "Aaron Becker",
      description: "A wordless picture book about a girl’s magical adventure through stunning landscapes.",
      image: "image/Journey.jpg",
      price: 950,
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
   