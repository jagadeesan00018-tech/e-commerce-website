// Cart Counter

let cartCount = 0;

const cartButtons =
document.querySelectorAll(".cart-btn");

const cartDisplay =
document.getElementById("cart-count");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartDisplay.textContent =
        cartCount;

        alert("Book Added To Cart 📚");
    });

});

// Search Function

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    const books =
    document.querySelectorAll(".book-card");

    books.forEach(book => {

        const title =
        book.querySelector("h3")
        .textContent
        .toLowerCase();

        if(title.includes(value)){
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });

});