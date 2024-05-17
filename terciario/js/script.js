// EVENTO DO BOTÃO DIRETAMENTE DOCUMENT
document.getElementById("enviar").addEventListener("click", inserirUser);

async function inserirUser() {
    const email = document.getElementById("email").value;
    const nome = document.getElementById("nome").value;
    const texto = document.getElementById("comentario").value;

    let response = await fetch("http://127.0.0.1:8080/usuários",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, nome, texto })
        }
    )

    if (response.ok) {
        console.log("Suave")
    }
}