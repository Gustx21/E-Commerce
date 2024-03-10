async function inserir() {
    try {
        const ids = Math.floor(Math.random() * 99);
        const nomes = document.getElementById('nome').value;
        const emails = document.getElementById('email').value;

        return await cadastrar(ids, nomes, emails);
    } catch (erro) {
        if (/^\d+$/.test(nomes) || erro instanceof TypeError || erro instanceof ReferenceError || erro instanceof SyntaxError) {
            console.log('Erro no processamento desse código');
        };
    }
};

async function cadastrar(id, nome, email) {
    let dados = [];

    user = {
        id,
        nome: nome,
        email: email
    };

    dados.push(user);

    return listar(dados);
};

async function listar(cadastro) {
    const dadosInseridos = cadastro.map((insert) => { return `${insert.id}. ${insert.nome} / E-mail: ${insert.email}` });
    const usuario = await Promise.all(dadosInseridos);
    console.log(usuario);
};