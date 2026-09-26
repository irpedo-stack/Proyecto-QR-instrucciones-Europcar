const botonEurostars = document.getElementById("eurostars");
const botonVialia = document.getElementById("vialia");

const inicio = document.getElementById("inicio");
const instrucciones = document.getElementById("instrucciones");

const tituloParking = document.getElementById("tituloParking");
const pasos = document.getElementById("pasos");

const botonVolver = document.getElementById("volver");


botonEurostars.addEventListener("click", function() {
mostrarInstrucciones("HOTEL EUROSTARS", [

    {
        numero: 1,
        texto: "Vamos recto sin llegar a salir del edificio hasta llegar al siguiente corredor a la derecha.",
        imagen: "images/eurostars/paso1.jpg"
    },

    {
        numero: 2,
        texto: "Giramos a la derecha en este pasillo.",
        imagen: "images/eurostars/paso2.jpg"
    },

    {
        numero: 3,
        texto: "Todo recto por el pasillo hasta llegar a la salida que tenemos justo en frente.",
        imagen: "images/eurostars/paso3.jpg"
    },

    {
        numero: 4,
        texto: "Salimos por esta salida.",
        imagen: "images/eurostars/paso4.jpg"
    },

    {
        numero: 5,
        texto: "Nada más salir giramos a la derecha y de frente ya vemos el hotel.",
        imagen: "images/eurostars/paso5.jpg"
    },

    {
        numero: 6,
        texto: "Continúa dirección al hotel.",
        imagen: "images/eurostars/paso6.jpg"
    },

    {
        numero: 7,
        texto: "Aquí ya vemos la señal del parking.",
        imagen: "images/eurostars/paso7.jpg"
    },

    {
        numero: 8,
        texto: "Entramos a este parking.",
        imagen: "images/eurostars/paso8.jpg"
    },

    {
        numero: 9,
        texto: "Has llegado, ahora busca tu vehículo al fondo del parking; yendo a la zona de Europcar en la plaza indicada por el personal escrita en el sobre verde.",
        imagen: "images/eurostars/paso9.jpg"
    }

]);

});


botonVialia.addEventListener("click", function() {
mostrarInstrucciones("VIALIA", [

    {
        numero: 1,
        texto: "Nada más salir tenemos los ascensores en frente.",
        imagen: "images/vialia/paso1.jpg"
    },

    {
        numero: 2,
        texto: "Cogemos cualquiera de los 3 de la derecha, el de la izquierda del todo solo va hacia arriba a la sala VIP.",
        imagen: "images/vialia/paso2.jpg"
    },

    {
        numero: 3,
        texto: "Vamos a la planta -2.",
        imagen: "images/vialia/paso3.jpg"
    },

    {
        numero: 4,
        texto: "Al salir giramos a la izquierda.",
        imagen: "images/vialia/paso4.jpg"
    },

    {
        numero: 5,
        texto: "Entramos al parking por esta puerta y vamos hacia la izquierda.",
        imagen: "images/vialia/paso5.jpg"
    },

    {
        numero: 6,
        texto: "Buscamos el número y letra indicado por el personal de oficina, escrito en el sobre verde que os hemos proporcionado.",
        imagen: "images/vialia/paso6.jpg"
    }

]);

});


botonVolver.addEventListener("click", function() {

    instrucciones.style.display = "none";
    inicio.style.display = "block";

});

function mostrarInstrucciones(titulo, listaPasos) {

    inicio.style.display = "none";
    instrucciones.style.display = "block";

    tituloParking.textContent = titulo;

    pasos.innerHTML = "";

    listaPasos.forEach(function(paso) {

        const numero = document.createElement("h3");
        numero.textContent = "Paso " + paso.numero;

        const texto = document.createElement("p");
        texto.textContent = paso.texto;

        const imagen = document.createElement("img");
        imagen.src = paso.imagen;
        imagen.alt = paso.texto;

        pasos.appendChild(numero);
        pasos.appendChild(texto);
        pasos.appendChild(imagen);

    });
}
