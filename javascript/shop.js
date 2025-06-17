//visitor Count//
var count = localStorage.getItem('Counter')||0
var c = ++count
localStorage.setItem('Counter',c)
var mycount = localStorage.getItem('Counter')
document.getElementById('visitortext').innerText = mycount

//Date //
function mytimer()
{
    var mydate = new Date()
document.getElementById("datetext").innerText = mydate
}
setInterval(mytimer,1000)
// Sample JSON Data
const genres = [
  { name: "Fantasy", image: "image/fantasy.jpeg", link: "fantasy.html" },
  { name: "Science Fiction", image: "image/sci-fi.jpeg", link: "sciencefiction.html" },
  { name: "Mystery", image: "image/mystery.jpeg", link: "mystery.html" },
  { name: "Thriller", image: "image/thriller.jpeg", link: "thriller.html" },
  { name: "Romance", image: "image/romance.jpeg", link: "romance.html" },
  { name: "History", image: "image/history.jpeg", link: "history.html" },
  { name: "Horror", image: "image/horror.jpeg", link: "horror.html" },
  { name: "Adventure", image: "image/adventure.jpeg", link: "adventure.html" },
  { name: "Children Books", image: "image/children books.jpeg", link: "childrenbooks.html" },
  { name: "Biography", image: "image/biography.jpeg", link: "biography.html" },
  { name: "Self-Help", image: "image/self-help.jpeg", link: "self-help.html" },
  { name: "Science", image: "image/science.jpeg", link: "science.html" },
  { name: "True Crime", image: "image/true crime.jpeg", link: "truecrime.html" },
  { name: "Travel", image: "image/travel.jpeg", link: "travel.html" },
  { name: "Cooking/Food", image: "image/cooking.jpeg", link: "food.html" },
  { name: "Poetry", image: "image/peotry.jpeg", link: "poetry.html" },
  { name: "Drama", image: "image/drama.jpeg", link: "drama.html" },
  { name: "Comic's", image: "image/comics.jpeg", link: "comic's.html" }
];

// Function to Create Cards
function createCards(data) {
  const container = document.getElementById('genre-cards');

  data.forEach(genre => {
    // Create card element
    const card = document.createElement('div');
    card.className = 'genre-card';

    // Add content to the card
    card.innerHTML = `
      <a href="${genre.link}">
        <img src="${genre.image}" alt="${genre.name}">
        <div class="caption">${genre.name}</div>
      </a>
    `;

    // Append card to container
    container.appendChild(card);
  });
}

// Call the function with the JSON data
createCards(genres);
fetch('genres.json')
  .then(response => response.json())
  .then(data => createCards(data))
  .catch(error => console.error('Error loading JSON:', error));
