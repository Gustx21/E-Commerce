import { error } from "../../error/script.js";

// Requisição
async function consultaDados() {
    const livros = document.querySelector('.livros');

    try {
        const url = await fetch('https://gustx21.github.io/E-Commerce/backend/produtos.json');
        const conteudo = await url.json();

        error(url);

        conteudo.produtos.forEach(info => {
            const conteudoArticle = document.createElement('article');
            conteudoArticle.classList.add('produtos');

            const conteudoImg = document.createElement("img");
            conteudoImg.src = info.imagem;
            conteudoImg.className = "img-produto";

            const conteudoDiv = document.createElement("div");
            conteudoDiv.classList.add("conteudo");

            const h1 = document.createElement("h1");
            h1.classList.add("titulo");
            h1.textContent = info.nome;

            const autorParag = document.createElement("p");
            autorParag.classList.add("autor");
            autorParag.textContent = info.autor;

            const generoParag = document.createElement("p");
            generoParag.classList.add("genero");

            const link = document.createElement("a");
            link.href = `../secundario/livro.html?id=${info.id}`;
            link.target = "_self";
            link.textContent = "Ver detalhes";

            conteudoDiv.append(h1, autorParag, document.createElement("hr"), generoParag, link);
            conteudoArticle.append(conteudoImg, conteudoDiv);
            livros.appendChild(conteudoArticle);
        });

    } catch (error) {
        error(error);
    }
};

// Após a página carregar, chama a função
document.addEventListener("DOMContentLoaded", consultaDados);

// Barra de pesquisa
const barraPesquisa = document.querySelector('#pesquisar');
barraPesquisa.addEventListener("input", filtraPesquisa);

function filtraPesquisa() {
    const infor = document.querySelectorAll('.produtos');
    const pesquisa = document.getElementById('pesquisar');

    for (let resultado of infor) {
        const titulo = resultado.querySelector(".titulo").textContent.toLowerCase();
        const autor = resultado.querySelector(".autor").textContent.toLowerCase();
        const genero = resultado.querySelector(".genero").textContent.toLowerCase();

        let valorPesquisa = pesquisa.value.toLowerCase();

        if (titulo.includes(valorPesquisa) || genero.includes(valorPesquisa) || autor.includes(valorPesquisa)) {
            resultado.style.display = "grid";
        } else {
            resultado.style.display = "none";
        }
    }
};

// Botão de pesquisa
const generoBtn = document.querySelectorAll('button.genero-botao');

generoBtn.forEach((valores) => {
    let nomeGenero = valores.getAttribute('name');
    valores.addEventListener("click", () => filtraDetalhe(nomeGenero));
});

function filtraDetalhe(filtro) {
    const produtos = document.querySelectorAll("article.produtos");

    for (let produto of produtos) {
        let generos = produto.querySelector(".genero").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if (!generos.includes(valorFiltro) && valorFiltro !== 'tudo') {
            produto.style.display = "none";
        } else {
            produto.style.display = "grid";
        }
    }
};