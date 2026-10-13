const searchInput = document.querySelector(".search-input");
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    boxes.forEach(function (box) {
        const title = box.querySelector("h2").innerText.toLowerCase();

        if (title.includes(searchText)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});


//back to top button
const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//button clickable
// Cart Count
let cartCount = 0;
let cartTotal = 0;
let cartPrices = [];
let cartNames = [];


const cartButtons = document.querySelectorAll(".add-cart-btn");

cartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount++;
        document.getElementById("cartCount").innerText = cartCount;
        const price = Number(button.dataset.price);
cartTotal += price;
cartPrices.push(price);
const productName = button.closest(".box").querySelector("h2").innerText;
cartNames.push(productName);
displayCartItems();
saveCart();
document.getElementById("cartTotal").innerText = cartTotal;
        document.getElementById("cartPopup").style.display = "block";
document.getElementById("popupCartCount").innerText = cartCount;
    });
});



function removeLastItem() {
    const removedPrice = cartPrices.pop();
    
cartNames.pop();
displayCartItems();


    if (cartCount > 0) {

        const removedPrice = cartPrices.pop();

        cartCount--;
        cartTotal = cartTotal - removedPrice;
        saveCart();

        document.getElementById("cartCount").innerText = cartCount;
        document.getElementById("popupCartCount").innerText = cartCount;
        document.getElementById("cartTotal").innerText = cartTotal;
    }
}


function clearCart() {
    cartCount = 0;
    cartTotal = 0;
    cartPrices = [];
    
cartNames = [];
displayCartItems();

    saveCart();

    document.getElementById("cartCount").innerText = cartCount;
    document.getElementById("popupCartCount").innerText = cartCount;
    document.getElementById("cartTotal").innerText = cartTotal;
}

function closeCart() {
    document.getElementById("cartPopup").style.display = "none";
}


function saveCart() {
    localStorage.setItem("cartCount", cartCount);
    localStorage.setItem("cartTotal", cartTotal);
    localStorage.setItem("cartPrices", JSON.stringify(cartPrices));
    localStorage.setItem("cartNames", JSON.stringify(cartNames));
}


window.addEventListener("load", function () {
    cartNames = JSON.parse(localStorage.getItem("cartNames")) || [];
    cartCount = Number(localStorage.getItem("cartCount")) || 0;
    cartTotal = Number(localStorage.getItem("cartTotal")) || 0;
    cartPrices = JSON.parse(localStorage.getItem("cartPrices")) || [];

    document.getElementById("cartCount").innerText = cartCount;
    document.getElementById("popupCartCount").innerText = cartCount;
    document.getElementById("cartTotal").innerText = cartTotal;
});



function openCart() {
    document.getElementById("cartPopup").style.display = "block";
}


function checkout() {
    if (cartCount === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully! Total: ₹" + cartTotal);

    clearCart();
    closeCart();
}


function displayCartItems() {
    const cartItemsList = document.getElementById("cartItemsList");

    cartItemsList.innerHTML = "";

    cartNames.forEach(function(name, index) {
        const li = document.createElement("li");
        li.innerText = (index + 1) + ". " + name;
        cartItemsList.appendChild(li);
    });
}



function openLogin() {
    document.getElementById("loginPopup").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}



function loginUser() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please enter email/mobile and password!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    alert("Demo login successful!");
    closeLogin();
}




function togglePassword() {
    const passwordInput = document.getElementById("loginPassword");
    const toggleButton = document.querySelector(".password-field button");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.innerText = "Hide";
    } else {
        passwordInput.type = "password";
        toggleButton.innerText = "Show";
    }
}







