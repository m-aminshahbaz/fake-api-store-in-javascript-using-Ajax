  let producId=window.location.search.substring(4,window.location.search.length);
  console.log(producId);
  let url=`https://fakestoreapi.com/products/${producId}`
  function reqproduct() {

  $.ajax({
    type: "GET",
    dataType: "json",
    url: url,
    headers: {},
    success: function (data, status, xhr) {
        console.log(data.id);
        let cardContainer = document.getElementById("product__container");
        let card = document.createElement("div");
        card.className = "card__product";

        let productImage = document.createElement("img");
        productImage.className = "product-image";
        productImage.src = data.image;

        cardContainer.appendChild(card);
        card.appendChild(productImage);
        // card.appendChild(productDetails);
        let productDetails = document.createElement("div");
        productDetails.className = "product-details";

        let productName = document.createElement("h3");
        productName.textContent = data.title;
        productName.className = "product-name";

        let productDescription = document.createElement("p");
        productDescription.textContent = data.description;
        productDescription.className = "product-description";

        let productPrice = document.createElement("p");
        productPrice.textContent = "$" + data.price;
        productPrice.className = "product-price";

        let buyButton = document.createElement("button");
        buyButton.textContent = "Buy Now";
        buyButton.className = "buy-button";

        productDetails.appendChild(productName);
        productDetails.appendChild(productDescription);
        productDetails.appendChild(productPrice);
        productDetails.appendChild(buyButton);

        card.appendChild(productImage);
        card.appendChild(productDetails);

        card.addEventListener("click", function () {
          //const productId = event.target.parentNode.dataset.productId;
          productID = data.id;

          window.location.href = `product.html?id=${productID}`;
         console.log(window.location);
          // window.open(`product.html/${productID}`,"blank")
          console.log(productID);
        });
    },

    //container.appendChild(card);
  });

  
}
reqproduct();

