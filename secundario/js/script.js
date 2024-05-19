import { error } from "../../error/script.js";

let id = new URLSearchParams(window.location.search).get('id');

if (id) {
    console.info(`Cliente solicitou anteriormente um livro específico: ${true}`);
} else {
    id = Math.floor(Math.random() * 11);
    console.warn(`Requisição sem solicitação: ${true}`);
}

// CARREGANDO LIVRO ESPECÍFICO
async function livroEspecifico() {
    const inforLivro = document.getElementById("inforLivros");

    try {
        const url = await fetch(`https://gustx21.github.io/E-Commerce/backend/produtos.json`);
        const dadosLivro = await url.json();

        error(url);

        // TITULO DO HEAD
        document.querySelector("title").innerText = dadosLivro.produtos[id].nome;

        // CARREGANDO OS DADOS DO LIVRO
        const article = document.createElement("article");
        article.classList.add('livro');

        article.innerHTML =
            `<img src="${dadosLivro.produtos[id].imagem}" alt="Imagem do livro ${dadosLivro.produtos[id].nome}" class="img-livro">
            <div class="conteudo">
                <h1 class="titulo">${dadosLivro.produtos[id].nome}</h1>
                <p${dadosLivro.produtos[id].autor}</p>
                <hr>
                <p>${dadosLivro.produtos[id].sinopse}</p>

                <p>Editora: <em>${dadosLivro.produtos[id].editora}</em></p>
                <p>Gênero: <strong>${dadosLivro.produtos[id].gênero}</strong></p>
                <p>Adaptações: <strong>${dadosLivro.produtos[id].detalhes.adaptacoes}</strong></p>
                <p>Páginas: ${dadosLivro.produtos[id].páginas}</p>
                <p>Avaliação: ${dadosLivro.produtos[id].avaliacao}</p>
                <p>Idioma: ${dadosLivro.produtos[id].idioma}</p>
                <p>Ano: ${dadosLivro.produtos[id].ano}</p>
                
                <details>
                    <p>ISBN: <strong>${dadosLivro.produtos[id].isbn}</strong></p>
                </details>
            </div>`
            ;

        inforLivro.appendChild(article);

    } catch (error) {
        error(error);
    }
}

document.addEventListener("DOMContentLoaded", livroEspecifico);