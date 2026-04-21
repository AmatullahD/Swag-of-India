
const wish = (function () {
    let myWishlist = new Map();
    let products = {};

    async function getResponse(productsListUrl) {
        const response = await fetch(productsListUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        products = await response.json();
    }

    function fillMyWishlist() {
        if (localStorage.myWishlist) {
            myWishlist = new Map(JSON.parse(localStorage.myWishlist));
        }
        console.log(myWishlist);
    }

    getResponse('./products.json')

    fillMyWishlist();

    function addToWishlist(id) {
        alert("added");
        const product = products.Products.filter(product => product.id == id);
        const itemInWishlist = myWishlist.get(product[0].id);
        if (itemInWishlist) {
            itemInWishlist.qty += 1;
        } else {
            myWishlist.set(product[0].id, { ...product[0], qty: 1 });
        }
        localStorage.myWishlist = JSON.stringify(Array.from(myWishlist.entries()));
        location.reload();
    }

    function removeFromWishlist(id) {
        const product = products.Products.filter(product => product.id == id);
        const itemInWishlist = myWishlist.delete(id + '');
        myWishlist.delete(product[0].id, { ...product[0], qty: 0 });
        // alert("removed");


        localStorage.myWishlist = JSON.stringify(Array.from(myWishlist.entries()));
        location.reload();
    }



    function increment(id) {

        const product = products.Products.filter(product => product.id == id);
        const itemInWishlist = myWishlist.get(product[0].id);

        if (filterItem.length == 1 && filterItem[0].qty < 10) {
            filterItem[0].qty += 1;
        }

        localStorage.setItem('MY_WISHLIST', JSON.stringify(itemInWishlist));
        location.reload();
    }

    function decrement(id) {

        const product = products.Products.filter(product => product.id == id);
        const itemInWishlist = myWishlist.get(product[0].id);
        if (itemInWishlist.qty > 1) {
            itemInWishlist.qty -= 1;

        }
        else {
            myWishlist.delete(product[0].id, { ...product[0], qty: 0 });
        }

        // alert("Removed");
        localStorage.myWishlist = JSON.stringify(Array.from(myWishlist.entries()));
        location.reload();
    }

    function getWishlistItems() {
        return myWishlist;
    }

    return {
        addToWishlist,
        removeFromWishlist,
        increment,
        decrement,
        getWishlistItems
    }
})();