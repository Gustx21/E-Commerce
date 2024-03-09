// Declarando Object e Array
let user = {}, ID = [];

function cadastrar() {
    nome = window.document.getElementById('nome').value;
    email = window.document.getElementById('email').value;
    
    user = {
        nome: nome,
        email: email
    };
    
    ID.push(user);
};

async function dados() {};

function lista() {
    if (ID.length === 0) {
        alert('A lista se encontra vazia.');
        return;
    };

    x = Math.floor(Math.random() * 9);

    const pessoasID = ID.map((id, indice) => {
        return `${indice + 1}. Nome: ${id.nome}\n ${id.email + indice + x}@gmail.com.`
    }).join("\n");

    alert(`Pessoas cadastradas:\n${pessoasID}`);
};