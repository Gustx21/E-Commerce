import { error } from "../../error/script.js";

// Evento do botão diretamente document
document.getElementById("enviar").addEventListener("click", inserirUser);

async function inserirUser() {
    const email = document.getElementById("email").value;
    const nome = document.getElementById("nome").value;
    const texto = document.getElementById("comentario").value;

    let response = await fetch("http://127.0.0.1:8080/user",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, nome, texto })
        }
    )

    error(response);
}