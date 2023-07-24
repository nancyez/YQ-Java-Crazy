// Obtener elementos del DOM
/*
const botonesAgregar = document.querySelectorAll('.botton-item');
const modalCarrito = document.getElementById('carrito-modal');
const cerrarModal = document.querySelector('.cerrar-modal');
const carritoItems = document.getElementById('carrito-items');
const totalCarrito = document.getElementById('total-carrito');
const comprarBtn = document.getElementById('comprar-btn');
const verCanasta = document.getElementById('canasta');

// Event listeners
botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', agregarACanasta);
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

// Función para comprar
function comprar() {
  // Aquí puedes agregar la lógica para procesar la compra, como enviar la información a un servidor, vaciar el carrito, etc.
  alert('¡Gracias por tu compra!');
  carrito = [];
  actualizarCarrito();
  cerrarModal();
}*/

// Variables para el carrito
let carrito = [];
let total = 0;

// Obtener elementos del DOM
const carritoModal = document.getElementById('carrito-modal');
const cerrarModal = document.querySelector('.cerrar-modal');
const comprarBtn = document.getElementById('comprar-btn');
const contadorProductosInput = document.getElementById('contador-productos');
const carritoItems = document.getElementById('carrito-items');
const totalCarrito = document.getElementById('total-carrito');

// Función para abrir el modal
function abrirModal() {
  carritoModal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
  carritoModal.style.display = 'none';
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  // Verificar si el producto ya existe en el carrito
  const index = carrito.findIndex(item => item.nombre === producto.nombre);
  if (index !== -1) {
    carrito[index].cantidad += parseInt(contadorProductosInput.value);
  } else {
    producto.cantidad = parseInt(contadorProductosInput.value);
    carrito.push(producto);
  }
  actualizarCarrito();
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
  carritoItems.innerHTML = '';
  total = 0;
  carrito.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    carritoItems.innerHTML += `
      <div class="carrito-item">
        <span>${producto.nombre}</span>
        <span>Precio: $${producto.precio.toFixed(2)}</span>
        <span>Cantidad: ${producto.cantidad}</span>
        <span>Subtotal: $${subtotal.toFixed(2)}</span>
      </div>
    `;
    total += subtotal;
  });
  totalCarrito.textContent = `$${total.toFixed(2)}`;
}

// Función para comprar
function comprar() {
  // Aquí puedes agregar la lógica para procesar la compra, como enviar la información a un servidor, vaciar el carrito, etc.
  alert('¡Gracias por tu compra!');
  carrito = [];
  actualizarCarrito();
  cerrarModal();
}

// Eventos
cerrarModal.addEventListener('click', cerrarModal);
comprarBtn.addEventListener('click', comprar);

// Ejemplo de uso:
abrirModal();

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  // Verificar si el producto ya existe en el carrito
  const index = carrito.findIndex(item => item.nombre === producto.nombre);
  const cantidad = parseInt(contadorProductosInput.value);

  if (index !== -1) {
    carrito[index].cantidad += cantidad;
    carrito[index].subtotal = carrito[index].precio * carrito[index].cantidad;
  } else {
    producto.cantidad = cantidad;
    producto.subtotal = producto.precio * producto.cantidad;
    carrito.push(producto);
  }
  actualizarCarrito();
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
  carritoItems.innerHTML = '';
  total = 0;
  carrito.forEach(producto => {
    carritoItems.innerHTML += `
      <div class="carrito-item">
        <span>${producto.nombre}</span>
        <span>Precio: $${producto.precio.toFixed(2)}</span>
        <span>Cantidad: ${producto.cantidad}</span>
      </div>
    `;
    total += producto.subtotal;
  });
  totalCarrito.textContent = `$${total.toFixed(2)}`;
}

// Función para manejar el cambio en el input de cantidad
contadorProductosInput.addEventListener('change', () => {
  const cantidad = parseInt(contadorProductosInput.value);
  if (cantidad <= 0) {
    contadorProductosInput.value = 1;
  }
  actualizarCarrito();
});



