
/* Esta API (v2.3) pertenece a stackoverflow y devuelve articulos sobre tecnología publicados en el sitio
web de stackoverflow */

const articlesContainer = document.querySelector("#articles-container");
const endPoint = "https://api.stackexchange.com/2.3/articles?order=desc&sort=activity&site=stackoverflow";

	fetch(endPoint)
	.then(response => response.json())
	.then(data => showArticles(data))
	.catch(e => console.log(e))
	
	
const showArticles = (data) => {
	
	for(var i = 0; i < data.items.length; i++){
	
		var articleTitle = data.items[i].title;
		var articleAuthor = data.items[i].owner.display_name;
		var authorReputation = data.items[i].owner.reputation;
		var articleScore = data.items[i].score;
		var articleLink = data.items[i].link;
		var articleDiv = document.createElement("div");
		//Se agrega clase de bootstrap para estilizar
		articleDiv.setAttribute("class", "article shadow p-3 mb-5 bg-body-tertiary rounded");
		articleDiv.innerHTML = 
		
		`
			<p>${articleTitle}</p>
			<hr />
			<p><strong>Autor: </strong>${articleAuthor}<p>
			<p><strong>Reputación: </strong>${authorReputation}</p>
			<p><strong>Score: </strong>${articleScore}</p>
			<p><strong>Link: </strong><a href="${articleLink}" target="_blank">Ver artículo</a></p>
		`;
		
		articlesContainer.appendChild(articleDiv);
	}
	
	// se ocultan algunos artículos para mejorar presentación

	const articles = document.getElementsByClassName("article");
	
	for(var i = 4; i < articles.length; i++){
		articles[i].classList.add("article-none");
	}
};

// se crea función para mostrar lista completa de artículos

const articlesBtn = document.querySelector("#articles-btn");
const articles = document.getElementsByClassName("article");


articlesBtn.addEventListener("click", () => {
	for(var i = 0; i < articles.length; i++){
	articles[i].classList.remove("article-none")};
});


	