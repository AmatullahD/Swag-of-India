// var x = document.getElementById("myText").value;
// function coupon() {
//     If(x = coupon)
//     couponValue = 10
//     Else
//     Alert('coupon invalid');
// };




function renderWishlistItems() {
  const wishlistItems = wish.getWishlistItems().entries();

  let totalPrice = 0;
  let totalDiscount = 0;

  let cards = '';

  [...wishlistItems].forEach(item => {
    totalPrice += +item[1].price * item[1].qty;
    totalDiscount += (+item[1].price - +item[1].priceAfterDiscount) * item[1].qty;

    cards =

      `
<div class="card mt-4 main-section">
    <div class="row justify-content-between">
        
            <div class="card-body mt-4">
            
              <h5 class="card-title">Summary (4 items)</h5> 
                <p class="card-text">
                  Price: ${totalPrice}
                </p>
                <p class="card-text">
                   Discounted price:- ${totalDiscount} 
                    </p>
                    <p class="card-text">
                    Coupon Details : Apply coupon
                </p>
            
                <div id="total-count">
                  <p class="card-text">
                  
                  </p>  
                  <hr>
                  <p class="card-text" id="final-price">
                     You Pay : ${totalPrice - totalDiscount}
                  </p> 
                </div>
            </div   
        
    </div>
</div>
        `
  });

  document.getElementById('priceArea').innerHTML = cards;
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