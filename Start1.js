function validateForm(event) {
    event.preventDefault(); // Prevenir envio do formulário

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica se o usuário e senha correspondem aos valores pré-definidos
    if (username === "admin" && password === "cobaia123") {
        // Redireciona para a página "centro.html" se o login for bem-sucedido
        window.location.href = "centro.html"; 
    } else {
        // Exibe alerta de erro se o login falhar
        alert("Usuário ou senha incorretos");  
    }
}

// Adiciona a função validateForm ao evento de submit
document.getElementById('loginForm').addEventListener('submit', validateForm);

function TogglePasswordVisibility() {
    var PasswordInput = document.getElementById("password");
    if (PasswordInput.type === "password") {
        PasswordInput.type = "text";
    } else {
        PasswordInput.type = "password";
    }
}