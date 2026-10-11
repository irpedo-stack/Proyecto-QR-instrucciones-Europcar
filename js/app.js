const botonEurostars = document.getElementById("eurostars");
const botonVialia = document.getElementById("vialia");
const botonesIdioma = document.querySelectorAll(".boton-idioma");

const inicio = document.getElementById("inicio");
const instrucciones = document.getElementById("instrucciones");
const idiomas = document.getElementById("idiomas");
const seleccionParking = document.getElementById("seleccionParking");

const bienvenida = document.getElementById("bienvenida");
const tituloIdioma = document.getElementById("tituloIdioma");
const tituloParkingSeleccion = document.getElementById("tituloParkingSeleccion");
const tituloParking = document.getElementById("tituloParking");
const subtituloInstrucciones = document.getElementById("subtituloInstrucciones");
const pasos = document.getElementById("pasos");
const botonVolver = document.getElementById("volver");

let idiomaActual = "es";

const traducciones = {
    es: {
        bienvenida: "Bienvenido. Te ayudamos a encontrar tu vehículo.",
        tituloIdioma: "Selecciona tu idioma",
        tituloParking: "¿Dónde te hemos dicho que está tu vehículo?",
        instrucciones: "Instrucciones para llegar al parking asignado",
        eurostars: "HOTEL EUROSTARS",
        vialia: "VIALIA",
        volver: "← Volver",
        paso: "Paso"
    },
    en: {
        bienvenida: "Welcome. We'll help you find your vehicle.",
        tituloIdioma: "Choose your language",
        tituloParking: "Where have we told you your vehicle is?",
        instrucciones: "Directions to your assigned car park",
        eurostars: "EUROSTARS HOTEL",
        vialia: "VIALIA",
        volver: "← Back",
        paso: "Step"
    },
    fr: {
        bienvenida: "Bienvenue. Nous vous aidons à trouver votre véhicule.",
        tituloIdioma: "Choisissez votre langue",
        tituloParking: "Où se trouve votre véhicule ?",
        instrucciones: "Instructions pour rejoindre le parking attribué",
        eurostars: "HÔTEL EUROSTARS",
        vialia: "VIALIA",
        volver: "← Retour",
        paso: "Étape"
    },
    de: {
        bienvenida: "Willkommen. Wir helfen Ihnen, Ihr Fahrzeug zu finden.",
        tituloIdioma: "Wählen Sie Ihre Sprache",
        tituloParking: "Wo befindet sich Ihr Fahrzeug?",
        instrucciones: "Wegbeschreibung zum zugewiesenen Parkplatz",
        eurostars: "HOTEL EUROSTARS",
        vialia: "VIALIA",
        volver: "← Zurück",
        paso: "Schritt"
    },
    it: {
        bienvenida: "Benvenuto. Ti aiutiamo a trovare il tuo veicolo.",
        tituloIdioma: "Seleziona la lingua",
        tituloParking: "Dove si trova il tuo veicolo?",
        instrucciones: "Istruzioni per raggiungere il parcheggio assegnato",
        eurostars: "HOTEL EUROSTARS",
        vialia: "VIALIA",
        volver: "← Indietro",
        paso: "Passaggio"
    },
    pt: {
        bienvenida: "Bem-vindo. Ajudamos a encontrar o seu veículo.",
        tituloIdioma: "Selecione o seu idioma",
        tituloParking: "Onde está o seu veículo?",
        instrucciones: "Instruções para chegar ao estacionamento atribuído",
        eurostars: "HOTEL EUROSTARS",
        vialia: "VIALIA",
        volver: "← Voltar",
        paso: "Passo"
    },
    zh: {
        bienvenida: "欢迎！我们将帮助您找到您的车辆。",
        tituloIdioma: "请选择您的语言",
        tituloParking: "您的车辆停在哪里？",
        instrucciones: "前往指定停车场的路线说明",
        eurostars: "EUROSTARS 酒店",
        vialia: "VIALIA",
        volver: "← 返回",
        paso: "第"
    },
    ko: {
        bienvenida: "환영합니다. 차량을 찾는 데 도움을 드리겠습니다.",
        tituloIdioma: "언어를 선택하세요",
        tituloParking: "차량이 어디에 있나요?",
        instrucciones: "지정된 주차장으로 가는 안내",
        eurostars: "EUROSTARS 호텔",
        vialia: "VIALIA",
        volver: "← 뒤로",
        paso: "단계"
    },
    ja: {
        bienvenida: "ようこそ。お車の場所をご案内します。",
        tituloIdioma: "言語を選択してください",
        tituloParking: "お車はどこにありますか？",
        instrucciones: "指定された駐車場への案内",
        eurostars: "ユーロスターズホテル",
        vialia: "VIALIA",
        volver: "← 戻る",
        paso: "ステップ"
    }
};

