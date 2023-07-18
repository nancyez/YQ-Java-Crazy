// Obtener el elemento del DOM
const misCompras = document.getElementById('mis-compras');

// Obtener el carrito almacenado en el Local Storage
const carrito = JSON.parse(localStorage.getItem('carrito-modal')) || [];

// Mostrar la información del carrito en la página "Mis Compras"
carrito.forEach((producto) => {
  const compraItem = document.createElement('div');
  compraItem.classList.add('compra-item');
  compraItem.innerHTML = `
    <h3>${producto.titulo}</h3>
    <p>Precio: $${producto.precio.toFixed(2)}</p>
    <p>Cantidad: ${producto.cantidad}</p>
    <p class="total">Total: $${(producto.precio * producto.cantidad).toFixed(2)}</p>
  `;

  misCompras.appendChild(compraItem);
});
