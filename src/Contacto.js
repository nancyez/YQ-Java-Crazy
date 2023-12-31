//------------- login.js -------------//
$(document).ready(function() {

	//validate login form 
	$("#contacto-form").validate({
		ignore: null,
		ignore: 'input[type="hidden"]',
		errorPlacement: function( error, element ) {
			var place = element.closest('.input-group');
			if (!place.get(0)) {
				place = element;
			}
			if (place.get(0).type === 'checkbox') {
				place = element.parent();
			}
			if (error.text() !== '') {
				place.after(error);
			}
		},
		errorClass:'help-block',
		rules:{
			fullname:{
				required: true,
				minlength: 5
			},
			email:{
				required: true,
				email: true
			},
			affair:{
				required: true,
				minlength: 10
			},
			message:{
				required:true,
				minlength:45,
			},
		},
		messages: {
			affair: "Por favor, ingresa el asunto",
			email: "Por favor, ingresa tu cuenta de correo",
			fullname: "Por favor, ingresa tu nombre completo",
			message:"Por favor, ingresa tu mensaje",
		},
		highlight: function( label ) {
			$(label).closest('.form-group').removeClass('has-success').addClass('has-error');
		},
		success: function( label ) {
			$(label).closest('.form-group').removeClass('has-error');
			label.remove();
		}
	});
});

// Función para mostrar el modal
function openModal() {
	document.getElementById('modal').style.display = 'block';
  }
  
  // Función para ocultar el modal
  function closeModal() {
	document.getElementById('modal').style.display = 'none';
  }
  
  // Evento para mostrar el modal al enviar el formulario
  document.getElementById('contacto-form').addEventListener('submit', function (event) {
	event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
	openModal();
  });