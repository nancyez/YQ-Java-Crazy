$(document).ready(function() {

	//validate login form 
	$("#registro-form").validate({
		ignore: null,
		ignore: 'input[type="hidden"]',
		errorPlacement: function( error, element ) {
			var place = element.closest('.input-group');
			if (!place.get(0)) {
				place = element;
			}
			if (error.text() !== '') {
				place.after(error);
			}
		},
		errorClass:'help-block',
		rules: {
			name: {
				required: true,
				minlength: 6
			},
			lastname:{
				required: true,
				minlength: 4
			},
			phone:{
				required:true,
				number:true,
				minlength:10
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 5
			}
		},
		messages: {
			password: {
				required: "Proporciona tu contraseña",
				minlength: "Su contraseña debe tener al menos 6 caracteres"
			},
			phone:{
				required:"Proporciona tu número de teléfono",
				number:"Ingresa solo dígitos",
				minlength:"Su número de teléfono debe tener al menos 10 digitos"
			},
			email: "Por favor, ingresa tu cuenta de correo",
			lastname:{
				required:"Por favor, ingresa tu apellido",
				minlength:"Escriba su apellido completo",
			},
			name: "Por favor, ingresa tu nombre de usuario",
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

// funcion mostrar password

let num = 0;

function showPassword() {
    if (num == 0) {
        document.getElementById("password1").type = "text";
        document.getElementById("boton-password").innerHTML = "Ocultar contraseña";
        num = 1; // cambiamos num a 1 para indicar que la contraseña está visible.
    } else {
        document.getElementById("password1").type = "password";
        document.getElementById("boton-password").innerHTML = "Mostrar contraseña";
        num = 0; // cambiamos num a 0 para indicar que la contraseña está oculta.
    }
}

  document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el formulario por su ID
    const form = document.getElementById("registro-form");

    // Añadimos el evento de escucha al formulario
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evitamos que el formulario se envíe de forma tradicional

      // Obtenemos los valores de los campos del formulario
      const name = document.getElementById("name").value;
      const lastname = document.getElementById("lastname").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password1").value;

      // Creamos un objeto con los datos del formulario
      const formData = {
        user: name,
        lastname: lastname,
        phone: phone,
        email: email,
        password: password,
      };

      // Convertimos el objeto a formato JSON y lo guardamos en LocalStorage
      localStorage.setItem("formData", JSON.stringify(formData));

      // Redireccionar a otra página o realizar otras acciones después de guardar los datos
      window.location.href = "../pages/Login.html";
    });
  });


