"use strict";
$(document).ready(function () {
	$("#boton").on("click", function () {
		$.ajax({
			type: "GET",
			url: "ejercicio2.xml",
			dataType: "xml",
			success: function (data) {
				let contenedor1 = $("#contenedor1");
				let contenedor2 = $("#contenedor2");

				contenedor1.empty();
				contenedor2.empty();

				$(data)
					.find("item")
					.each(function () {
						let nombre = $(this).attr("nombre");
						let apellido = $(this).attr("apellido");

						contenedor1.append("<p>Nombre: " + nombre + "</p>");
						contenedor2.append("<p>Apellido: " + apellido + "</p>");
					});
			},
			error: function () {
				console.error("Error al cargar el archivo XML");
			},
		});
	});
});
