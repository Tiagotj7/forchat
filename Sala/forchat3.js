alert('Olá,Seja bem vindo!!!')

function enviarMensagem(){

    var mensagem = document.getElementById("text").value;

    if (mensagem.trim() !== "") {

        adicionarComentario(mensagem);

        limparCaixaTexto();
    }
}

function adicionarComentario(mensagem){

    var comentariosDiv = document.getElementById("comentarios");

    var novoComentario = document.getElementById("p");

    novoComentario.textContent = mensagem;

    comentariosDiv.appendChild(novoComentario);

}

function limparCaixaTexto(){

    document.getElementById("text").value = " ";

}

/*const express = require("express");

const app = express();

const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {

    console.log('Servidor rodando dem https://localhost:${port}');

});*/

//

function enviarMensagem() {
    var mensagem = document.getElementById("texto").value;

    if (mensagem.trim() !== "") {
        adicionarComentario(mensagem);
        limparCaixaTexto();
    }
}