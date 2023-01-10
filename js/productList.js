// get products data
let productsListUrl = 'products.json';
var productsList;
let htmlToReturn = "",
    reviews = "",
    lowStar = 0,
    i = 0;
isNew = '';
async function loadProducts(productsListUrl) {

    fetch(productsListUrl)
        .then(response => response.json())
        .then(json => {
            productsList = json;
            productsList.Products.forEach((product) => {
                console.log(product.id);
                htmlToReturn =
                    '<div class="row">' +
                    '<div class="d-flex">' +
                    '<div class="card product-list" id="product' + product.id + '">' +
                    '<div class="blur-image">' +
                    '<div class="product-img">' +
                    '<img src="./Images/product' + product.id + '.png" alt="...">' +
                    '</div>'
                isNew = '<div class="new-product">' +
                    '<span class="badge bg-danger"> New </span>' +
                    '</div>'
                if (product.isNew == 'TRUE')
                    htmlToReturn += isNew;
                isNew = "";
                htmlToReturn += '<div class="product-hover">' +
                    ' <div class="container">' +
                    ' <div class="row">' +

                    ' <div class="col-4">' +
                    ' <div class="wishlist-icon product-icon" onClick="wish.addToWishlist(' + product.id + ')" >' +
                    '</div>' +
                    '</div>' +
                    '<div class="col-4">' +
                    '<div class="view-icon product-icon">' +
                    '</div>' +
                    ' </div>' +
                    ' <div class="col-4">' +

                    '<div class="cart-icon product-icon" onClick="cart.addToCart(' + product.id + ')">' +
                    ' </div>' +
                    ' </div>' +
                    ' </div>' +
                    ' </div>' +
                    ' </div>' +


                    '<div class="product-caption">'

                htmlToReturn += ' </div>' +

                    ' <h4 class="product-text"><a href="#">' + product.name + '</a></h4>' +
                    ' <div class="price mt-4">' +
                    '<ul>' +
                    '<li> Rs ' + product.priceAfterDiscount + '</li>' +
                    '<li class="text-muted">Actual price- Rs ' + product.price + ' </li>' +
                    '</ul>' +
                    ' </div>' +
                    ' </div>' +
                    '<div class="product-rating">';
                lowStar = 6 - product.ratings;
                if (product.ratings == 5)
                    lowStar = 0;
                for (i = 1; i < product.ratings; i++) {
                    reviews += '<i class="fas fa-star org"></i>';
                }
                for (i = 1; i <= lowStar; i++) {
                    reviews += '<i class="far fa-star org low-star"></i>'
                }
                lowStar = 0;
                htmlToReturn += reviews + product.ratings + '/5';
                reviews = "";
                '</div>' +
                    '</div>' +
                    ' </div>'

                document.querySelector('#productsListArea').innerHTML += htmlToReturn;
            });

        })
}
loadProducts(productsListUrl);