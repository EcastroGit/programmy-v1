/* Funciones para el menú desplegable */

const tema1 = document.querySelector("#tema1");
const subtemas1 = document.querySelector("#subtemas1");
const tema2 = document.querySelector("#tema2");
const subtemas2 = document.querySelector("#subtemas2");
const tema3 = document.querySelector("#tema3");
const subtemas3 = document.querySelector("#subtemas3");

function desplegableTema1() {
  subtemas1.classList.toggle("hide");
}

function desplegableTema2() {
  subtemas2.classList.toggle("hide");
}

function desplegableTema3() {
  subtemas3.classList.toggle("hide");
}

tema1.addEventListener("click", desplegableTema1);
tema2.addEventListener("click", desplegableTema2);
tema3.addEventListener("click", desplegableTema3);

/* Listeners para mostrar la teoría en pantalla al seleccionar alguna opción */

const generadorTeoria = document.querySelector("#generador-teoria");
const programacion = document.querySelector("#programacion");
const algoritmos = document.querySelector("#los-algoritmos");
const areasDesarrollo = document.querySelector("#areas-desarrollo");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const javascript = document.querySelector("#javascript");
const frameworksFrontend = document.querySelector("#frameworks-front");
const lenguajesBackend = document.querySelector("#lenguajes-backend");
const basesDatos = document.querySelector("#bases-datos");
const apis = document.querySelector("#apis");
const controlVersiones = document.querySelector("#control-versiones");
const frameworksBackend = document.querySelector("#frameworks-backend");

programacion.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>¿Qué es la programación?</h2>
	<p> 
		La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como realizar algún tipo de tarea, 
		pero no solo la acción de escribir un código para que la computadora o el software lo ejecute. Incluye, además, todas las tareas necesarias para 
		que el código funcione correctamente y cumpla el objetivo para el cual se escribió.
		<br />
		<br />
		En la actualidad, la noción de programación se encuentra muy asociada a la creación de aplicaciones de informática y videojuegos. 
		En este sentido, es el proceso por el cual una persona desarrolla un programa, valiéndose de una herramienta que le permita escribir 
		el código (el cual puede estar en uno o varios lenguajes, como C++, Java y Python, entre muchos otros) 
		y de otra que sea capaz de “traducirlo” a lo que se conoce como lenguaje de máquina, que puede "comprender" el microprocesador.
		<br />
		<br />
		Para crear un programa y que la computadora lo interprete y ejecute, las instrucciones deben escribirse en un lenguaje de programación.
		El lenguaje entendido por una computadora se conoce como código máquina. Consiste en secuencias de instrucciones básicas que el procesador 
		reconoce, codificadas como cadenas de números 1 y 0 (sistema binario). En los primeros tiempos de la computación se programaba directamente 
		en código máquina. Escribir programas así resultaba demasiado complicado, también era difícil entenderlos y mantenerlos una vez escritos. 
		Con el tiempo, se fueron desarrollando herramientas para facilitar el trabajo.
		<br />
		<br />
		Los primeros científicos que trabajaron en el área decidieron reemplazar las secuencias de unos y ceros por mnemónicos, que son abreviaturas 
		en inglés de la función que cumple una instrucción de procesador. Por ejemplo, para sumar se podría usar la letra A de la palabra inglesa add 
		(añadir). Crearon así una familia de lenguajes de mayor nivel, que se conocen como lenguaje ensamblador o simplemente ensamblador 
		(en inglés, assembly).
		<br/>
		<br/>
		Con el tiempo los ensambladores incorporaron facilidades adicionales, pero siempre manteniendo una correspondencia directa con las 
		instrucciones de procesador. A nivel conceptual, entonces, programar en ensamblador es muy similar a hacerlo en lenguaje máquina, 
		solo que de una forma más amigable.
		A medida que la complejidad de las tareas que realizaban las computadoras aumentaba, el lenguaje ensamblador fue mostrando limitaciones. 
		Para hacer un programa había que conocer en detalle el funcionamiento de la computadora donde se iba a ejecutar, qué instrucciones proveía 
		y cómo emplearlas. 
		<br />
		<br />
		A veces las instrucciones eran demasiado básicas, por ejemplo podía haber una para sumar dos números pero no para multiplicar, 
		y entonces era necesario programar un algoritmo que realizara la multiplicación con base en instrucciones más básicas. 
		Otras veces, la forma de emplear las instrucciones era engorrosa. Además, si se usaba otro modelo de computadora, en muchos casos 
		había que reescribir el programa con otras instrucciones. El siguiente paso fue crear los lenguajes de alto nivel.
		Una vez que se termina de escribir un programa, es necesario de alguna forma traducirlo a lenguaje máquina, que es lo único que entiende 
		el procesador. Esta tarea es automática, por medio de un programa adicional que toma el código escrito y lo procesa. 
		<br />
		<br />
		Hay distintos enfoques para este procesamiento. El enfoque clásico se llama compilación: el programa toma el código en un lenguaje 
		y genera código en el otro; al programa traductor se lo llama compilador. En general se habla de compilación y compiladores cuando el lenguaje
		de origen es de alto nivel; si la traducción es desde lenguaje ensamblador, se llama ensamblado y el programa se llama ensamblador 
		(hay que distinguir el lenguaje ensamblador del programa ensamblador; en inglés es más claro, son assembly language y assembler 
		respectivamente).3​Generalmente existe una fase posterior a la compilación denominada enlace o enlazado (linking en inglés). 
		<br />
		<br />
		Los programas pueden escribirse en partes separadas y además pueden usar recursos provistos por bibliotecas. El enlazado, 
		realizado por un programa llamado enlazador, combina todos los componentes y así genera un programa ejecutable completo.
		En algunos lenguajes de programación, puede usarse un enfoque diferente que no requiera compilación y enlace: un programa llamado 
		intérprete va leyendo el código y realizando en el momento las acciones que haría el programa. Se evita generar código separado y la 
		experiencia es que se está ejecutando el código en el lenguaje de alto nivel, a pesar de que el procesador no lo entienda de forma nativa.
	</p>
	`;
});

algoritmos.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>Los algoritmos</h2>
	<p> 
		Un algoritmo es una secuencia no ambigua, finita y ordenada de instrucciones que han de seguirse para resolver un determinado problema. 
		1​ Un programa normalmente implementa y contiene uno o más algoritmos. Un algoritmo puede expresarse de distintas maneras: en forma gráfica, 
		como un diagrama de flujo, en forma de código como en pseudocódigo o un lenguaje de programación, en forma explicativa.
		<br />
		<br />
		Los programas suelen subdividirse en partes menores, llamadas módulos, de modo que la complejidad algorítmica de cada una de las 
		partes sea menor que la del programa completo, lo cual ayuda a simplificar el desarrollo del programa. Esta es una práctica 
		muy utilizada y se conoce como "refino progresivo".
		<br />
		<br />
		Según Niklaus Wirth, un programa está formado por los algoritmos y estructuras de datos.
		<br />
		<br />
		La programación puede seguir muchos enfoques, o paradigmas, es decir, diversas maneras de formular la resolución de un problema dado.
		Algunos de los principales paradigmas de programación son:
		<br />
		<br />
		<ul>
		<li>Programación declarativa</li>
		<li>Programación imperativa</li>
		<li>Programación estructurada</li>
		<li>Programación modular</li>
		<li>Programación orientada a objetos</li>
		<li>Programación orientada a eventos</li>
		</ul>
	</p>
	`;
});

