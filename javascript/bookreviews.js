document.addEventListener("DOMContentLoaded", () => {
  const submitReviewBtn = document.getElementById("submit-review");
  const reviewsContainer = document.getElementById("reviews-container");
  const stars = document.querySelectorAll(".star");
  const messageContainer = document.getElementById("message-container");
  let selectedRating = 0;

  // Check if user is logged in
  function isUserLoggedIn() {
      return localStorage.getItem("user") !== null;
  }

  // Redirect to login if not logged in
  if (!isUserLoggedIn()) {
      alert("You must be logged in to submit a review!");
      const currentUrl = window.location.href;
      window.location.href = `login.html?redirect=${encodeURIComponent(currentUrl)}`;
      return;
  }

  // Handle star rating selection
  stars.forEach((star) => {
      star.addEventListener("click", () => {
          selectedRating = parseInt(star.dataset.value);
          updateStarDisplay(selectedRating);
      });
  });

  function updateStarDisplay(rating) {
      stars.forEach((star) => {
          star.style.color = star.dataset.value <= rating ? "#FFD700" : "#ccc";
      });
  }

  // Load existing reviews from localStorage
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.forEach(addReviewToDOM);

  // Event listener for submitting a review
  submitReviewBtn.addEventListener("click", () => {
      if (!isUserLoggedIn()) {
          alert("You must be logged in to submit a review!");
          const currentUrl = window.location.href;
          window.location.href = `login.html?redirect=${encodeURIComponent(currentUrl)}`;
          return;
      }

      const userName = document.getElementById("user-name").value;
      const bookName = document.getElementById("book-name").value;
      const bookAuthor = document.getElementById("book-author").value;
      const reviewText = document.getElementById("review-text").value;
      const bookImage = document.getElementById("book-image").files[0];

      if (!userName || !bookName || !bookAuthor || !reviewText || !bookImage || selectedRating === 0) {
          alert("Please fill out all fields and select a rating!");
          return;
      }

      const reader = new FileReader();
      reader.onload = () => {
          const review = {
              userName,
              bookName,
              bookAuthor,
              reviewText,
              rating: selectedRating,
              bookImage: reader.result,
          };

          savedReviews.push(review);
          localStorage.setItem("reviews", JSON.stringify(savedReviews));
          addReviewToDOM(review);

          document.getElementById("user-name").value = "";
          document.getElementById("book-name").value = "";
          document.getElementById("book-author").value = "";
          document.getElementById("review-text").value = "";
          document.getElementById("book-image").value = "";
          selectedRating = 0;
          updateStarDisplay(0);
      };
      reader.readAsDataURL(bookImage);
  });

  function addReviewToDOM(review) {
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("review-card");

      const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

      reviewCard.innerHTML = `
          <img src="${review.bookImage}" alt="Book Image">
          <div>
              <h3>${review.userName}</h3>
              <p><strong>Book:</strong> ${review.bookName}</p>
              <p><strong>Author:</strong> ${review.bookAuthor}</p>
              <p>${review.reviewText}</p>
              <p><strong>Rating:</strong> ${stars}</p>
          </div>
      `;

      reviewsContainer.appendChild(reviewCard);
  }
});
