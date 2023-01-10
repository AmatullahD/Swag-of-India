
function renderCartItems() {
    const cartItems = cart.getCartItems().entries();

    let totalPrice = 0;
    let totalDiscount = 0;

    let cards = '';

    [...cartItems].forEach(item => {
        totalPrice += +item[1].price * item[1].qty;
        totalDiscount += (+item[1].price - +item[1].priceAfterDiscount) * item[1].qty;

        cards = cards
            +
            `
<div class="card main-section">
    <div class="row justify-content-between">
        <div class="col-5">
            <div class="mt-4 image1">
                <img src="./images/${item[1].imageName}.png">
                <hr>
                <div class="d-flex">
                <button class="remove-button" onclick="removeFromCart('${item[1].id}')">Remove</button>
                <button class="wl-button" onclick="cart.addToCart('${item[1].id}'); wish.addToWishlist('${item[1].id}')"> Move to Wishlist</button>
               </div>
            </div>
        </div>
        <div class="col-7">
            <div class="mt-4">
                <h5>${item[1].name}</h5>
                <p>Price: ${item[1].price * item[1].qty}</p>
                <p>Discounted price:- ${item[1].priceAfterDiscount} </p>
                <div id="increment-count" onclick="cart.addToCart(' ${item[1].id}  ')">
                  <i class="fa-solid fa-plus" id="up-arrow"></i>
                </div>
                <div id="total-count"> ${item[1].qty}
                </div>
                <div id="decrement-count" onclick="cart.decrement('${item[1].id}')">
                 <i class="fa-solid fa-minus" id="down-arrow"></i>
                </div>
               
               <p> Deliver in 4 to 6 Days</p>
               
               <button class="placeorder-btn" type="place-order">
                 <a href="./checkout.html">Place Order</a>
               </button>
    
            </div>
        </div>

    </div>
    
</div>
            `
    });

    document.getElementById('cardArea').innerHTML = cards;
    document.getElementById('price').innerHTML = Math.floor(totalPrice);
    document.getElementById('discount').innerHTML = Math.floor(totalDiscount);
    document.getElementById('final-price').innerHTML = Math.floor(totalPrice - totalDiscount);
    document.getElementById('total-count').innerHTML = totalCount;
}

function incrementQty(id) {
    cart.incrementQty(id);
    renderCartItems();
}

function decrement(id) {
    cart.decrement(id);
    renderCartItems();
}
function removeFromCart(id) {
    cart.removeFromCart(id);
    renderCartItems();

}

renderCartItems();