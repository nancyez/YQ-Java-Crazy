// Obtener elementos del DOM
const botonesAgregar = document.querySelectorAll('.botton-item');
const modalCarrito = document.getElementById('carrito-modal');
const cerrarModal = document.querySelector('.cerrar-modal');
const carritoItems = document.getElementById('carrito-items');
const totalCarrito = document.getElementById('total-carrito');
const comprarBtn = document.getElementById('comprar-btn');

// Obtener el carrito almacenado en el Local Storage o crear uno nuevo
let carrito = JSON.parse(localStorage.getItem('carrito-modal')) || [];

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
  
  const nuevoItem = {
    titulo: titulo,
    precio: precio,
    cantidad: 1
  };
  
  carrito.push(nuevoItem);
  
  actualizarCarrito();
  
  modalCarrito.style.display = 'block';
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(event) {
  const item = event.target.parentElement;
  const indice = getIndexFromElement(item);
  
  carrito.splice(indice, 1);
  
  actualizarCarrito();
}

// Función para cerrar el modal del carrito
function cerrarCarritoModal() {
  modalCarrito.style.display = 'none';
}

// Función para actualizar el carrito
function actualizarCarrito() {
  carritoItems.innerHTML = '';
  
  carrito.forEach((producto) => {
    const nuevoItem = document.createElement('div');
    nuevoItem.classList.add('carrito-item');
    nuevoItem.innerHTML = `
      <span>${producto.titulo}</span>
      <span>$${producto.precio.toFixed(2)}</span>
      <button class="eliminar-btn">Eliminar</button>
    `;
  
    const botonEliminar = nuevoItem.querySelector('.eliminar-btn');
    botonEliminar.addEventListener('click', eliminarDelCarrito);
  
    carritoItems.appendChild(nuevoItem);
  });
  
  actualizarTotal();
  
  // Guardar el carrito en el Local Storage
  localStorage.setItem('carrito-modal', JSON.stringify(carrito-modal));
}

// Función para actualizar el total del carrito
function actualizarTotal() {
  let total = 0;
  
  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });
  
  totalCarrito.textContent = '$' + total.toFixed(2);
}

// Función para obtener el índice de un elemento en el carrito
function getIndexFromElement(element) {
  const carritoItemsArray = Array.from(carritoItems.children);
  return carritoItemsArray.indexOf(element);
}

// Función para realizar la compra
function comprar() {
  // Lógica para procesar la compra
  
  // Reiniciar carrito
  carrito = [];
  
  actualizarCarrito();
  
  cerrarCarritoModal();
}
