//ACTIVIDAD 1: DRAG & DROP

/* PARTE 1: Definiciones y funciones para habilitar el arrastrar y soltar objetos en las cajas */

const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const caja3 = document.getElementById("caja3");
const lenguajes = document.getElementsByClassName("lenguaje");

for (var i = 0; i < lenguajes.length; i++) {
  lenguajes[i].setAttribute("draggable", "true");
  lenguajes[i].setAttribute("id", "lenguaje" + i);
  lenguajes[i].addEventListener("dragstart", (ev) => iniciarArrastre(ev));
}

function iniciarArrastre(ev) {
  ev.dataTransfer.setData("idlenguaje", ev.target.id);
  console.log(ev.target.id);
}

function permitirSoltar(ev) {
  console.log("arrastrando");
  ev.preventDefault();
}

function soltar1(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("idlenguaje");
  caja1.appendChild(document.getElementById(data));
}

function soltar2(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("idlenguaje");
  caja2.appendChild(document.getElementById(data));
}

function soltar3(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("idlenguaje");
  caja3.appendChild(document.getElementById(data));
}

caja1.addEventListener("dragover", (ev) => permitirSoltar(ev));
caja1.addEventListener("drop", (ev) => soltar1(ev));

caja2.addEventListener("dragover", (ev) => permitirSoltar(ev));
caja2.addEventListener("drop", (ev) => soltar2(ev));

caja3.addEventListener("dragover", (ev) => permitirSoltar(ev));
caja3.addEventListener("drop", (ev) => soltar3(ev));

/* PARTE 2: Definiciones y funciones para validar si se agruparon los lenguajes correctamente */

const html = document.querySelector(".html5");
const css = document.querySelector(".css");
const javascript = document.querySelector(".javascript");
const react = document.querySelector(".react");
const angular = document.querySelector(".angular");
const bootstrap = document.querySelector(".bootstrap");
const php = document.querySelector(".php");
const python = document.querySelector(".python");
const mysql = document.querySelector(".mysql");
const mongodb = document.querySelector(".mongodb");
const go = document.querySelector(".go");

caja2.addEventListener("drop", () => {
  if (
    caja2.contains(html) &&
    caja2.contains(css) &&
    caja2.contains(bootstrap) &&
    caja2.contains(javascript) &&
    caja2.contains(react) &&
    caja2.contains(angular)
  ) {
    caja2.style.border = "3px solid #00FF00";
    check1 = document.querySelector("#check1");
    check1.innerHTML = "CORRECTO";
    check1.style.color = "#00FF00";
  } else {
    check1.innerHTML = "INCOMPLETO";
    check1.style.color = "#FF3300";
  }
});

caja3.addEventListener("drop", () => {
  if (
    caja3.contains(php) &&
    caja3.contains(python) &&
    caja3.contains(mysql) &&
    caja3.contains(mongodb) &&
    caja3.contains(go)
  ) {
    caja3.style.border = "3px solid #00FF00";
    check2 = document.querySelector("#check2");
    check2.innerHTML = "CORRECTO";
    check2.style.color = "#00FF00";
  } else {
    check2.innerHTML = "INCOMPLETO";
    check2.style.color = "#FF3300";
  }
});

//ACTIVIDAD 2: PRUGUNTAS DE SELECCIÓN MÚLTIPLE

//Pregunta 1
function q1() {
  const respuesta1 = document.querySelector('input[name="respuesta1"]:checked');
  const mensaje = document.getElementById("mensaje1");

  if (respuesta1 && respuesta1.value === "q1-opcion1") {
    mensaje1.textContent = "¡Respuesta correcta!";
    mensaje1.style.color = "green";
  } else {
    mensaje1.textContent = "Respuesta incorrecta, intenta de nuevo.";
    mensaje1.style.color = "red";
  }
}

//Pregunta 2
function q2() {
  const respuesta2 = document.querySelector('input[name="respuesta2"]:checked');
  const mensaje2 = document.getElementById("mensaje2");

  if (respuesta2 && respuesta2.value === "q2-opcion3") {
    mensaje2.textContent = "¡Respuesta correcta!";
    mensaje2.style.color = "green";
  } else {
    mensaje2.textContent = "Respuesta incorrecta, intenta de nuevo.";
    mensaje2.style.color = "red";
  }
}

//Pregunta 3
function q3() {
  const respuesta3 = document.querySelector('input[name="respuesta3"]:checked');
  const mensaje3 = document.getElementById("mensaje3");

  if (respuesta3 && respuesta3.value === "q3-opcion2") {
    mensaje3.textContent = "¡Respuesta correcta!";
    mensaje3.style.color = "green";
  } else {
    mensaje3.textContent = "Respuesta incorrecta, intenta de nuevo.";
    mensaje3.style.color = "red";
  }
}

//Pregunta 4
function q4() {
  const respuesta4 = document.querySelector('input[name="respuesta4"]:checked');
  const mensaje4 = document.getElementById("mensaje4");

  if (respuesta4 && respuesta4.value === "q4-opcion2") {
    mensaje4.textContent = "¡Respuesta correcta!";
    mensaje4.style.color = "green";
  } else {
    mensaje4.textContent = "Respuesta incorrecta, intenta de nuevo.";
    mensaje4.style.color = "red";
  }
}

// Se verifican las respuestas
function verificarRespuestas() {
  q1();
  q2();
  q3();
  q4();
}

// ACTIVIDAD 3: VERDADERO O FALSO

//se definen los objetos del DOM a utilizar

const vf1Verdadero = document.querySelector("#vf1-verdadero");
const vf1Falso = document.querySelector("#vf1-falso");
const vf2Verdadero = document.querySelector("#vf2-verdadero");
const vf2Falso = document.querySelector("#vf2-falso");
const vf3Verdadero = document.querySelector("#vf3-verdadero");
const vf3Falso = document.querySelector("#vf3-falso");
const vf1Tag = document.querySelector("#vf1-tag");
const vf2Tag = document.querySelector("#vf2-tag");
const vf3Tag = document.querySelector("#vf3-tag");

// Se crean las funciones para comprobar la respuesta

vf1Verdadero.addEventListener("click", () => {
  vf1Tag.innerHTML = "Correcto";
  vf1Tag.style.color = "green";
});
vf1Falso.addEventListener("click", () => {
  vf1Tag.innerHTML = "Incorrecto";
  vf1Tag.style.color = "Red";
});
vf2Verdadero.addEventListener("click", () => {
  vf2Tag.innerHTML = "Correcto";
  vf2Tag.style.color = "green";
});
vf2Falso.addEventListener("click", () => {
  vf2Tag.innerHTML = "Incorrecto";
  vf2Tag.style.color = "red";
});
vf3Verdadero.addEventListener("click", () => {
  vf3Tag.innerHTML =
    "Incorrecto: las API permiten intercambio de datos entre dos componentes de software, como por ejemplo el frontend y el backend.";
  vf3Tag.style.color = "red";
});
vf3Falso.addEventListener("click", () => {
  vf3Tag.innerHTML = "Correcto";
  vf3Tag.style.color = "green";
});
