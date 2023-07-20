let product_Container = document.getElementById("product__container");
let container = document.getElementById("card-container");

var productID = 1;
function reqproduct(url) {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: url,
    headers: {},
    success: function (data, status, xhr) {
      for (const key in data) {
        console.log(data[key].id);
        let cardContainer = document.getElementById("card-container");
        let card = document.createElement("div");
        card.className = "card";

        let productImage = document.createElement("img");
        productImage.className = "product-image";
        productImage.src = data[key].image;

        cardContainer.appendChild(card);
        card.appendChild(productImage);
        // card.appendChild(productDetails);
        let productDetails = document.createElement("div");
        productDetails.className = "product-details";

        let productName = document.createElement("h3");
        productName.textContent = data[key].title;
        productName.className = "product-name";

        let productDescription = document.createElement("p");
        productDescription.textContent = data[key].description;
        productDescription.className = "product-description";

        let productPrice = document.createElement("p");
        productPrice.textContent = "$" + data[key].price;
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
          productID = data[key].id;

          window.location.href = `product.html?id=${productID}`;
         console.log(window.location);
          // window.open(`product.html/${productID}`,"blank")
          console.log(productID);
        });
      }
    },

    //container.appendChild(card);
  });

  
}
reqproduct("https://fakestoreapi.com/products");

$.ajax({
  url: "https://fakestoreapi.com/products/categories",
  contentType: "application/json",
  dataType: "json",
  success: function (data, status, xhr) {
    function createCategories() {
      let navList = document.getElementById("nav-list");
      for (let key in data) {
        let listItem = document.createElement("li");

        let link = document.createElement("a");

        link.textContent = data[key];

        listItem.appendChild(link);
        listItem.addEventListener("click", function () {
          document.getElementById("card-container").innerHTML = "";
          console.log(
            "https://fakestoreapi.com/products/category/" + data[key]
          );
          reqproduct("https://fakestoreapi.com/products/category/" + data[key]);
        });
        navList.appendChild(listItem);
      }
    }
    createCategories();
  },
});
