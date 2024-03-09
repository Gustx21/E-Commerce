// Trabalhando com Promises
let user = {}, dados = [];

async function cadastrar(id) {
    user = {
        id,
        nome: nome,
        email: email
    };
    
    return dados.push(user);
};

async function listar(ids) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const dadosInseridos = dados.map((id, index) => cadastrar(id));
    return dadosInseridos
};

async function exemplo() {
    const nomes = ['Pedro', 'Gustavo', 'João'];
    const usuarios = await listar(nomes);

    console.log(usuarios)
};