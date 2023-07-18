
// Obtener elementos del DOM
const botonesAgregar = document.querySelectorAll('.botton-item');
const modalCarrito = document.getElementById('carrito-modal');
const cerrarModal = document.querySelector('.cerrar-modal');
const carritoItems = document.getElementById('carrito-items');
const totalCarrito = document.getElementById('total-carrito');
const comprarBtn = document.getElementById('comprar-btn');

// Event listeners
botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', agregarAlCarrito);
});

cerrarModal.addEventListener('click', cerrarCarritoModal);
comprarBtn.addEventListener('click', comprar);

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
  const item = event.target.parentElement;
  const titulo = item.querySelector('.titulo-item').textContent;
  const precio = parseFloat(item.querySelector('.precio-item').textContent.replace('$', ''));
  
  const nuevoItem = document.createElement('div');
  nuevoItem.classList.add('carrito-item');
  nuevoItem.innerHTML = `
    <span>${titulo}</span>
    <span>$${precio.toFixed(2)}</span>
    <button class="eliminar-btn">Eliminar</button>
  `;
  
  const botonEliminar = nuevoItem.querySelector('.eliminar-btn');
  botonEliminar.addEventListener('click', eliminarDelCarrito);
  
  carritoItems.appendChild(nuevoItem);
  
  actualizarTotal(precio);
  
  modalCarrito.style.display = 'block';
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(event) {
  const item = event.target.parentElement;
  const precio = parseFloat(item.querySelector('span:nth-child(2)').textContent.replace('$', ''));
  
  item.remove();
  
  actualizarTotal(-precio);
}

// Función para cerrar el modal del carrito
function cerrarCarritoModal() {
  modalCarrito.style.display = 'none';
}

// Función para actualizar el total del carrito
function actualizarTotal(precio) {
  const totalActual = parseFloat(totalCarrito.textContent.replace('$', ''));
  const nuevoTotal = totalActual + precio;
  
  totalCarrito.textContent = '$' + nuevoTotal.toFixed(2);
}

// Función para realizar la compra
function comprar() {
  // Lógica para procesar la compra
  
  // Reiniciar carrito
  carritoItems.innerHTML = '';
  totalCarrito.textContent = '$0.00';
  
  cerrarCarritoModal();
}
