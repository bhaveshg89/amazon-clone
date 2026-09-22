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