document.getElementById("boton").addEventListener("click", function () {
	// Realiza la solicitud AJAX con jQuery
	$.ajax({
		type: "GET",
		url: "ejercicio1.xml",
		dataType: "xml",
		success: function (data) {
			// Procesa los datos XML y muestra en la consola
			$(data)
				.find("item")
				.each(function () {
					var nombre = $(this).attr("nombre");
					var apellido = $(this).attr("apellido");
					document.write("<p>Nombre: " + nombre + ", Apellido: " + apellido + "</p>");
				});
		},
		error: function () {
			console.error("Error al cargar el archivo XML.");
		},
	});
});
