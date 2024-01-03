"use strict";
document.getElementById("boton").addEventListener("click", function () {
	let nombre = "Álvaro";
	let apellido = "Martín";

	let xhr = new XMLHttpRequest();

	let url = "ejercicio3.php?nombre=" + nombre + "&apellido=" + apellido;

	xhr.open("GET", url, true);

	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 400) {
			document.write(xhr.responseText);
		} else {
			document.write("Error al realizar la solicitud AJAX");
		}
	};

	xhr.onerror = function () {
		document.write("Error de red al intentar realizar la solicitud");
	};

	xhr.send();
});
