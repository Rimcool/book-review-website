// script.js

// Function to load reviews from local storage
function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const reviewList = document.getElementById('review-list');

  // Clear existing reviews
  reviewList.innerHTML = '';

  // Add each review to the list
  reviews.forEach((review) => {
    const reviewElement = document.createElement('li');
    reviewElement.innerHTML = `
      <p><strong>Name:</strong> ${review.name}</p>
      <p><strong>Email:</strong> ${review.email}</p>
      <p><strong>Rating:</strong> ${review.rating}/5</p>
      <p>${review.text}</p>
    `;
    reviewList.appendChild(reviewElement);
  });
}

// Function to save a review to local storage
function saveReview(name, email, rating, text) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push({ name, email, rating, text });
  localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Handle form submission
document.getElementById('review-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const rating = document.getElementById('rating').value;
  const text = document.getElementById('review').value;

  // Save the review to local storage
  saveReview(name, email, rating, text);

  // Reload reviews
  loadReviews();

  // Clear form fields
  document.getElementById('review-form').reset();
});

// Load reviews on page load
window.addEventListener('DOMContentLoaded', loadReviews);
