// script.js

// Array para almacenar los productos
var products = [];

// Función para agregar un producto al array y actualizar el HTML
function addProduct(imageUrl, text) {
var product = {
    imageUrl: imageUrl,
    text: text };

products.push(product);

updateProductContainer();
}

// Función para actualizar el contenido del contenedor de productos en el HTML 
function updateProductContainer() {
  var productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";

  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    var productElement = document.createElement("div"); 
    productElement.className = "product";

    var imageElement = document.createElement("img");
    imageElement.src = product.imageUrl;
    imageElement.alt = "Product Image";
    productElement.appendChild(imageElement);

    var textElement = document.createElement("p");
    textElement.textContent = product.text;
    productElement.appendChild(textElement);

    productContainer.appendChild(productElement);
  }
}

// Ejemplo de cómo usar la función addProduct
addProduct("path/to/image1.jpg", "Product 1");
addProduct("path/to/image2.jpg", "Product 2");  
