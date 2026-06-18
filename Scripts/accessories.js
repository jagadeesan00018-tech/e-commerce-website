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

        alert("Accessory Added To Cart 🛍️");
    });

});

// Search Function

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    const products =
    document.querySelectorAll(".product-card");

    products.forEach(product => {

        const name =
        product.querySelector("h3")
        .textContent
        .toLowerCase();

        if(name.includes(value)){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});