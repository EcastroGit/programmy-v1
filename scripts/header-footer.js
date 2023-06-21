const login = document.querySelector("#login");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");


/* login */

login.innerHTML = `
	<div id="login-div1"></div>
	
	<div id="login-div2">
		
		<div>
			<i class="fa-solid fa-right-to-bracket fa-1x"></i><span id="login-start">Login</span>
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
`

/* header */

header.innerHTML = `
	<div id="logo">
		<i class='bx bxs-devices bx-md'></i>
		<p id="logo-text">ProgrammY</p>
	</div>
	
	<div id="search-bar-container">
		<form class="search-bar">
			<input type="text" size="auto" placeholder="buscar" id="buscar" />
			<button><i class="bx bx-search bx-xs"></i></button>
		</form> 
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
	<div class="footer-element">
		<h3>Redes sociales</h3>
		<hr />
		<i class="bi bi-facebook" style="font-size: 1.3rem;"></i>
		<i class="bi bi-instagram" style="font-size: 1.3rem;"></i>
		<i class="bi bi-twitter" style="font-size: 1.3rem;"></i>
		<i class="bi bi-linkedin" style="font-size: 1.3rem;"></i>
		<i class="bi bi-youtube" style="font-size: 1.3rem;"></i>
	</div>
	<div class="footer-element">
		<h3>Sitio</h3>
		<hr />
		<p><a>Inicio</a></p>
		<p><a>Teoría</a></p>
		<p><a>Actividades</a></p>
		<p><a>Recursos</a></p>
	</div>
	<div class="footer-element">
		<h3>Políticas</h3>
		<hr />
		<p><a>Política de privacidad</a></p>
		<p><a>Términos y condiciones</a></p>
	</div>
`;


