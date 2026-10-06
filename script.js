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

const cartButtons = document.querySelectorAll(".add-cart-btn");

cartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount++;
        document.getElementById("cartCount").innerText = cartCount;
        const price = Number(button.dataset.price);
cartTotal += price;
document.getElementById("cartTotal").innerText = cartTotal;
        document.getElementById("cartPopup").style.display = "block";
document.getElementById("popupCartCount").innerText = cartCount;
    });
});





