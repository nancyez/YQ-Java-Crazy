//------------- login.js -------------//
$(document).ready(function() {

	//validate login form 
	$("#login-form").validate({
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