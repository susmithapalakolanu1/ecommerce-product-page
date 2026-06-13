function addToCart() {

    let quantity = document.getElementById("quantity").value;

    document.getElementById("message").innerHTML =
        quantity + " item(s) added to cart successfully!";
}