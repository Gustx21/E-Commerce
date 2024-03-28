async function inserir() {
    try {
        const nomes = document.getElementById('nome').value;
        const sobrenomes = document.getElementById('sobrenome').value;
        const emails = document.getElementById('email').value;
        const option = document.querySelectorAll('#area input[type="checkbox"]');

        let selection = [];

        // Itera sobre os checkboxes para verificar quais estão marcados
        option.forEach((checkbox) => {
            if (checkbox.checked) {
                // Adiciona o valor da opção selecionada ao array
                selection.push(checkbox.name);
            }
        });

        // Mensagem de erro caso tenha valores númericos ou não incluir '@gmail.com'
        if (/^\d+$/.test(nomes) || /^\d+$/.test(sobrenomes) || !emails.includes('@gmail.com')) {
            throw new Error('Erro no processamento do código!!!');
        };

        return await cadastrar(nomes, sobrenomes, selection, emails);
    } catch (erro) {
        console.error(erro.message);
    }
};

async function cadastrar(nome, sobrenome, area, email) {
    let dados = [];

    user = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        area: area
    };

    dados.push(user);

    return listar(dados);
};

function listar(cadastro) {
    const tabelaCorpo = document.getElementById('tabela-corpo');

    cadastro.map(pessoa => {
        const linha = document.createElement('tr');

        const colunaNome = document.createElement('td');
        const colunaSobrenome = document.createElement('td');
        const colunaEmail = document.createElement('td');
        const colunaArea = document.createElement('td');

        colunaNome.textContent = pessoa.nome;
        colunaSobrenome.textContent = pessoa.sobrenome;
        colunaEmail.textContent = pessoa.email;
        colunaArea.textContent = pessoa.area;

        linha.appendChild(colunaNome);
        linha.appendChild(colunaSobrenome);
        linha.appendChild(colunaEmail);
        linha.appendChild(colunaArea);

        tabelaCorpo.appendChild(linha);
    });
};