var cart = JSON.parse(localStorage.getItem("cart")) || [];
var cartContainer = document.getElementById("cart-container");
var totalPriceElement = document.getElementById("total-price");
var checkoutButton = document.getElementById("checkout-button");

function displayCart() {
    cartContainer.innerHTML = ""; // Clear the container
    var total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalPriceElement.textContent = "Total: RS:0.00";
        checkoutButton.disabled = true;
        return;
    }

    cart.forEach(function (item, index) {
        var price = parseFloat(item.price.replace(/[^\d.]/g, "")); // Extract numeric price
        total += price;

        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <h3>${item.title}</h3>
                <p>Price: ${item.price}</p>
                <button class="remove-item" data-index="${index}">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = "Total: RS:" + total.toFixed(2);
    checkoutButton.disabled = false;
}

document.addEventListener("DOMContentLoaded", function () {
    displayCart(); // Display cart on page load
});

cartContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item")) {
        var index = event.target.dataset.index;
        cart.splice(index, 1); // Remove item from cart
        localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
        displayCart(); // Refresh cart display
    }
});
