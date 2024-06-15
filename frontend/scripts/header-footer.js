const login = document.querySelector("#login");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

/* header */

header.innerHTML = `
	<div id="logo">
		<i class='bx bxs-devices bx-md'></i>
		<a style="text-decoration: none; color: white" href="index.html">ProgrammY</a>
	</div>
	
	<div id="search-bar-container">
		
		<div class="text-center">
			<button aria-label="Buscar" id="search-icon"><i class="bx bx-search bx-xs"></i></button>
		</div> 
		
		<div id="search-form" class="search-bar-hidden">
			
			<div id="search-form-close"><i class="bi bi-x-circle"></i></div>

			<div style="width:250px; heigth:auto;" class="mx-auto align-middle align-self-center">
				<p style="color: white; margin-top: 15%">Porfavor introduzca su consulta</p>
				<form id="search-bar" style="margin-top: 10%" >
						<input type="text" size="auto" placeholder="buscar" id="buscar" />
						<button aria-label="Consultar"><i class="bi bi-arrow-right"></i></button>
				</form>
			</div>
		</div>
		
	</div>

	<div>
		<nav id="list-nav">
			<a href="teoria.html">Teoría</a>
			<a href="recursos.html">Recursos</a>
		</nav>
		
		<div id="bars-menu">
			<span id="bars"><i class="fa-solid fa-bars fa-2x"></i></span>
		</div>
	</div>

`;

/* footer  */

footer.innerHTML = `
	<div id="footer-container">
	
		<div class="footer-nav">
			<span><a href="index.html">Inicio</a></span>
			<span><a href="teoria.html">Teoría</a></span>
			<span><a href="recursos.html">Recursos</a></span>
		</div>
	
		<div style="text-align:center"><a style="text-decoration: none; color: white" href="privacidad.html">Política de privacidad</a></div>
		<div style="text-align:center"><span style="color: white">© Copyright 2023 - Programmy</span></div>
		<div style="text-align:center">Desarrollado por <strong>Esteban Castro</strong></div>
		
	</div>
`;

// Funciónes para abrir y cerrar barra de búsqueda

const searchIcon = document.querySelector("#search-icon");
const searchForm = document.querySelector("#search-form");
const searchFormClose = document.querySelector("#search-form-close");

searchIcon.addEventListener("click", () => {
  searchForm.classList.toggle("search-bar-hidden");
});

searchFormClose.addEventListener("click", () => {
  searchForm.classList.add("search-bar-hidden");
});
