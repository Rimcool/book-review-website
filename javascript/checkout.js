// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const proceedButton = document.getElementById('openCheckoutModal');
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    
    const submitOrderButton = document.getElementById('submitOrder');
    
    // Open the checkout modal when the "Proceed" button is clicked
    proceedButton.addEventListener('click', function () {
      checkoutModal.show();
    });
  
    // Handle the order submission
    submitOrderButton.addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const deliveryDays = document.getElementById('deliveryDays').value;
      const paymentMethod = document.getElementById('paymentMethod').value;
  
      // Ensure all fields are filled out
      if (name && address && deliveryDays && paymentMethod) {
        const confirmationText = `
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Address:</strong> ${address}</li>
            <li><strong>Delivery Days:</strong> ${deliveryDays} days</li>
            <li><strong>Payment Method:</strong> ${paymentMethod}</li>
          </ul>
          Your order will be delivered in ${deliveryDays} days.
        `;
  
        // Set the confirmation message and show the confirmation modal
        document.getElementById('confirmationDetails').innerHTML = confirmationText;
        checkoutModal.hide();
        confirmationModal.show();
      } else {
        alert('Please fill in all the details.');
      }
    });
  });
  