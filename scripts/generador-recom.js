const recom1 = document.querySelector("#recom1");
const recom2 = document.querySelector("#recom2");
const recom3 = document.querySelector("#recom3");
const recom4 = document.querySelector("#recom4");
const recomElements = document.querySelector("#recom-elements");


recom1.addEventListener("click", () => {
	
	recom1.style.backgroundColor = "#E0E0E0";
	recom2.style.backgroundColor = "#ADADAD";
	recom3.style.backgroundColor = "#ADADAD";
	recom4.style.backgroundColor = "#ADADAD";
	
	recomElements.innerHTML = 
	
	`<div id="recom-image">
		
		<img src="images/recomendaciones/frontend-backend.jpeg" />
		
	</div>
	
	<div id="recom-text">
	
		<p>
			En el mundo del desarrollo web existen diferentes stacks(grupos) de tecnologías 
			sobre los cuales se puede construir una aplicación web. Del lado del cliente(front-end)
			los lenguajes habituales son HTML, CSS y javascript. Por parte del servidor(back-end), 
			existen múltiples opciones para construir tu aplicación, como python, java, php, etc. Por este motivo 
			en primer lugar es importante que investigues un poco y tengas un conocimiento general de que es font-end y back-end
			para así adquirir un conocimiento general de los lenguajes disponibles en cada especialidad. En <strong>ProgrammY</strong> 
			encuentras la teoría y los recursos necesarios para que empieces a adquirir las bases necesarias para escoger tu especialidad.
		</p>
	
	</div>`
});

recom2.addEventListener("click", () => {
	
	recom1.style.backgroundColor = "#ADADAD";
	recom2.style.backgroundColor = "#E0E0E0";
	recom3.style.backgroundColor = "#ADADAD";
	recom4.style.backgroundColor = "#ADADAD";
	
	recomElements.innerHTML = 
	
	`<div id="recom-image">
		
		<img src="images/recomendaciones/gestion-del-tiempo-estudio.jpg" />
		
	</div>

	<div id="recom-text">

		<p>
			Es importante que reserves un espacio de tiempo específico para estudiar, pues el éxito en la 
			programación está definido por un hábito de estudio autodidacta y constante. En este aspecto, 
			y dependiendo de la disponibilidad de tiempo que tengas, es bueno reservar determinados días a la semana
			para estudiar, podría ser de 30 minutos a 1 hora al día, o 30 minutos al día y durante el fin de semana
			reservar un espacio de tiempo más amplio para afianzar los conceptos aprendidos en el transcurso de la semana,
			en definitiva, este esquema de estudio dependerá de tu disponibilidad de tiempo, pero es importante tener un esquema de estudio
			definido para así tener un mayor control sobre la evolución de tu proceso de aprendizaje.
			
		</p>

	</div>`
});

recom3.addEventListener("click", () => {
	
	recom1.style.backgroundColor = "#ADADAD";
	recom2.style.backgroundColor = "#ADADAD";
	recom3.style.backgroundColor = "#E0E0E0";
	recom4.style.backgroundColor = "#ADADAD";
	
	recomElements.innerHTML = 
	
	`<div id="recom-image">
		
		<img src="images/recomendaciones/programacion-practica.jpg" />
		
	</div>

	<div id="recom-text">

		<p>
			Hay una frase que dice que: "los grandes castillos se construyen roca a roca". En este sentido,
			es importante que practiques constantemente los nuevos conceptos aprendidos. Una buena opción sería
			crear una carpeta de prácticas para cada lenguaje, y en ella ir guardando estas prácticas.
			Un ejemplo sería una carpeta para Javascript en donde vayas guardando prácticas relacionadas con funcionalidades
			que normalmente podrías encontrar en una página web real construidas con este lenguaje, como por ejemplo galerías dinámicas, 
			sistemas de registro de usuario y login, menús de navegación movil, páginas web responsive, etc.
		</p>

	</div>`
	
});

recom4.addEventListener("click", () => {
	
	recom1.style.backgroundColor = "#ADADAD";
	recom2.style.backgroundColor = "#ADADAD";
	recom3.style.backgroundColor = "#ADADAD";
	recom4.style.backgroundColor = "#E0E0E0";
	
	recomElements.innerHTML = 
	
	`<div id="recom-image">
		
		<img src="images/recomendaciones/hombre-programando.jpg" />
		
	</div>

	<div id="recom-text">

		<p>
			Finalmente, desarrollar proyectos es supremamente importante para afianzar los conceptos aprendidos.
			En este punto es donde vas a aplicar todo el aprendizaje adquirido de manera integral, para este fin, podrías 
			apoyarte en las carpetas de prácticas que has creado previamente, e ir incorporando dichas prácticas
			a tus proyectos. En este sentido, este paso se trata de constuir una aplicación mayor, a partir de funcionalidades más pequeñas
			que ya has desarrollado previamente, y siempre puedes desarrollar nuevas funcionalidades más complejas
			a medida que el proyecto lo vaya requiriendo.
		</p>

	</div>`
});