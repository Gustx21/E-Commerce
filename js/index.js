const dadosEmpresa = document.querySelector('.dados-empresas');

async function consulta() {
    try {
        const api = await fetch('http://localhost:3000/empresas');
        const materiais = await api.json();

        materiais.forEach((info) => {
            dadosEmpresa.innerHTML += `
                <div class="empresas">
                    <img src="#" title="${info.empresa}" alt="Logo da empresa">
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

const pesquisa = document.getElementById('pesquisar');
const empresas = document.querySelectorAll('.empresas');

pesquisa.addEventListener("input", filtrar);

async function filtrar() {
    const valor = await pesquisa.value.toLowerCase();

    empresas.forEach((base) => {
        const titulo = base.querySelector('.titulo-empresa').textContent.toLowerCase();
        console.log(titulo)
        
        for (const base of empresas) {
            if (!valor === "") {
                if (titulo.includes(valor)) {
                    base.style.display = 'block';
                } else {
                    base.style.display = 'none';
                }
            } else {
                base.style.display = 'block';
            }
        };
    });
};