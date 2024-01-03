"use strict";
document.getElementById("boton").addEventListener("click", function () {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "ejercicio5.json", true);

	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 400) {
			let data = JSON.parse(xhr.responseText);

			document.getElementById("autor").innerText = data.nombre + " " + data.apellido;

			let primerLibro = data.libros[0];
			document.getElementById("titulo").innerText = primerLibro.titulo;
			document.getElementById("subtitulo").innerText = primerLibro.subTitulo;
		} else {
			document.write("Error al cargar el archivo JSON");
		}
	};

	xhr.onerror = function () {
		document.write("Error de red al intentar realizar la solicitud");
	};

	xhr.send();
});
