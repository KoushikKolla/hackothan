const productsData = {
    1: { name: "Product 1", price: 71991 },
    2: { name: "Product 2", price: 100.0 }
};
var cartItems = [];
function addToCart(productId) {
    var productDetails = productsData[productId];
    var existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        // If not in the cart, add it with a quantity of 1
        cartItems.push({
            id: productId,
            name: productDetails.name,
            price: productDetails.price,
            quantity: 1
        });
    }
    updateCartDisplay();
}
function removeFromCart(productId) {
    var index = cartItems.findIndex(item => item.id === productId);
         if (index !== -1) {
        cartItems[index].quantity--;
         if (cartItems[index].quantity === 0) {
            cartItems.splice(index, 1);
        }
        updateCartDisplay();
    }
}
function clearCart() {
    cartItems = [];
    updateCartDisplay();
}
function updateCartDisplay() {
    var cartList = document.getElementById("cartItems");
    var cartTotal = document.getElementById("cartTotal");
    cartList.innerHTML = "";
    var total = 0;
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i];
        var listItem = document.createElement("li");
        listItem.textContent = `${cartItem.name} x${cartItem.quantity} - $${(cartItem.price * cartItem.quantity).toFixed(2)}`;
        cartList.appendChild(listItem);
        total += cartItem.price * cartItem.quantity;
    }
    cartTotal.textContent = total.toFixed(2);
}
function checkout() {
    alert("Checkout functionality is not implemented in this example.");
}