areasDesarrollo.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>Áreas del desarrollo web</h2>
	<p>
			El desarrollo web es una disciplina que involucra múltiples áreas y habilidades, desde la programación y el diseño hasta la gestión de servidores y bases de datos. A continuación, te presentamos algunas de las principales áreas del desarrollo web:
		<br />
		<br />
		<strong>1. Front-end:</strong>
		<br />
		<br />
		El desarrollo front-end se enfoca en la parte visual y de interacción de un sitio web o aplicación web. Los desarrolladores front-end trabajan en la creación de la interfaz de usuario (UI) y la experiencia de usuario (UX), usando tecnologías como HTML, CSS, JavaScript, React y Angular. El objetivo es crear una experiencia de usuario atractiva y fácil de usar.
		<br />
		<br />
		<strong>2. Back-end:</strong>
		<br />
		<br />
		El desarrollo back-end se enfoca en la creación de la lógica de la aplicación y la comunicación con la base de datos y otros sistemas. Los desarrolladores back-end trabajan en la programación de la funcionalidad del sitio web o aplicación, usando tecnologías como Python, Ruby, Node.js y PHP. El objetivo es crear una aplicación robusta y escalable que pueda manejar grandes volúmenes de datos y tráfico.
		<br />
		<br />
		<strong>3. Base de datos:</strong>
		<br />
		<br />
		La base de datos es una parte crucial del desarrollo web, ya que almacena todos los datos de la aplicación. Los desarrolladores de bases de datos trabajan en la creación y gestión de la base de datos, incluyendo el diseño de la estructura de la base de datos, la creación de consultas y la gestión de la seguridad. Las tecnologías de bases de datos comunes incluyen MySQL, PostgreSQL y MongoDB.
		<br />
		<br />
		<strong>4. Seguridad:</strong>
		<br />
		<br />
		La seguridad es un aspecto importante del desarrollo web, ya que los sitios web y las aplicaciones están expuestos a amenazas como piratas informáticos y malware. Los desarrolladores de seguridad trabajan en la identificación y solución de vulnerabilidades, así como en la implementación de medidas de seguridad para proteger la aplicación y sus datos.
		<br />
		<br />
		<strong>5. DevOps:</strong>
		<br />
		<br />
		DevOps es una metodología que combina el desarrollo de software (Dev) y la gestión de operaciones (Ops). Los desarrolladores DevOps trabajan en la creación de un entorno de desarrollo y despliegue de software automatizado y escalable, utilizando herramientas como Docker, Kubernetes y Jenkins.
		<br />
		<br />
		En resumen, el desarrollo web es un campo amplio y variado que abarca múltiples áreas y habilidades. Desde el front-end y el back-end hasta la base de datos y la seguridad, cada área es esencial para el desarrollo de aplicaciones web exitosas y seguras.
	</p>
	`;
});

html.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>lenguaje de marcado HTML</h2>
	<p>
	
		HTML, que significa HyperText Markup Language, es un lenguaje de marcado utilizado para crear y estructurar contenido en la web. Es el lenguaje fundamental de la web y se utiliza para crear páginas web, aplicaciones web y correo electrónico. HTML se utiliza en combinación con otros lenguajes de programación como CSS y JavaScript para crear páginas web dinámicas y atractivas.
		<br />
		<br />
		Una de las características más importantes de HTML es que es un lenguaje de marcado. Esto significa que se utiliza para describir la estructura y el contenido de una página web, pero no para controlar su apariencia visual. La apariencia visual de una página web se controla mediante CSS (Cascading Style Sheets). Esto permite una mayor separación entre el contenido y la presentación visual de una página web, lo que facilita su mantenimiento y actualización.
		<br />
		<br />
		La sintaxis de HTML se basa en etiquetas o tags, que se utilizan para indicar la estructura del contenido. Cada etiqueta comienza con un signo de menor que (<) y termina con un signo de mayor que (>). Las etiquetas pueden contener atributos que proporcionan información adicional sobre el contenido. Los atributos se especifican dentro de la etiqueta y se utilizan para controlar el comportamiento y la apariencia del contenido.
		<br />
		<br />
		A continuación, se presenta un ejemplo de una página web simple creada con HTML:
		<br />
		<br />
		
		<img src="images/teoria/ejemplo-html.png" alt="ejemplo de código html">
	
		<br />
		<br />
		En este ejemplo, la etiqueta !DOCTYPE html se utiliza para indicar la versión de HTML que se está utilizando. La etiqueta html se utiliza para indicar el inicio del documento HTML y la etiqueta /html se utiliza para indicar el final del documento HTML.
		<br />
		<br />
		La etiqueta head se utiliza para incluir información sobre la página web, como el título de la página, que se muestra en la pestaña del navegador. La etiqueta title se utiliza para especificar el título de la página.
		<br />
		<br />
		La etiqueta body se utiliza para incluir el contenido de la página web. En este ejemplo, se incluyen un encabezado principal h1 y un párrafo p, así como una lista de elementos ul y li.
		<br />
		<br />
		HTML es un lenguaje muy importante para cualquier persona que quiera crear páginas web o aplicaciones web. Aunque puede ser un poco intimidante al principio, hay muchos recursos en línea disponibles para ayudarte a aprender HTML. Con un poco de práctica, puedes crear páginas web y aplicaciones web increíbles con HTML.

	</p>
	
	`;
});

