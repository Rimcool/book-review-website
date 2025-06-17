document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;

    // Save to local storage
    const userData = { fullName, email, interest };
    localStorage.setItem('user', JSON.stringify(userData));

    // Show alert
    alert(`Thank you for signing up, ${fullName}!`);

    // Optionally clear the form
    this.reset();
  });