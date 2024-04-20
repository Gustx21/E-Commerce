const dadosProdutos = document.querySelector('.commerce');

async function consultaDados() {
    try {
        const URL = await fetch('http://localhost:3333/produtos');
        const descricao = await URL.json();

        descricao.forEach((info) => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produtos');

            produtoDiv.innerHTML +=
                `
                <img src="${info.imagem}" alt="imagem" class="img-produto">
                <div class="conteudo">
                    <h1 class="titulo">${info.nome} - ${info.marca}</h1>
                    <p>${info.categoria}</p>
                    <!-- <ul class="detalhes"></ul> -->
                </div>
                `
            ;

            const detalheUl = produtoDiv.querySelector('.detalhes');

            // info.detalhes.forEach((detalhe) => {const li = document.createElement('li'); li.textContent = detalhe; detalheUl.appendChild(li);});

            dadosProdutos.appendChild(produtoDiv);
        });

    } catch (error) {
        dadosProdutos.innerHTML = `<h2 class="erro">Houve erro no carregamento do código: ${error}</h2>`;
    } finally {
        console.log("Codigo finalizado.");
    }
};

consultaDados();

const botaoPesquisa = document.querySelector('.btn');

botaoPesquisa.addEventListener("click", () => {
    const infor = document.querySelectorAll('.produtos');
    const pesquisa = document.getElementById('pesquisar');

    if (pesquisa !== "") {
        for (let resultado of infor) {
            let titulo = resultado.querySelector(".titulo").textContent.toLowerCase();
            let valorPesquisa = pesquisa.value.toLowerCase();

            if (titulo.includes(valorPesquisa)) {
                resultado.style.display = "grid";
            } else {
                resultado.style.display = "none";
            }
        }
    } else {
        resultado.style.display = "grid";
    }
});

const categoriaBTN = document.querySelectorAll('.botaoPesquisa');

categoriaBTN.forEach((valores) => {
    let nomeDetalhe = valores.getAttribute('name');
    valores.addEventListener("click", () => filtraDetalhe(nomeDetalhe))
})

function filtraDetalhe(filtro) {
    const produtos = document.querySelectorAll(".produtos");

    for (let produto of produtos) {
        let detalhes = produto.querySelector(".detalhes").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if (!detalhes.includes(valorFiltro) && valorFiltro != 'tudo') {
            produto.style.display = "none";
        } else {
            produto.style.display = "grid";
        }
    }
}