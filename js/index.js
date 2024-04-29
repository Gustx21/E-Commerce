const dadosProdutos = document.querySelector('.livros');

async function consultaDados() {
    try {
        const URL = await fetch('http://127.0.0.1:8000/produtos');
        const descricao = await URL.json();

        descricao.forEach((info) => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produtos');

            produtoDiv.innerHTML +=
                `<img src="${info.imagem}" alt="Imagem do livro" class="img-produto">
                <div class="conteudo">
                    <h1 class="titulo">${info.nome}</h1>
                    <p class="autor">${info.autor}</p>
                    <hr>
                    <p>${info.sinopse}</p>
                    <p class="genero">Gênero: <strong>${info.gênero}</strong></p>
                    <p class="editora">Editora: <strong>${info.editora}</strong</p>
                </div>`
            ;

            dadosProdutos.appendChild(produtoDiv);
        });
    } catch (error) {
        switch (error.message && error.name) {
            case 'Failed to fetch':
                console.error("Erro! Falha na resposta da requisição.");
                break;
            case 'Unexpected token "N", "Not Found" is not valid JSON':
                console.error(`Erro! Caminho não encontrado.`);
                break;
            case 'TypeError':
                console.error(`Erro de tipo: ${error.message}`);
                break;
            case 'Uncaught SyntaxError':
                console.error(`Identificador inesperado: ${error.message}`);
                break;
            case 'ReferenceError':
                console.error(`Erro de referência: ${error.message}`);
                break;
            default:
                console.log(error.message);
                break;
        }
    }
};

consultaDados();

const botaoPesquisa = document.querySelector('.btn');
botaoPesquisa.addEventListener("click", filtraPesquisa);

async function filtraPesquisa() {
    const infor = document.querySelectorAll('.produtos');
    const pesquisa = document.getElementById('pesquisar');

    try {
        if (pesquisa === "" || /[0-9]/.test(pesquisa)) {
            throw new Error('Insira um valor válido!!!');
        };
    
        for (let resultado of infor) {
            let titulo = resultado.querySelector(".titulo").textContent.toLowerCase();
            let autor = resultado.querySelector(".autor").textContent.toLowerCase();
            let genero = resultado.querySelector(".genero").textContent.toLowerCase();
            let editora = resultado.querySelector(".editora").textContent.toLowerCase();

            const valorPesquisa = await pesquisa.value.toLowerCase();

            if (titulo.includes(valorPesquisa) || genero.includes(valorPesquisa) || editora.includes(valorPesquisa) || autor.includes(valorPesquisa)) {
                resultado.style.display = "grid";
            } else {
                resultado.style.display = "none";
            }
        }
    } catch (erro) {
        console.error(erro)
    }
};

const categoriaBTN = document.querySelectorAll('.botaoPesquisa');

categoriaBTN.forEach((valores) => {
    let nomeGenero = valores.getAttribute('name');
    valores.addEventListener("click", () => filtraDetalhe(nomeGenero))
});

function filtraDetalhe(filtro) {
    const produtos = document.querySelectorAll(".produtos");

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