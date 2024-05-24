import { error } from "../../error/script.js";

// Evento do botão diretamente document
document.getElementById("enviar").addEventListener("click", inserirUser);

async function inserirUser() {
    try {
        const email = document.getElementById("email").value;
        const nome = document.getElementById("nome").value;
        const texto = document.getElementById("comentario").value;
    
        let res = await fetch("https://gustx21.github.io/E-Commerce/backend/user.json",
            {
                method: "OPTIONS, POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "mode": "cors"
                },
                body: JSON.stringify({ email, nome, texto })
            }
        )
        
        error(res);
        
    } catch (error) {
        error(error);
    }
}