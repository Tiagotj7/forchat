function validateForm(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica se o usuário e senha correspondem aos valores pré-definidos
    if (username !== "admin" || password !== "cobaia123"){

        alert("Usuário ou senha incorretos");  
        return false;// Impede o envio do formulário        
    }

    windows.location.href = "centro.html"

    //return true;// Permite o envio do formulário
    
}

function TogglePasswordVisibility(){

    var PasswordInput = document.getElementById("password")
    if(PasswordInput.type === "password"){

        PasswordInput.type = "text";
    } else{

        PasswordInput.type = "password";
    }
}