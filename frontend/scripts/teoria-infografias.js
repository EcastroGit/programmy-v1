// Obtener las imagenes en miniatura
var img1 = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");

// Obtener el elemento modal
var modal = document.getElementById("myModal");

// Obtener el elemento <span> que cierra la imagen modal
var span = document.getElementsByClassName("close")[0];

// Obtener el elemento <img> en la imagen modal
var modalImg = document.getElementById("img01");

// Cuando el usuario haga clic en la imagen miniatura, abra la imagen modal
img1.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

// Cuando el usuario haga clic en <span> (x), cierre la imagen modal
span.onclick = function () {
  modal.style.display = "none";
};

// Cuando el usuario haga clic en cualquier parte fuera de la imagen modal, cierre la imagen modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