css.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>lenguaje de estilos CSS</h2>
	<p>
	
		CSS (Cascading Style Sheets) es un lenguaje de estilos utilizado para describir cómo se debe presentar el contenido de una página web escrita en HTML o XML. El objetivo principal de CSS es separar la presentación del contenido, lo que permite que el diseño de una página web se modifique sin afectar el contenido.
		<br />
		<br />
		CSS se compone de una serie de reglas de estilo que especifican cómo se deben mostrar los elementos HTML en la página web. Cada regla de estilo consta de dos partes: un selector y un conjunto de propiedades.
		<br />
		<br />
		El selector es la parte de la regla de estilo que identifica los elementos HTML que se deben estilizar. Por ejemplo, el selector h1 se utiliza para estilizar todos los encabezados de nivel 1 (h1) en la página web.
		<br />
		<br />
		El conjunto de propiedades especifica cómo se debe estilizar el elemento HTML seleccionado. Cada propiedad consta de un nombre y un valor separados por dos puntos. Por ejemplo, la propiedad color se utiliza para especificar el color del texto y se puede establecer en un valor como red, #FF0000 o rgb(255, 0, 0).
		<br />
		<br />
		Aquí hay un ejemplo de cómo se puede utilizar CSS para estilizar un encabezado de nivel 1 en una página web:
		<br />
		<br />
		
		<img src="images/teoria/ejemplo-css.png" alt="ejemplo de código css">
		
		<br />
		<br />
		En este ejemplo, se utiliza la etiqueta style para incluir las reglas de estilo CSS en el documento HTML. El selector h1 se utiliza para seleccionar todos los encabezados de nivel 1 en la página web y el conjunto de propiedades especifica que el texto debe ser de color azul y tener un tamaño de fuente de 36 píxeles.
		<br />
		<br />
		Otras propiedades comunes utilizadas en CSS incluyen el tamaño de la fuente (font-size), la familia de fuentes (font-family), el espaciado (margin, padding) y el fondo (background-color).
		<br />
		<br />
		Además de las reglas de estilo, CSS también admite la creación de clases y IDs que se pueden utilizar para aplicar estilos a elementos específicos en la página web. Las clases se utilizan para estilizar un grupo de elementos similares, mientras que los IDs se utilizan para estilizar un elemento específico en la página web.
		<br />
		<br />
		En resumen, CSS es un lenguaje de estilos utilizado para separar la presentación del contenido en una página web. Con CSS, es posible crear diseños atractivos y consistentes para una página web al tiempo que se mantiene la estructura y el contenido de la página separados de los estilos.
	
	</p>
	`;
});

javascript.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>JavaScript</h2>
	<p>
	
	JavaScript es un lenguaje de programación de alto nivel que se utiliza principalmente para crear aplicaciones web interactivas y dinámicas. Fue desarrollado originalmente por Brendan Eich en Netscape en 1995 y se ha convertido en uno de los lenguajes de programación más populares y ampliamente utilizados en el mundo.
	<br />
	<br />
	JavaScript se ejecuta en el lado del cliente, lo que significa que se ejecuta en el navegador web del usuario. Esto permite que las páginas web sean interactivas y respondan a la entrada del usuario, sin necesidad de comunicarse con el servidor web.
	<br />
	<br />
	JavaScript se utiliza para agregar interactividad a las páginas web a través de la manipulación del Document Object Model (DOM), que es la representación en memoria de la página web. Con JavaScript, es posible agregar y eliminar elementos del DOM, cambiar su estilo y contenido, y responder a eventos como hacer clic en un botón o mover el mouse sobre una imagen.
	<br />
	<br />
	Aquí hay un ejemplo de cómo se puede utilizar JavaScript para agregar interactividad a una página web:
	<br />
	<br />
	
	<img src="images/teoria/ejemplo-javascript.png" alt="ejemplo de código javascript">
	
	<br />
	<br />
	En este ejemplo, se utiliza la etiqueta script para incluir código JavaScript en el documento HTML. Se define una función cambiarTitulo() que cambia el contenido del elemento HTML con el ID "titulo" a "Nuevo título" cuando se hace clic en el botón.
	<br />
	<br />
	Además de la manipulación del DOM, JavaScript se utiliza para realizar tareas como la validación de formularios, la animación y la comunicación con el servidor web a través de tecnologías como AJAX (Asynchronous JavaScript and XML).
	<br />
	<br />
	JavaScript también se utiliza cada vez más en el desarrollo de aplicaciones web de una sola página (SPA), que son aplicaciones web que se cargan completamente en una sola página y utilizan JavaScript para cambiar dinámicamente el contenido de la página sin recargarla. Esto se logra a través de tecnologías como React, Angular y Vue.js.
	<br />
	<br />
	En resumen, JavaScript es un lenguaje de programación de alto nivel utilizado para agregar interactividad y dinamismo a las páginas web. Con JavaScript, es posible manipular el DOM, realizar tareas como la validación de formularios y la animación, y desarrollar aplicaciones web de una sola página altamente interactivas y dinámicas.
	<p/>
	`;
});

