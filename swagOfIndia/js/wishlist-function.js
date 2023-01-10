
function renderWishlistItems() {
    const wishlistItems = wish.getWishlistItems().entries();

    let totalPrice = 0;
    let totalDiscount = 0;

    let cards = '';
    // let costCards = '';

    [...wishlistItems].forEach(item => {
        totalPrice += +item[1].price * item[1].qty;
        totalDiscount += (+item[1].price - +item[1].priceAfterDiscount) * item[1].qty;

        cards = cards
            +
            `
    <div class="card main-section">
    <div class="row justify-content-between">
        <div class="col-lg-5">
            <div class="mt-4 image1">
                <img src="./images/${item[1].imageName}.png">
                <hr>
                <div class="d-flex">
                <button class="remove-button" onclick="wish.removeFromWishlist('${item[1].id}')">Remove</button>
                <button class="wl-button" onclick="cart.addToCart('${item[1].id}'); wish.addToWishlist('${item[1].id}')"> Move to Cart</button>
               </div>
            </div>
        </div>
        <div class="col-lg-7">
            <div class="mt-4">
                <h5>${item[1].name}</h5>
                <p>Price: ${item[1].price * item[1].qty}</p>
                <p>Discounted price:- ${item[1].priceAfterDiscount} </p>
                <div id="increment-count" onclick="wish.addToWishlist(' ${item[1].id}  ')">
                  <i class="fa-solid fa-plus" id="up-arrow"></i>
                </div>
                <div id="total-count"> ${item[1].qty}
                </div>
                <div id="decrement-count" onclick="wish.decrement('${item[1].id}')">
                 <i class="fa-solid fa-minus" id="down-arrow"></i>
                </div>
               <p> Deliver in 4 to 6 Days</p>
               <button class="placeorder-btn" type="place-order">
               <a href="./myOrder.html">Place Order</a>
             </button>
            </div>
        </div>

    </div>
    
</div>
            `


        // [...wishlistItems].forEach(item => {
        //     totalPrice += +item[1].price * item[1].qty;
        //     totalDiscount += (+item[1].price - +item[1].priceAfterDiscount) * item[1].qty;

        //     costCards = costCards
        //         +
        //         `
        // <div class="card mt-4 main-section">
        //     <div class="row justify-content-between">

        //             <div class="card-body mt-4">

        //               <h5 class="card-title">Summary (4 items)</h5> 
        //                 <p class="card-text">
        //                   Price: ${item[1].price * item[1].qty}
        //                 </p>
        //                 <p class="card-text">
        //                    Discounted price:- ${item[1].priceAfterDiscount * item[1].qty} 
        //                     </p>
        //                     <p class="card-text">
        //                     Coupon Details : Apply coupon
        //                 </p>

        //                 <div id="total-count">
        //                   <p class="card-text">
        //                     Qty: ${item[1].qty}
        //                   </p>  
        //                   <hr>
        //                   <p class="card-text" id="final-price">
        //                      You Pay : ${item[1].priceAfterDiscount * item[1].qty}
        //                   </p> 
        //                 </div>
        //             </div   

        //     </div>
        // </div>
        //         `
        // });
    });

    document.querySelector('#wishlistCardArea').innerHTML = cards;
    // document.getElementById('priceArea').innerHTML = costCards;
    document.getElementById('price').innerHTML = Math.floor(totalPrice);
    document.getElementById('discount').innerHTML = Math.floor(totalDiscount);
    document.getElementById('final-price').innerHTML = Math.floor(totalPrice - totalDiscount);
    document.getElementById('total-count').innerHTML = totalCount;
}

function incrementQty(id) {
    wish.incrementQty(id);
    renderWishlistItems();
}

function decrement(id) {
    wish.decrement(id);
    renderWishlistItems();
}

function removeFromWishlist(id) {
    wish.removeFromWishlist(id);
    renderWishlistItems();
}


renderWishlistItems();

