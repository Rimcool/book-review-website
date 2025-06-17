// Data for authors
const authors = [
    {
      name: "Renuka Gavrani ",
      image: "image/renuka gavrani.webp", // Link to the image
      intro: "I am Renuka Gavrani. I am an author who now wants to be a blogger. I have always dreamt of starting my own blog",
      wikiLink: "https://www.renukagavrani.com/"
    },
    {
      name: "Author Name 2",
      image: "author-image2.jpg", // Link to the image
      intro: "Short intro about Author 2.",
      wikiLink: "https://en.wikipedia.org/wiki/Author_Name_2"
    },
    {
      name: "Author Name 3",
      image: "author-image3.jpg", // Link to the image
      intro: "Short intro about Author 3.",
      wikiLink: "https://en.wikipedia.org/wiki/Author_Name_3"
    }
    // Add more authors as needed
  ];
  
  // Function to generate the author cards dynamically
  function createAuthorCards() {
    const container = document.querySelector('.authors-container'); // Select the container
    authors.forEach(author => {
      const card = document.createElement('div');
      card.classList.add('author-card');
  
      card.innerHTML = `
        <img src="${author.image}" alt="${author.name}" class="author-img">
        <h3 class="author-name">${author.name}</h3>
        <p class="author-intro">${author.intro}</p>
        <a href="${author.wikiLink}" class="explore-btn" target="_blank">Want to Explore More</a>
      `;
      container.appendChild(card);
    });
  }
  
  // Call the function to populate the authors' corner
  createAuthorCards();
  