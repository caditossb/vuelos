// script.js

document.getElementById("formularioReserva").addEventListener("submit", function(event) {
    event.preventDefault();

    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;
    let fecha = document.getElementById("fecha").value;

    if (origen && destino && fecha) {
        alert(`Vuelos de ${origen} a ${destino} para el ${fecha} disponibles.`);
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
