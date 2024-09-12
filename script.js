document.addEventListener("DOMContentLoaded", function() {
    // Get all buy buttons
    var buyButtons = document.querySelectorAll(".buy-button");

    // Add click event listener to each buy button
    buyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Get the product card element
            var productCard = this.closest(".product-card");

            // Get product name and price from the elements
            var productName = productCard.querySelector(".product-name").innerText;
            var productPrice = productCard.querySelector(".product-price").innerText.split(' ').pop();

            // Show alert with product name, price, and confirmation message
            alert("Product: " + productName + "\nPrice: " + productPrice + "\nYour order has been confirmed. Thank you for choosing us!");
        });
    });
});
