document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (!loginForm) {
      console.error("Login form not found!");
      return;
  }

  loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      // Get input values
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Validation
      if (username === "" || password === "") {
          alert("All fields are required!");
          return;
      }

      // Save user data to local storage
      const userData = {
          username: username,
          password: password, // Note: Passwords should be hashed in real applications
      };
      localStorage.setItem("user", JSON.stringify(userData));

      // Show success alert
      alert(`Welcome, ${username}! You have successfully logged in.`);

      // Check if the user was redirected from another page
      const urlParams = new URLSearchParams(window.location.search);
      const redirectUrl = urlParams.get("redirect");

      if (redirectUrl) {
          window.location.href = decodeURIComponent(redirectUrl); // Redirect back to the review page
      } else {
          window.location.href = "bookreviews.html"; // Default redirect if no specific page
      }
  });
});
