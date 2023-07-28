// Recuperar datos del carrito almacenados en localStorage (si existen)
const carritoProductos = JSON.parse(localStorage.getItem('carrito')) || [];

// Obtener el contenedor para mostrar los productos comprados
const comprasItems = document.getElementById('compras-items');

// Función para mostrar los productos en la página "Mis Compras"
function mostrarCompras() {
  carritoProductos.forEach((producto) => {
    const nuevoItem = document.createElement('div');
    nuevoItem.classList.add('carrito-item');
    nuevoItem.innerHTML = `
      <span>${producto.titulo}</span>
      <span>$${producto.precio.toFixed(2)}</span>
      <span>${producto.cantidad}</span>
      <span>$${(producto.precio * producto.cantidad).toFixed(2)}</span>
    `;

    comprasItems.appendChild(nuevoItem);
  });
}

// Mostrar los productos al cargar la página
mostrarCompras();
