"use strict";
document.getElementById("boton").addEventListener("click", function () {
	let xhr = new XMLHttpRequest();

	xhr.open("GET", "ejercicio1.xml", true);

	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 400) {
			let xmlDoc = xhr.responseXML;
			let items = xmlDoc.getElementsByTagName("item");

			for (let i = 0; i < items.length; i++) {
				let nombre = items[i].getAttribute("nombre");
				let apellido = items[i].getAttribute("apellido");
				document.write("Nombre: " + nombre + "<br>Apellido: " + apellido + "<br>");
			}
		} else {
			document.write("Error al cargar el archivo XML");
		}
	};

	xhr.onerror = function () {
		document.write("Error al intentar realizar la solicitud");
	};

	xhr.send();
});
