// Newsletter

document.getElementById("newsletterForm")
.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Thank You For Subscribing!");
});

// Search

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    let filter =
    searchInput.value.toLowerCase();

    let products =
    document.querySelectorAll(".product-card");

    products.forEach(product => {

        let name =
        product.querySelector("h3")
        .innerText.toLowerCase();

        if(name.includes(filter)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }

    });

});