const instruccionesParking = {
    eurostars: [
        {
            numero: 1,
            texto: "Vamos recto sin llegar a salir del edificio hasta llegar al siguiente corredor a la derecha.",
            imagen: "images/Eurostars/paso1.jpg"
        },
        {
            numero: 2,
            texto: "Giramos a la derecha en este pasillo.",
            imagen: "images/Eurostars/paso2.jpg"
        },
        {
            numero: 3,
            texto: "Todo recto por el pasillo hasta llegar a la salida que tenemos justo en frente.",
            imagen: "images/Eurostars/paso3.jpg"
        },
        {
            numero: 4,
            texto: "Salimos por esta salida.",
            imagen: "images/Eurostars/paso4.jpg"
        },
        {
            numero: 5,
            texto: "Nada más salir giramos a la derecha y de frente ya vemos el hotel.",
            imagen: "images/Eurostars/paso5.jpg"
        },
        {
            numero: 6,
            texto: "Continúa dirección al hotel.",
            imagen: "images/Eurostars/paso6.jpg"
        },
        {
            numero: 7,
            texto: "Aquí ya vemos la señal del parking.",
            imagen: "images/Eurostars/paso7.jpg"
        },
        {
            numero: 8,
            texto: "Entramos a este parking.",
            imagen: "images/Eurostars/paso8.jpg"
        },
        {
            numero: 9,
            texto: "Has llegado. Ahora busca tu vehículo al fondo del parking, en la zona de Europcar y en la plaza indicada por el personal en el sobre verde.",
            imagen: "images/Eurostars/paso9.jpg"
        }
    ],

    vialia: [
        {
            numero: 1,
            texto: "Nada más salir tenemos los ascensores en frente.",
            imagen: "images/Vialia/paso1.jpg"
        },
        {
            numero: 2,
            texto: "Cogemos cualquiera de los tres ascensores de la derecha. El de la izquierda del todo solo va hacia arriba a la sala VIP.",
            imagen: "images/Vialia/paso2.jpg"
        },
        {
            numero: 3,
            texto: "Vamos a la planta -2.",
            imagen: "images/Vialia/paso3.jpg"
        },
        {
            numero: 4,
            texto: "Al salir giramos a la izquierda.",
            imagen: "images/Vialia/paso4.jpg"
        },
        {
            numero: 5,
            texto: "Entramos al parking por esta puerta y vamos hacia la izquierda.",
            imagen: "images/Vialia/paso5.jpg"
        },
        {
            numero: 6,
            texto: "Buscamos el número y la letra indicados por el personal de oficina, escritos en el sobre verde que os hemos proporcionado.",
            imagen: "images/Vialia/paso6.jpg"
        }
    ]
};

botonesIdioma.forEach(function(boton) {
    boton.addEventListener("click", function() {
        idiomaActual = boton.dataset.idioma;

        const textos = traducciones[idiomaActual];

        bienvenida.textContent = textos.bienvenida;
        tituloIdioma.textContent = textos.tituloIdioma;
        tituloParkingSeleccion.textContent = textos.tituloParking;
        subtituloInstrucciones.textContent = textos.instrucciones;
        botonEurostars.textContent = textos.eurostars;
        botonVialia.textContent = textos.vialia;
        botonVolver.textContent = textos.volver;

        document.documentElement.lang = idiomaActual;

        idiomas.style.display = "none";
        seleccionParking.style.display = "block";
    });
});

botonEurostars.addEventListener("click", function() {
    mostrarInstrucciones("eurostars");
});

botonVialia.addEventListener("click", function() {
    mostrarInstrucciones("vialia");
});

botonVolver.addEventListener("click", function() {
    instrucciones.style.display = "none";
    inicio.style.display = "block";
});

function mostrarInstrucciones(parking) {
    const textos = traducciones[idiomaActual];
    const listaPasos = instruccionesParking[parking];

    inicio.style.display = "none";
    instrucciones.style.display = "block";

    tituloParking.textContent =
        parking === "eurostars" ? textos.eurostars : textos.vialia;

    pasos.innerHTML = "";

    listaPasos.forEach(function(paso) {
        const numero = document.createElement("h3");
        numero.textContent = textos.paso + " " + paso.numero;

        const texto = document.createElement("p");
        texto.textContent = paso.texto;

        const imagen = document.createElement("img");
        imagen.src = paso.imagen;
        imagen.alt = paso.texto;
        imagen.loading = "lazy";

        pasos.appendChild(numero);
        pasos.appendChild(texto);
        pasos.appendChild(imagen);
    });
}