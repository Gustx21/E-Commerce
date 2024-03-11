async function inserir() {
    try {
        const ids = Math.floor(Math.random() * 99);
        const nomes = document.getElementById('nome').value;
        const sobrenomes = document.getElementById('sobrenome').value;
        const emails = document.getElementById('email').value;
        const option = document.querySelectorAll('#area input[type="checkbox"]');

        // Array para armazenar as opções selecionadas
        let selection = [];

        // Itera sobre os checkboxes para verificar quais estão marcados
        option.forEach((checkbox) => {
            if (checkbox.checked) {
                // Adiciona o valor da opção selecionada ao array
                selection.push(checkbox.name);
            }
        });

        // Mensagem de erro caso tenha valores númericos ou não incluir '@gmail.com'
        if (/^\d+$/.test(nomes) || /^\d+$/.test(sobrenome) || !emails.includes('@gmail.com')) {
            throw new Error('Erro no processamento do código!!!');
        };

        return await cadastrar(ids, nomes, sobrenomes, selection, emails);
    } catch (erro) {
        console.error(erro.message);
    }
};

async function cadastrar(id, nome, sobrenome, area, email) {
    let dados = [];

    user = {
        id,
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        area: [area]
    };

    dados.push(user);

    return listar(dados);
};

async function listar(cadastro) {
    const dadosInseridos = cadastro.map((insert) => { return `${insert.id}. ${insert.nome} ${insert.sobrenome} / E-mail: ${insert.email} / Area de atuação ${insert.area}` });
    const usuario = await Promise.all(dadosInseridos);
    console.log(usuario);
};