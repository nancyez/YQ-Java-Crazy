const botonesAgregar = document.querySelectorAll('.botton-item');
const modalCarrito = document.getElementById('carrito-modal');
const modalContenido = document.querySelector('.modal-contenido');
const cerrarModal = document.querySelector('.cerrar-modal');
const carritoItems = document.getElementById('carrito-items');
const totalCarrito = document.getElementById('total-carrito');
const comprarBtn = document.getElementById('comprar-btn');
const eliminarAllBtn = document.getElementById('eliminar-all-btn');

// Array para mantener los productos en el carrito
const carritoProductos = [];

// Evento listener
botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', agregarAlCarrito);
});

cerrarModal.addEventListener('click', cerrarCarritoModal);
comprarBtn.addEventListener('click', comprar);
eliminarAllBtn.addEventListener('click', vaciarCarrito);


// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
  const item = event.target.parentElement;
  const titulo = item.querySelector('.titulo-item').textContent;
  const precio = parseFloat(item.querySelector('.precio-item').textContent.replace('$', ''));

  // Verificar si el producto ya está en el carrito
  const productoExistente = carritoProductos.find((producto) => producto.titulo === titulo);
  if (productoExistente) {
    // Si el producto ya existe, aumentamos la cantidad
    productoExistente.cantidad++;
  } else {
    // Si el producto no existe, lo agregamos al carrito
    const nuevoProducto = {
      titulo: titulo,
      precio: precio,
      cantidad: 1
    };
    carritoProductos.push(nuevoProducto);
  }

  // Actualizamos el carrito visualmente
  actualizarCarritoVisual();

  modalCarrito.style.display = 'block';
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(event) {
  const botonEliminar = event.target;
  const titulo = botonEliminar.dataset.titulo;

  // Buscar el producto en el carrito
  const productoExistente = carritoProductos.find((producto) => producto.titulo === titulo);
  if (productoExistente) {
    // Si el producto existe, decrementamos su cantidad
    productoExistente.cantidad--;

    // Si la cantidad llega a 0, eliminamos el producto del carrito
    if (productoExistente.cantidad === 0) {
      const index = carritoProductos.indexOf(productoExistente);
      carritoProductos.splice(index, 1);
    }
  }
  // Actualizamos el carrito visualmente
  actualizarCarritoVisual();
}

// Función para actualizar el carrito visualmente
function actualizarCarritoVisual() {
  carritoItems.innerHTML = '';

  let total = 0;

  // Agregar encabezado de las columnas
  const encabezadoCarrito = document.createElement('div');
  encabezadoCarrito.classList.add('carrito-item', 'encabezado-carrito');
  encabezadoCarrito.innerHTML = `
    <span>Producto</span>
    <span>Precio Unitario</span>
    <span>Cantidad</span>
    <span>Subtotal</span>
    <span></span>
  `;

  carritoItems.appendChild(encabezadoCarrito);

  carritoProductos.forEach((producto) => {
    const nuevoItem = document.createElement('div');
    nuevoItem.classList.add('carrito-item');
    nuevoItem.innerHTML = `
      <span>${producto.titulo}</span>
      <span>$${producto.precio.toFixed(2)}</span>
      <span>${producto.cantidad}</span>
      <span>$${(producto.precio * producto.cantidad).toFixed(2)}</span>
      <button class="eliminar-btn" data-titulo="${producto.titulo}"><i class="fas fa-trash-alt"></i></button>
    `;

    const botonEliminar = nuevoItem.querySelector('.eliminar-btn');
    botonEliminar.addEventListener('click', eliminarDelCarrito);

    carritoItems.appendChild(nuevoItem);

    total += producto.precio * producto.cantidad;
  });

  totalCarrito.textContent = '$' + total.toFixed(2);
}

// Función para eliminar todo el contenido del carrito
function eliminarTodoCarrito() {
  carritoProductos.length = 0;
  actualizarCarritoVisual();
}

// Función para cerrar el modal del carrito
function cerrarCarritoModal() {
  modalCarrito.style.display = 'none';
}

function comprar() {
  // Lógica para procesar la compra

  // Reiniciar carrito
  carritoProductos.length = 0; // Limpiar el array de productos
  actualizarCarritoVisual();

  cerrarCarritoModal();

  // Redireccionar a Mis compras.html después de la compra
  window.location.href = './Mis%20compras.html';
}

// Función para vaciar el carrito (eliminar todos los productos)
function vaciarCarrito() {
  // Vaciamos el array de productos en el carrito
  carritoProductos.length = 0;

  // Actualizamos el carrito visualmente
  actualizarCarritoVisual();

  // Cerramos el carrito modal
  cerrarCarritoModal();
}







