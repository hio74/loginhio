// script.js

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de entrada
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Checa se o nome de usuário e a senha estão corretos
    if (username === "minhasfigs" && password === "123456") {
        // Redireciona para a página protegida, substitua 'pagina-protegida.html' pelo seu destino
        window.location.href = "https://www.youtube.com/watch?v=1_eKyE_mHrg"; // Substitua pelo nome do arquivo ou URL da página específica
    } else {
        // Exibe mensagem de erro
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
    }
});
