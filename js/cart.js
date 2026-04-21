
const cart = (function () {
    let myCart = new Map();
    let products = {};

    async function getResponse(productsListUrl) {
        const response = await fetch(productsListUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        products = await response.json();
    }

    function fillMyCart() {
        if (localStorage.myCart) {
            myCart = new Map(JSON.parse(localStorage.myCart));
        }
        console.log(myCart);
    }

    getResponse('./products.json')

    fillMyCart();

    function addToCart(id) {
        // alert("added");
        const product = products.Products.filter(product => product.id == id);
        const itemInCart = myCart.get(product[0].id);
        if (itemInCart) {
            itemInCart.qty += 1;
        } else {
            myCart.set(product[0].id, { ...product[0], qty: 1 });
        }

        localStorage.myCart = JSON.stringify(Array.from(myCart.entries()));
        location.reload();
    }

    function removeFromCart(id) {

        const product = products.Products.filter(product => product.id == id);
        const itemInCart = myCart.delete(id + '');
        myCart.delete(product[0].id, { ...product[0], qty: 0 });
        // alert("removed");


        localStorage.myCart = JSON.stringify(Array.from(myCart.entries()));
        location.reload();
    }



    function increment(id) {

        const product = products.Products.filter(product => product.id == id);
        const itemInCart = myCart.get(product[0].id);

        if (filterItem.length == 1 && filterItem[0].qty < 10) {
            filterItem[0].qty += 1;
        }

        localStorage.setItem('MY_CART', JSON.stringify(itemInCart));
        location.reload();
    }

    function decrement(id) {

        const product = products.Products.filter(product => product.id == id);
        const itemInCart = myCart.get(product[0].id);
        if (itemInCart.qty > 1) {
            itemInCart.qty -= 1;

        }
        else {
            myCart.delete(product[0].id, { ...product[0], qty: 0 });
        }

        // alert("Removed");
        localStorage.myCart = JSON.stringify(Array.from(myCart.entries()));
        location.reload();

    }

    function getCartItems() {
        return myCart;
    }

    return {
        addToCart,
        getCartItems,
        removeFromCart,
        increment,
        decrement
    }
})();