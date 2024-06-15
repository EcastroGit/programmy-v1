/* Esta API (v2.3) pertenece a stackoverflow y devuelve articulos sobre tecnología publicados en el sitio
web de stackoverflow */

const articlesContainer = document.querySelector("#articles-container");

function fetchData(e) {
  e.preventDefault();

  const query = document.querySelector("#query-stack-exchange").value.trim();
  const endPoint = `https://api.stackexchange.com/2.3/search?intitle=${query}&order=desc&sort=activity&site=stackoverflow`;

  fetch(endPoint)
    .then((response) => response.json())
    .then((data) => displayData(data.items))
    .catch((e) => console.log(e));
}

function displayData(data) {
  // Limpiar el contenedor antes de añadir nuevo contenido
  articlesContainer.innerHTML = "";

  data.forEach((item) => {
    const articleDiv = document.createElement("div");
    articleDiv.setAttribute("key", item.owner.account_id);
    articleDiv.setAttribute("class", "card");
    articleDiv.innerHTML = `
      <p class="fw-bold">${item.title}</p>
      <p>Author: ${item.owner.display_name}</p>
      <a href="${item.link}" target="_blank">Ver tema</a>
    `;
    articlesContainer.appendChild(articleDiv);
  });
}

document.querySelector("#query-form").addEventListener("submit", fetchData);
