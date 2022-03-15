let div = document.querySelector(".cards");
let titulo = document.createElement("h1");
let descricao = document.createElement("span");
let imagem = document.createElement("img");
let form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  titulo.innerText = document.querySelector(".titulo").value;
  descricao.innerText = document.querySelector(".descricao").value;
  imagem.src = document.querySelector(".imagem").value;
  div.appendChild(titulo);
  div.appendChild(descricao);
  div.appendChild(descricao);
  div.appendChild(imagem);
})