frameworksFrontend.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>Frameworks de frontend</h2>
	<p>
		Los frameworks de frontend son herramientas de software diseñadas para facilitar y acelerar el desarrollo de aplicaciones web. Estos frameworks proporcionan un conjunto de librerías y herramientas que permiten a los desarrolladores crear aplicaciones web más rápidamente y con mayor eficiencia que si tuvieran que escribir todo el código desde cero.

		A continuación, se presentan algunos de los frameworks de frontend más populares disponibles en la actualidad:
		<br />
		<br />
		<strong>1. React</strong>
		<br />
		<br />
		React es un framework de frontend desarrollado por Facebook. Es conocido por su eficiencia y flexibilidad, y se utiliza para crear interfaces de usuario altamente interactivas y dinámicas. React utiliza un modelo de programación basado en componentes, lo que significa que las diferentes partes de una aplicación web se dividen en componentes reutilizables que pueden actualizarse dinámicamente sin tener que actualizar toda la página.
		<br />
		<br />
		<strong>2. Angular</strong>
		<br />
		<br />
		Angular es un framework de frontend desarrollado por Google. Es conocido por su capacidad para crear aplicaciones web de una sola página (SPA) altamente interactivas y escalables. Angular utiliza un modelo de programación basado en componentes similar a React, pero también incluye herramientas para el enrutamiento, la animación y la validación de formularios.
		<br />
		<br />
		<strong>3. Vue.js</strong>
		<br />
		<br />
		Vue.js es un framework de frontend desarrollado por Evan You. Es conocido por ser fácil de aprender y utilizar, lo que lo convierte en una buena opción para desarrolladores principiantes. Vue.js utiliza un modelo de programación basado en componentes similar a React y Angular, pero es más ligero y flexible que estos frameworks.
		<br />
		<br />
		<strong>4. jQuery</strong>
		<br />
		<br />
		jQuery es una biblioteca de JavaScript que simplifica la manipulación del DOM y la creación de efectos y animaciones en las páginas web. Aunque jQuery no es técnicamente un framework, es una herramienta popular utilizada por muchos desarrolladores para simplificar el desarrollo de aplicaciones web.
		<br />
		<br />
		<strong>5. Bootstrap</strong>
		<br />
		<br />
		Bootstrap es un framework de diseño de frontend desarrollado por Twitter. Es conocido por su capacidad para crear diseños web responsivos y escalables utilizando un conjunto de componentes predefinidos y estilos CSS. Bootstrap es una buena opción para los desarrolladores que desean crear páginas web con un aspecto y una sensación consistentes y profesionales.
		<br />
		<br />
		En resumen, los frameworks de frontend son herramientas de software que ayudan a los desarrolladores a crear aplicaciones web de manera más eficiente y rápida. Algunos de los frameworks de frontend más populares disponibles en la actualidad incluyen React, Angular, Vue.js, jQuery y Bootstrap. Cada uno de estos frameworks tiene sus propias características y ventajas, y la elección del framework adecuado dependerá de las necesidades específicas de cada proyecto y del nivel de experiencia del desarrollador.
	</p>
	`;
});

lenguajesBackend.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>Lenguajes de backend</h2>
	<p>
		El desarrollo de backend es una parte fundamental de la creación de aplicaciones web y móviles, ya que es el componente encargado de gestionar la lógica del negocio, el acceso a bases de datos y la comunicación con otros sistemas. Los lenguajes de programación utilizados para desarrollar el backend son esenciales para la funcionalidad y el rendimiento de una aplicación.
		<br />
		<br />
		A continuación, se presentan algunos de los lenguajes de programación más populares utilizados para el desarrollo de backend:
		<br />
		<br />
		<strong>1. Java</strong>
		<br />
		Java es un lenguaje de programación de alto nivel utilizado para desarrollar aplicaciones empresariales y web de gran escala. Es conocido por su robustez, seguridad y portabilidad, lo que lo convierte en una buena opción para aplicaciones empresariales y sistemas críticos.
		<br />
		<br />
		<strong>2. Python</strong>
		<br />
		Python es un lenguaje de programación popular y fácil de aprender que se utiliza para desarrollar aplicaciones web y científicas. Es conocido por su sintaxis clara y concisa y su amplia gama de bibliotecas y herramientas. Python es una buena opción para el desarrollo rápido de prototipos y aplicaciones web de pequeña y mediana escala.
		<br />
		<br />
		<strong>3. PHP</strong>
		<br />
		PHP es un lenguaje de programación de código abierto utilizado para desarrollar aplicaciones web y sitios web dinámicos. Es conocido por su facilidad de uso y su amplia comunidad de desarrolladores, lo que lo convierte en una buena opción para proyectos de pequeña y mediana escala.
		<br />
		<br />
		<strong>4. Ruby</strong>
		<br />
		Ruby es un lenguaje de programación popular utilizado para desarrollar aplicaciones web y móviles. Es conocido por su sintaxis simple y elegante y su enfoque en la legibilidad del código. Ruby es una buena opción para proyectos de pequeña y mediana escala.
		<br />
		<br />
		<strong>5. C#</strong>
		<br />
		C# es un lenguaje de programación desarrollado por Microsoft utilizado para desarrollar aplicaciones web, de escritorio y móviles. Es conocido por su velocidad y eficiencia y es una buena opción para aplicaciones empresariales y sistemas críticos.
		<br />
		<br />
		En resumen, hay muchos lenguajes de programación diferentes que se pueden utilizar para desarrollar el backend de una aplicación web o móvil. Cada lenguaje tiene sus propias ventajas y desventajas y la elección del lenguaje adecuado dependerá de las necesidades específicas de cada proyecto y del conocimiento y experiencia del desarrollador. Además, es importante tener en cuenta que la elección del lenguaje no es lo único que influye en el rendimiento y la eficiencia de una aplicación, ya que también es importante considerar la arquitectura, la base de datos y otros factores.
	
	</p>
	`;
});

