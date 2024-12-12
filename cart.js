function updateCartSummary() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // If the cart is empty
    if (cart.length === 0) {
      document.getElementById('cart-items').innerHTML = "<p>Your cart is currently empty.</p>";
      document.getElementById('cart-summary').innerHTML = "<p>Total: ₹0</p><button id='checkout-btn'>Checkout</button>";
      return;
    }
    
    // Display cart items
    let cartItemsHTML = "<ul>";
    let totalAmount = 0;
    cart.forEach(item => {
      cartItemsHTML += `<li>${item.name} - ₹${item.price}</li>`;
      totalAmount += item.price;
    });
    cartItemsHTML += "</ul>";
    
    // Update the cart summary
    document.getElementById('cart-items').innerHTML = cartItemsHTML;
    document.getElementById('cart-summary').innerHTML = `<p>Total: ₹${totalAmount}</p><button id='checkout-btn'>Checkout</button>`;
    
    // Add event listener to checkout button
    document.getElementById('checkout-btn').addEventListener('click', function() {
      // Display the total amount in alert
      alert(`You are proceeding to checkout with a total amount of ₹${totalAmount}`);
      
      // Clear the cart from localStorage
      localStorage.removeItem('cart');
      
      // Refresh the page or redirect to another page after clearing the cart
      window.location.href = "index.html"; // Redirect to homepage or any other page you want
    });
  }

  // Call the function to update the cart summary on page load
  updateCartSummary();