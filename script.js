// SHOPNEST CART
let cartItems = [];

try {
    const savedCart = JSON.parse(localStorage.getItem("shopnestCart"));
    if (Array.isArray(savedCart)) {
        cartItems = savedCart.filter(item =>
            item &&
            typeof item.name === "string" &&
            typeof item.price === "number"
        );
    }
} catch (error) {
    cartItems = [];
}

// ADD TO CART
function addToCart(name, price) {
    cartItems.push({
        name: name,
        price: price
    });

    saveCart();
    updateCart();

    alert(name + " added to cart!");
}

// SAVE CART
function saveCart() {
    localStorage.setItem("shopnestCart", JSON.stringify(cartItems));
}

// UPDATE CART
function updateCart() {
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const cartItemsContainer = document.getElementById("cartItems");

    let total = 0;

    cartItemsContainer.innerHTML = "";

    cartItems.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.className = "cart-item";

        const name = document.createElement("span");
        name.textContent = item.name + " - ₹" + item.price;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeItem(index);
        };

        div.appendChild(name);
        div.appendChild(removeButton);

        cartItemsContainer.appendChild(div);
    });

    cartCount.textContent = cartItems.length;
    cartTotal.textContent = total;
}

// REMOVE ITEM
function removeItem(index) {
    cartItems.splice(index, 1);

    saveCart();
    updateCart();
}

// CLEAR CART
function clearCart() {
    cartItems = [];

    saveCart();
    updateCart();
}

// OPEN CART
function openCart() {
    document.getElementById("cartPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// OPEN INFORMATION
function openInfo() {
    document.getElementById("infoPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// CLOSE POPUPS
function closePopups() {
    document.getElementById("cartPopup").style.display = "none";
    document.getElementById("infoPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// SEARCH PRODUCTS
function searchProducts() {
    const input = document.getElementById("searchInput");
    const searchText = input.value.toLowerCase().trim();

    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        const productName = box.querySelector("h2").textContent.toLowerCase();

        if (productName.includes(searchText)) {
            box.style.display = "flex";
        } else {
            box.style.display = "none";
        }
    });
}

// LIVE SEARCH
document.getElementById("searchInput").addEventListener("input", searchProducts);

// DEMO CHECKOUT
function checkout() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("This is a student demo. No real order or payment has been made.");
}

// ESCAPE KEY
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closePopups();
    }
});

// INITIAL CART UPDATE
updateCart();















