const dadosProdutos = document.querySelector('.commerce');

async function consultaDados() {
    const URL = await fetch('http://localhost:3333/produtos');
    const descricao = await URL.json();

    try {
        descricao.forEach((info) => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produtos');

            produtoDiv.innerHTML +=
                `<img src="${info.imagem}" alt="imagem" class="img-produto">
                <div class="conteudo">
                    <h1 class="titulo">${info.nome} - ${info.marca}</h1>
                    <span class="detalhes"></span>
                </div>`
            ;

            const detalheParag = produtoDiv.querySelector('.detalhes');
            const paragrafo = document.createElement('p');

            paragrafo.textContent = info.detalhes.join(' - ')
            
            detalheParag.appendChild(paragrafo); 
            dadosProdutos.appendChild(produtoDiv);
        });

    } catch (error) {
        dadosProdutos.innerHTML = `<h2 class="erro">Houve erro no carregamento do código: ${error}</h2>`;
    } finally {
        console.info(`Resultado da requisição:
        url: ${URL.url},
        code: ${URL.status} - ${URL.statusText},
        redirecionamento: ${URL.redirected},
        tipo: ${URL.type}
        funciona: ${URL.ok}`);
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
            throw new Error('Insira um valor válido!!!')
        };
    
        for (let resultado of infor) {
            let titulo = resultado.querySelector(".titulo").textContent.toLowerCase();
            let valorPesquisa = await pesquisa.value.toLowerCase();
    
            if (titulo.includes(valorPesquisa)) {
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
    let nomeDetalhe = valores.getAttribute('name');
    valores.addEventListener("click", () => filtraDetalhe(nomeDetalhe))
});

function filtraDetalhe(filtro) {
    const produtos = document.querySelectorAll(".produtos");

    for (let produto of produtos) {
        let detalhes = produto.querySelector(".detalhes").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if (detalhes.includes(valorFiltro) && valorFiltro === 'tudo') {
            produto.style.display = "grid";
        } else {
            produto.style.display = "none";
        }
    }
};