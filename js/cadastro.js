async function inserir() {
    try {
        const ids = Math.floor(Math.random() * 99);
        const nomes = document.getElementById('nome').value;
        const emails = document.getElementById('email').value;

        // Mensagem de erro caso tenha valores númericos ou não incluir '@gmail.com'
        if (/^\d+$/.test(nomes) || !emails.includes('@gmail.com')) {
            throw new Error('Erro no processamento do código!!!');
        };
        
        return await cadastrar(ids, nomes, emails);
    } catch (erro) {
        console.error(erro.message);
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