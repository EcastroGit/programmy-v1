const login = document.querySelector("#login");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

/* login */

login.innerHTML =`
	<div id="login-div1"></div>
	
	<div id="login-div2">
		
		<div id="login-options">
			<span id="login-start"><i class="fa-solid fa-right-to-bracket fa-1x"></i>Login</span>
			<span id="register-start">Registrarse</span>
		</div>
		
		<div id="login-form" class="login-inactivo">
			
			<span id="close-login"><i class="bi bi-x-circle"></i></span>
			
			<h3>Inicio de sesión</h3>
			<br />
			
			<form>
				  
			   <br />

			  <label for="username">Usuario:</label>
			  <input type="text" id="username" name="username" size="auto">

			  <br />

			  <label for="password">Contraseña:</label>
			  <input type="password" id="password" name="password" size="auto">
				 
			  <br />
				  
			  <button type="submit" id="login-btn">Iniciar sesión</button>
			  
			  <br />
			  
			  <span>¿Olvidó su contraseña?</span>
			
			</form>
		
		</div>

	</div>
`;

/* header */

header.innerHTML = `
	<div id="logo">
		<i class='bx bxs-devices bx-md'></i>
		<a style="text-decoration: none; color: white" href="index.html"><p id="logo-text">ProgrammY</p></a>
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
			<a href="index.html">Inicio</a>
			<a href="teoria.html">Teoría</a>
			<a href="actividades.html">Actividades</a>
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
			<span><a href="actividades.html">Actividades</a></span>
			<span><a href="recursos.html">Recursos</a></span>
		</div>
	
		<div class="social-icons">
			<i class="bi bi-facebook" style="font-size: 1.3rem;"></i>
			<i class="bi bi-instagram" style="font-size: 1.3rem;"></i>
			<i class="bi bi-twitter" style="font-size: 1.3rem;"></i>
			<i class="bi bi-linkedin" style="font-size: 1.3rem;"></i>
			<i class="bi bi-youtube" style="font-size: 1.3rem;"></i>
		</div>
		<div style="text-align:center"><a style="text-decoration: none; color: white" href="privacidad.html">Política de privacidad</a></div>
		<div style="text-align:center"><span style="color: white">© Copyright 2023 - Programmy</span></div>
		<div style="text-align:center">Developed by <strong>Esteban Castro</strong></div>
		
	</div>
`;

// Funciónes para abrir y cerrar barra de búsqueda 

const searchIcon = document.querySelector("#search-icon");
const searchForm = document.querySelector("#search-form");
const searchFormClose = document.querySelector("#search-form-close")

searchIcon.addEventListener("click", () => {
	searchForm.classList.toggle("search-bar-hidden");
})

searchFormClose.addEventListener("click", () => {
	searchForm.classList.add("search-bar-hidden");
})