basesDatos.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>Bases de datos</h2>
	<p>
		En el desarrollo web, las bases de datos son una parte fundamental de la mayoría de las aplicaciones. Se utilizan para almacenar información y proporcionar una forma eficiente de acceder a ella y manipularla. En este artículo, exploraremos las bases de datos en el desarrollo web y las diferentes opciones disponibles.
		<br />
		<br />
		Tipos de bases de datos
		Hay varios tipos de bases de datos que se utilizan comúnmente en el desarrollo web. Algunos de los más populares incluyen:
		<br />
		<br />
		<strong>1. Bases de datos relacionales</strong>
		<br />
		Las bases de datos relacionales son las más comunes en el desarrollo web. Utilizan tablas para almacenar información y utilizan relaciones entre las tablas para acceder a los datos de manera eficiente. Las bases de datos relacionales más populares incluyen MySQL, PostgreSQL y SQL Server.
		<br />
		<br />
		<strong>2. Bases de datos NoSQL</strong>
		<br />
		Las bases de datos NoSQL son una alternativa a las bases de datos relacionales. Son conocidas por su capacidad de almacenar grandes cantidades de datos de manera eficiente y por ser altamente escalables. Algunas de las bases de datos NoSQL más populares incluyen MongoDB, CouchDB y Cassandra.
		<br />
		<br />
		<strong>3. Bases de datos en memoria</strong>
		<br />
		Las bases de datos en memoria son bases de datos que se almacenan completamente en la memoria en lugar de en un disco duro. Esto las hace increíblemente rápidas y eficientes, pero también significa que los datos se pierden si el servidor se reinicia. Algunos ejemplos de bases de datos en memoria incluyen Redis y Memcached.
		<br />
		<br />
		<strong>4. Bases de datos gráficas</strong>
		<br />
		Las bases de datos gráficas son una forma especializada de bases de datos utilizadas para almacenar datos relacionales complejos. Son ideales para aplicaciones que manejan grandes cantidades de datos interconectados, como redes sociales o sistemas de recomendación. Algunas de las bases de datos gráficas más populares incluyen Neo4j y OrientDB.
		<br />
		<br />
		<strong>Cómo interactuar con las bases de datos</strong>
		<br />
		Para interactuar con una base de datos en el desarrollo web, es necesario utilizar un lenguaje de consulta. Los lenguajes de consulta más comunes son SQL y NoSQL. SQL se utiliza principalmente para bases de datos relacionales, mientras que NoSQL se utiliza para bases de datos NoSQL.
		<br />
		<br />
		Para interactuar con una base de datos desde una aplicación web, se utiliza un controlador de base de datos. Los controladores de base de datos permiten a los desarrolladores interactuar con la base de datos utilizando su lenguaje de consulta elegido. Los controladores de base de datos más populares incluyen JDBC para Java, PyMySQL para Python y MongoDB para Node.js.
		<br />
		<br />
		Conclusión
		En el desarrollo web, las bases de datos son una parte fundamental de la mayoría de las aplicaciones. Hay varios tipos de bases de datos disponibles, cada uno con sus propias ventajas y desventajas. Para interactuar con una base de datos, se utiliza un lenguaje de consulta y un controlador de base de datos. Es importante elegir la base de datos adecuada y utilizarla de manera efectiva para garantizar el rendimiento y la eficiencia de la aplicación.
	
	</p>
	`;
});

apis.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>Las API's (Application Programming Interface)</h2>
	<p>
		Las API de backend son una parte fundamental del desarrollo web moderno. Proporcionan una forma para que los desarrolladores creen aplicaciones y sitios web que puedan interactuar con los servicios y bases de datos del backend, lo que les permite ofrecer experiencias personalizadas y fluidas a los usuarios. En este artículo, exploraremos en detalle qué son las API de backend, cómo funcionan y por qué son tan importantes.
		<br />
		<br />
		<strong>¿Qué es una API?</strong>
		<br />
		<br />
		Una API de backend es una interfaz de programación de aplicaciones que permite a los desarrolladores acceder y utilizar los servicios y datos del backend de una aplicación web. Esto significa que los desarrolladores pueden crear aplicaciones o sitios web que interactúan con el backend de una forma más flexible y personalizada.
		<br />
		<br />
		Las API de backend generalmente se crean utilizando lenguajes de programación como PHP, Python, Ruby, Java y C#. Estas API pueden ser diseñadas para interactuar con bases de datos, servicios de terceros, almacenamiento en la nube y otros servicios de backend.
		<br />
		<br />
		<strong>¿Cómo funcionan las API?</strong>
		<br />
		<br />
		Las API funcionan mediante solicitudes HTTP enviadas desde una aplicación web o sitio web a un servidor que ejecuta la API. La solicitud HTTP contiene información sobre la acción que se está realizando y cualquier dato que se esté enviando. La API de backend procesa la solicitud y devuelve una respuesta que contiene los datos solicitados.
		<br />
		<br />
		Las API pueden ser diseñadas para aceptar varios tipos de solicitudes HTTP, como GET, POST, PUT y DELETE. Estos verbos HTTP se utilizan para indicar qué tipo de acción se está realizando en la solicitud y qué tipo de respuesta se espera.
		<br />
		<br />
		Por ejemplo, si una aplicación web necesita acceder a la información de un usuario almacenada en una base de datos, podría enviar una solicitud HTTP a la API de backend utilizando el verbo GET. La API de backend procesaría la solicitud, recuperaría la información del usuario de la base de datos y devolvería una respuesta que contiene los datos solicitados.
		<br />
		<br />
		<strong>¿Por qué son importantes las API?</strong>
		<br />
		<br />
		Las API de backend son importantes porque permiten a los desarrolladores crear aplicaciones y sitios web que interactúan de manera más fluida y personalizada con el backend de una aplicación. Esto puede mejorar la experiencia del usuario y permitir que las aplicaciones web realicen funciones más avanzadas y complejas.
		<br />
		<br />
		Las API también pueden facilitar la integración de servicios y tecnologías de terceros en una aplicación web. Por ejemplo, una aplicación web podría utilizar una API de backend para conectarse a un servicio de pago en línea y procesar pagos de los usuarios sin tener que almacenar información de pago sensible en el sitio web.
		<br />
		<br />
		En resumen, las API son una parte importante del desarrollo web moderno. Permiten a los desarrolladores crear aplicaciones y sitios web que interactúan de manera más personalizada y fluida con el backend de una aplicación, lo que puede mejorar la experiencia del usuario y permitir que las aplicaciones web realicen funciones más avanzadas y complejas.
	</p>
	
	`;
});

