document.addEventListener('DOMContentLoaded', function () {
	document
		.getElementById('contact_form_id')
		.addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
	evento.preventDefault();
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let phone_number = document.getElementById('phone_number').value;

	let country_e = document.getElementById('country_origin');

	let contact_mode = '';
	let newsletter = '';

	let description = document.getElementById('description').value;

	if (name.length == 0) {
		alert('Debe ingresar un nombre');
		return;
	}
	if (email.length == 0) {
		alert('Debe ingresar un email valido');
		return;
	}
	if (phone_number.length == 0 || phone_number.length < 10) {
		alert('Debe ingresar un número de teléfono valido');
		return;
	}
	if (country_e.selectedIndex == 0) {
		alert('Debe seleccionar un país');
		return;
	}

	if (document.querySelector('input[name="contact_mode"]:checked')) {
		contact_mode = document.querySelector(
			'input[name="contact_mode"]:checked'
		).value;
	} else {
		alert('Debe seleccionar el medio de comunicación deseado.');
		return;
	}

	if (document.querySelector('input[name="newsletter"]:checked')) {
		newsletter = document.querySelector(
			'input[name="newsletter"]:checked'
		).value;
	} else {
		alert('Debe indicar si desea recibir anuncios.');
		return;
	}

	if (description.length == 0 || description.length < 20) {
		alert('Debe ingresar una descripción clara');
		return;
	}

	this.submit();
}
