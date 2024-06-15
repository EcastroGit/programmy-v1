/* para trabajar este menu movil se toma como referencia el generador dinámico de header & footer
en el archivo header-footer.js */

const barMenu = document.querySelector("#bars");
const menuMovil = document.querySelector("#list-nav");
const menuClon = menuMovil.cloneNode(true); // se clona el menu de navegación existente
const body = document.querySelector("#body");

/* se asigna un id único a la copia del menu y se le asigna la clase inicial oculto */

menuClon.setAttribute("id", "menu-clon");
menuClon.classList.add("menu-clon-oculto");

// se crea la opción para cerrar el menu de barras

const cerrarDiv = document.createElement("a");
const xCerrar = document.createElement("i");
xCerrar.setAttribute("class", "bi bi-x-circle text-white");
cerrarDiv.appendChild(xCerrar);
menuClon.insertBefore(cerrarDiv, menuClon.firstChild);
cerrarDiv.setAttribute("id", "bars-menu-close");
xCerrar.addEventListener("click", () => {
  menuClon.classList.toggle("menu-clon-oculto");
  menuClon.classList.toggle("menu-clon-activo");
});

/* se toma como referencia el body para insertar el menu movil después del header en cada página de la aplicación */

body.children[0].insertAdjacentElement("afterend", menuClon);

/* función para activar y desactivar el menu movil */

barMenu.addEventListener("click", () => {
  menuClon.classList.toggle("menu-clon-activo"); // estilos en main.css
  menuClon.classList.toggle("menu-clon-oculto"); // estilos en main.css
});
