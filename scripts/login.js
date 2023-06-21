
/* Función para hacer aparecer los campos del login. El botón de login es generado dinámicamente en todas las páginas
con header-footer.js */

const loginStart = document.getElementById("login-start");
const loginForm = document.getElementById("login-form");
const closeLogin = document.querySelector("#close-login");

loginStart.addEventListener("click", () => {
	 loginForm.classList.toggle("login-inactivo");
});

//cerrar login
closeLogin.addEventListener("click", () => {
	 loginForm.classList.add("login-inactivo");
});

// Ejemplo de base de datos de usuarios y contraseñas para prueba

const usuarios = [
  {usuario: "pepito", password: "prueba123"},
  {usuario: "juan", password: "juan2315"},
  {usuario: "usuario3", password: "password3"}
];

// Creamos una función para recorrer la base de datos y comprobar si un usuario y contraseña son válidos

function validarUsuario(usuario, password) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuario === usuarios[i].usuario && password === usuarios[i].password) {
      return true;
    }
  }
  return false;
}

//se crea función para enviar y validar formulario

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (validarUsuario(username, password)) {
    // Si el usuario y la contraseña son correctos, redireccionamos al usuario a la página de perfil
    window.location.href = "./perfil.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});


