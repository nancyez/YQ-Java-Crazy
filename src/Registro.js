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
		errorClass: 'help-block',
		rules: {
			Nuser: {
				required: true,
				minlength: 5
			},
			email: {
				required: true,
				email: true
			},
			Passwd: {
				required: true,
				minlength: 5
			}
		},
		messages: {
			Passwd: {
				required: "Proporciona tu contraseña",
				minlength: "Su contraseña debe tener al menos 5 caracteres"
			},
			email: "Por favor, ingresa tu cuenta de correo",
			Nuser: "Por favor, ingresa tu nombre de usuario",
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
        document.getElementById("contraseña").type = "text";
        document.getElementById("btn-password").innerHTML = "Ocultar contraseña";
        num = 1; // num a 1 para indicar que la contraseña está visible.
    } else {
        document.getElementById("contraseña").type = "password";
        document.getElementById("btn-password").innerHTML = "Mostrar contraseña";
        num = 0; // num a 0 para indicar que la contraseña está oculta.
    }
}