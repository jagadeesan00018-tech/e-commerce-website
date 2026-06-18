// Search Function

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    let filter =
    searchInput.value.toLowerCase();

    let products =
    document.querySelectorAll(".product-card");

    products.forEach(product => {

        let productName =
        product.querySelector("h3")
        .textContent
        .toLowerCase();

        if(productName.includes(filter)){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }

    });

});


// Category Filter

const buttons =
document.querySelectorAll(".filter-btn");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelector(".active")
        .classList.remove("active");

        btn.classList.add("active");

        const filter =
        btn.getAttribute("data-filter");

        const products =
        document.querySelectorAll(".product-card");

        products.forEach(product => {

            if(filter === "all"){
                product.style.display = "block";
            }
            else if(product.classList.contains(filter)){
                product.style.display = "block";
            }
            else{
                product.style.display = "none";
            }

        });

    });

});


// Add To Cart

const cartButtons =
document.querySelectorAll(".product-card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Product Added To Cart!");

    });

});