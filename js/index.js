const dadosEmpresa = document.querySelector('.dados-empresas');

async function consulta() {
    try {
        const URL = await fetch('http://localhost:3000/empresas');
        const dadosCNPJ = await URL.json();

        dadosCNPJ.forEach((info) => {
            dadosEmpresa.innerHTML += `
                <div class="empresas">
                    <img src="${info.imagem}" title="${info.empresa}" alt="Logo da empresa" class="logo">
                    <h3 class="titulo-empresa">${info.empresa}</h3>
                    <p>${info.descricao}</p>
                    <p>Categoria: <strong>${info.categoria}</strong></p>
                    <a href="${info.url}" target="_blank">Site da Empresa</a>
                </div>`
        });

    } catch (error) {
        alert(`Houve erro no carregamento do código: ${error}.`);
    } finally {
        console.log("Codigo finalizado.");
    }
};

consulta();