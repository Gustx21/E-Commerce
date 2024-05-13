// Requisição
async function consultaDados() {
    const livros = document.querySelector('.livros');

    try {
        const url = await fetch('http://127.0.0.1:8000/produtos');
        const conteudo = await url.json();

        conteudo.forEach(info => {
            const conteudoArticle = document.createElement('article');
            conteudoArticle.classList.add('produtos');

            const conteudoImg = document.createElement("img");
            conteudoImg.src = info.imagem;
            conteudoImg.alt = `Imagem do livro ${info.nome}`;
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
            generoParag.textContent = `Gênero: ${info.gênero}`;

            const link = document.createElement("a");
            link.href = `especifico/livro.html?id=${info.id}`;
            link.target = "_blank";
            link.textContent = "Comprar";

            const button = document.createElement("button");
            button.classList.add("btn");
            button.appendChild(link);

            conteudoDiv.append(h1, autorParag, document.createElement("hr"), generoParag, button);
            conteudoArticle.append(conteudoImg, conteudoDiv);
            livros.appendChild(conteudoArticle);
        });

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
};

// Após a página carregar, chama a função
document.addEventListener("DOMContentLoaded",consultaDados);

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