async function uniqueBook() {
    const inforLivro = document.getElementById("inforLivros");

    try {
        let params = new URLSearchParams(window.location.search);
        let idDoLivro = params.get('id');

        const url = await fetch(`http://127.0.0.1:8000/produtos/${idDoLivro}`);
        const dadosLivro = await url.json();

        // title do head
        const head = document.querySelector("head");
        const titlePag = document.createElement("title");
        titlePag.textContent = dadosLivro.nome;

        head.appendChild(titlePag);

        // Parte do servidor
        const article = document.createElement("article");
        article.className = 'livro';

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
        console.error(error);
    }
}

uniqueBook();