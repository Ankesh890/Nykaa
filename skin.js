
    // Function to add item to cart
    function addToCart(itemName, itemPrice) {
      // Get existing cart items from localStorage
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Add the new item to the cart
      cart.push({ name: itemName, price: itemPrice });

      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Display a success message
      alert(`${itemName} has been added to your cart!`);
    }
