function validateForm(event) {

    event.preventDefault(); // Prevenir envio do formulário

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica se o usuário e senha correspondem aos valores pré-definidos
    if (username === "admin" && password === "cobaia123"){

    windows.location.href = "centro.html"; 

            } else {
                
                alert("Usuário ou senha incorretos");  // Impede o envio do formulário        

    }
    
}

// Adiciona a função validateForm ao evento de submit
document.getElementById('loginForm').addEventListener('submit', validateForm);


function TogglePasswordVisibility(){

    var PasswordInput = document.getElementById("password")
    if(PasswordInput.type === "password"){
       PasswordInput.type = "text";
    } else{
        PasswordInput.type = "password";
    }
}

