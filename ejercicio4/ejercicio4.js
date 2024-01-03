"use strict";
$(document).ready(function () {
	$("#boton").on("click", function () {
		let nombre = "Álvaro";
		let apellido = "Martín";

		$.ajax({
			type: "GET",
			url: "ejercicio4.php",
			data: {
				nombre: nombre,
				apellido: apellido,
			},
			success: function (response) {
				document.write("Respuesta del servidor: ", response);
			},
			error: function () {
				document.write("Error al realizar la solicitud AJAX");
			},
		});
	});
});
