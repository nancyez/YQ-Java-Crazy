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

//Usuarios en localStorage

var listaDeUsuario = [];

function addUsuarioToSystem(id,nombre,apellido,telefono,email,contrasena){
	var nuevoUsuario ={
		id:pid,
		nombre : nombre,
		apellido : apellido,
		telefono :telefono,
		email: email,
		contrasena:contrasena,
	};
	console.log(nuevoUsuario);
	listaDeUsuario.push(nuevoUsuario);
	localStoragelistaDeUsuario(listaDeUsuario);
}

function obtenerListaDeUsuario(){
	var storedlist=localStorage.getItem('localStoragelistaDeUsuario');
	if(storedlist == null){
		listaDeUsuario=[];
	}else{
		listaDeUsuario=JSON.parse(storedlist);
	}
	return listaDeUsuario;
}

function localStoragelistaDeUsuario(list){
	localStorage.setItem('locallistaDeUsuarios', JSON.stringify(list));
}
