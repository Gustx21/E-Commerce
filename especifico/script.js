const id = new URLSearchParams(window.location.search).get('id');

// CARREGANDO LIVRO ESPECÍFICO
async function livroEspecifico() {
    const inforLivro = document.getElementById("inforLivros");

    try {
        const url = await fetch(`http://127.0.0.1:8000/produtos/${id}`);
        const dadosLivro = await url.json();

        // TITULO DO HEAD
        const head = document.querySelector("head");
        const titleNome = document.createElement("title");
        titleNome.textContent = dadosLivro.nome;

        head.appendChild(titleNome);

        // CARREGANDO OS DADOS DO LIVRO
        const article = document.createElement("article");
        article.classList.add('livro');

        article.innerHTML =
            `<img src="${dadosLivro.imagem}" alt="Imagem do livro ${dadosLivro.nome}" class="img-livro">
            <div class="conteudo">
                <h1 class="titulo-sec">${dadosLivro.nome}</h1>
                <p class="autor">${dadosLivro.autor}</p>
                <hr>
                <p>${dadosLivro.sinopse}</p>
                
                <details>
                    <p>Editora: <em>${dadosLivro.editora}</em></p>
                    <p class="genero">Gênero: <strong>${dadosLivro.gênero}</strong></p>
                    <p>Adaptações: <strong>${dadosLivro.detalhes.adaptacoes}</strong></p>
                    <p>Avaliação: ${dadosLivro.avaliacao}</p>
                    <p>Páginas: ${dadosLivro.páginas}</p>
                    <p>Idioma: ${dadosLivro.idioma}</p>
                    <p>Ano: ${dadosLivro.ano}</p>
                    <p>Dados do ISBN: <strong>${dadosLivro.isbn}</strong></p>
                </details>
            </div>`
            ;

        inforLivro.appendChild(article);

    } catch (error) {
        switch (error.name) {
            case 'TypeError':
                console.error(`Erro de tipo! ${error.toString()}`);
                break;
            case 'ReferenceError':
                console.error(`Erro de referência! ${error.toString()}`);
                break;
            case 'ErrorEvent':
                console.error(`Erro de evento! ${error.toString()}`);
                break;
            case 'SyntaxError':
                console.error(`Erro de syntax! ${error.toString()}`);
                break;
            case 'RangeError':
                console.error(`Erro perigoso! ${error.toString()}`);
                break;
            default:
                console.log(error.toString());
                break;
        }
    }
}

document.addEventListener("DOMContentLoaded", livroEspecifico);

// EVENTO DO BOTÃO DIRETAMENTE DOCUMENT
document.getElementById("enviar").addEventListener("click", inseriComentarios);

async function inseriComentarios(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const titulo = document.getElementById("titulo").value;
    const texto = document.getElementById("comentario").value;

    await fetch("http://127.0.0.1:8080/comentarios",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, titulo, texto})
        }
    )
}

async function consultaComentarios() {
    const comentarios = document.getElementById("comentarios");

    const url = await fetch(`http://127.0.0.1:8080/comentarios/`);
    const result = await url.json();

    result.forEach(dados => {
        const article = document.createElement("article");
        
        article.innerHTML +=
            `<h3>${dados.titulo}</h3>
            <q>${dados.texto}</q>`
        ;
        comentarios.appendChild(article);

    });

}

document.addEventListener("DOMContentLoaded", consultaComentarios);