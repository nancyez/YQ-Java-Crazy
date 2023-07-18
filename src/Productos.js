// Obtenemos todos los botones "Agregar al carrito"
const botonesCarrito = document.querySelectorAll('.botton-item');

// Iteramos sobre cada botón y agregamos un listener de click
botonesCarrito.forEach((boton) => {
  boton.addEventListener('click', () => {
    // Obtenemos el precio actual del elemento
    const precioItem = boton.parentNode.querySelector('.precio-item');
    const precioActual = parseFloat(precioItem.innerText.replace('$', ''));

    // Incrementamos el precio en 100
    const nuevoPrecio = precioActual + 100;

    // Actualizamos el texto del precio
    precioItem.innerText = '$' + nuevoPrecio.toFixed(2);
  });
});

const botonesCarrito = document.querySelectorAll('.botton-item');

// Iteramos sobre cada botón y agregamos un listener de click
botonesCarrito.forEach((boton) => {
  boton.addEventListener('click', () => {
    // Obtenemos el precio actual del elemento
    const precioItem = boton.parentNode.querySelector('.precio-item');
    const precioActual = parseFloat(precioItem.innerText.replace('$', ''));

    // Incrementamos el precio en 100
    const nuevoPrecio = precioActual + 100;

    // Actualizamos el texto del precio
    precioItem.innerText = '$' + nuevoPrecio.toFixed(2);
  });
});