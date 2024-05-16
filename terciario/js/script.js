// EVENTO DO BOTÃO DIRETAMENTE DOCUMENT
document.getElementById("enviar").addEventListener("click", inseriComentarios);

async function inseriComentarios(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const titulo = document.getElementById("titulo").value;
    const texto = document.getElementById("comentario").value;

    await fetch("http://127.0.0.1:8080/comentarios",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, titulo, texto })
        }
    )
}

async function consultaComentarios() {
    const comentarios = document.getElementById("comentarios");

    const url = await fetch(`http://127.0.0.1:8080/comentarios/`);
    const result = await url.json();

    result.forEach(dados => {
        const article = document.createElement("article");
        
        article.innerHTML +=
            `<h3>${dados.titulo}</h3>
            <q>${dados.texto}</q>`
        ;
        comentarios.appendChild(article);

    });

}

document.addEventListener("DOMContentLoaded", consultaComentarios);