controlVersiones.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>Control de versiones</h2>
	<p>
		El control de versiones es una práctica fundamental en el desarrollo web moderno. Permite a los desarrolladores trabajar en equipo, realizar un seguimiento de los cambios realizados en el código y recuperar versiones anteriores del mismo en caso de errores o problemas. En este artículo, exploraremos en detalle qué es el control de versiones, cómo funciona y por qué es tan importante para el desarrollo web.
		<br />
		<br />
		¿Qué es el control de versiones?
		El control de versiones es una práctica que consiste en utilizar un sistema para rastrear y controlar los cambios realizados en el código fuente de una aplicación o sitio web. Este sistema almacena todas las versiones anteriores del código y permite a los desarrolladores trabajar en equipo de manera eficiente y coordinada.
		<br />
		<br />
		Los sistemas de control de versiones más populares en el desarrollo web son Git y SVN. Estos sistemas permiten a los desarrolladores realizar un seguimiento de los cambios realizados en el código, colaborar con otros desarrolladores, y recuperar versiones anteriores del código en caso de errores o problemas.
		<br />
		<br />
		¿Cómo funciona el control de versiones?
		El control de versiones funciona mediante la creación de un repositorio de código fuente. Este repositorio es una base de datos que almacena todas las versiones del código fuente de una aplicación o sitio web. Cada vez que un desarrollador realiza cambios en el código fuente, los cambios se registran en el repositorio. El sistema de control de versiones también permite a los desarrolladores etiquetar versiones del código fuente para una fácil referencia y recuperación en el futuro.
		<br />
		<br />
		El control de versiones también permite a los desarrolladores trabajar en equipo de manera eficiente. Los desarrolladores pueden realizar cambios en diferentes partes del código fuente al mismo tiempo y luego fusionar sus cambios en una sola versión del código. Esto evita conflictos y errores que pueden surgir cuando varios desarrolladores trabajan en el mismo código fuente al mismo tiempo.
		<br />
		<br />
		¿Por qué es importante el control de versiones en el desarrollo web?
		El control de versiones es una práctica importante en el desarrollo web por varias razones. En primer lugar, permite a los desarrolladores trabajar en equipo de manera eficiente. Los desarrolladores pueden colaborar y coordinar sus esfuerzos de manera efectiva, lo que puede mejorar la calidad del código fuente y acelerar el desarrollo de la aplicación.
		<br />
		<br />
		En segundo lugar, el control de versiones permite a los desarrolladores realizar un seguimiento de los cambios realizados en el código fuente. Esto puede ser útil en caso de errores o problemas, ya que los desarrolladores pueden recuperar versiones anteriores del código para solucionar problemas o realizar pruebas.
		<br />
		<br />
		En tercer lugar, el control de versiones también puede ser útil en el proceso de implementación. Los desarrolladores pueden crear ramas del código fuente para implementaciones específicas, como pruebas de usuario o lanzamientos de producción. Esto evita que los errores se propaguen a los usuarios finales y asegura que las implementaciones se realicen de manera fluida y sin interrupciones.
		<br />
		<br />
		En resumen, el control de versiones es una práctica fundamental en el desarrollo web moderno. Permite a los desarrolladores trabajar en equipo, realizar un seguimiento de los cambios realizados en el código y recuperar versiones anteriores del mismo en caso de errores o problemas. Git y SVN son los sistemas de control de versiones más populares en el desarrollo web, y son ampliamente utilizados por desarrolladores en todo el mundo.
		
	</p>
	`;
});

frameworksBackend.addEventListener("click", () => {
  generadorTeoria.innerHTML = `
	<br />
	<h2>Frameworks de backend</h2>
	<p>
		En el mundo del desarrollo web, los frameworks de backend son herramientas muy útiles para acelerar el proceso de desarrollo de aplicaciones web. Los frameworks de backend son colecciones de código preescrito que permiten a los desarrolladores crear aplicaciones web más rápidamente, reducir la cantidad de código que necesitan escribir y asegurar que su código sea más escalable y mantenible.
		<br />
		<br />
		En este artículo, exploraremos algunos de los frameworks de backend más populares y cómo pueden ser utilizados para desarrollar aplicaciones web.
		<br />
		<br />
		<strong>1. Express.js</strong>
		<br />
		Express.js es uno de los frameworks de backend más populares y ampliamente utilizados. Está construido sobre el lenguaje de programación JavaScript y es conocido por ser muy fácil de aprender y usar. Express.js es altamente personalizable y se puede utilizar para desarrollar aplicaciones web de cualquier tamaño o complejidad. Es utilizado por algunas de las empresas más grandes del mundo, como IBM, Accenture y Uber.
		<br />
		<br />
		<strong>2. Ruby on Rails</strong>
		<br />
		Ruby on Rails es otro de los frameworks de backend más populares. Está construido sobre el lenguaje de programación Ruby y es conocido por ser muy fácil de aprender y usar. Ruby on Rails se enfoca en la convención sobre la configuración, lo que significa que los desarrolladores pueden ahorrar tiempo escribiendo código repetitivo. Es utilizado por algunas de las empresas más grandes del mundo, como Airbnb, GitHub y Shopify.
		<br />
		<br />
		<strong>3. Django</strong>
		<br />
		Django es un framework de backend de Python. Está diseñado para ser muy rápido y escalable, lo que lo hace ideal para aplicaciones web de alta carga de trabajo. Django es muy fácil de aprender y usar, y cuenta con una gran comunidad de desarrolladores que ofrecen soporte y ayuda a los nuevos usuarios. Django es utilizado por algunas de las empresas más grandes del mundo, como Instagram, Mozilla y Pinterest.
		<br />
		<br />
		<strong>4. Laravel</strong>
		<br />
		Laravel es un framework de backend de PHP. Es conocido por ser muy fácil de aprender y usar, y es muy popular entre los desarrolladores de PHP. Laravel se enfoca en la simplicidad y la elegancia del código, lo que lo hace ideal para el desarrollo de aplicaciones web de alta calidad. Laravel es utilizado por algunas de las empresas más grandes del mundo, como 9GAG, BBC y Pfizer.
		<br />
		<br />
		<strong>5. Spring</strong>
		<br />
		Spring es un framework de backend de Java. Es conocido por ser muy potente y escalable, lo que lo hace ideal para aplicaciones web de alta carga de trabajo. Spring cuenta con una gran comunidad de desarrolladores y es utilizado por algunas de las empresas más grandes del mundo, como Cisco, Oracle y Volkswagen.
		<br />
		<br />
		En resumen, los frameworks de backend son herramientas esenciales para acelerar el proceso de desarrollo de aplicaciones web. Express.js, Ruby on Rails, Django, Laravel y Spring son solo algunos de los frameworks de backend más populares y utilizados en el mundo del desarrollo web. Cada uno tiene sus propias fortalezas y debilidades, y la elección del framework adecuado dependerá del proyecto y de las necesidades del desarrollador.
	
	</p>
	`;
});
