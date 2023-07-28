//alert("¡Hola! Estás a punto de entrar a un sitio con recetas deliciosas!");
// var mensaje = ("¡Hola! Estás a punto de entrar a un sitio con recetas deliciosas!");
// var estilo = 'color : #0E4950; font-size: 18px';

// alert("%c" + mensaje, estilo);


// Función para mostrar el modal al cargar la página
window.onload = function () {
    openModal();
  };
  
  // Función para mostrar el modal
  function openModal() {
    document.getElementById('modal').style.display = 'block';
  }
  
  // Función para ocultar el modal
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  

