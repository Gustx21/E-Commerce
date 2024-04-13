const dadosProdutos = document.querySelector('.commerce');

async function consultaDados() {
    try {
        const URL = await fetch('http://localhost:3000/produtos');
        const desc = await URL.json();

        desc.forEach((info) => {
            dadosProdutos.innerHTML += `
                <div class="produtos">
                    <img src="${info.imagem}" alt="${info.nome}" class="img-produto">
                    <h3 class="titulo">${info.nome}</h3>
                    <p>${info.descricao}</p>
                    <p>Marca: <strong>${info.marca}</strong></p>
                    <p>${info.material}</p>
                    <p class="preco">${info.valor}</p>
                </div>`
        });

    } catch (error) {
        alert(`Houve erro no carregamento do código: ${error}`);
    } finally {
        console.log("Codigo finalizado.");
    }
};

consultaDados();

const pesquisa = document.getElementById('pesquisa');

async function filtraPesquisa() {};