function enviarMensagem(){var e=document.getElementById("text").value;""!==e.trim()&&(adicionarComentario(e),limparCaixaTexto())}function adicionarComentario(e){var t=document.getElementById("comentarios"),n=document.getElementById("p");n.textContent=e,t.appendChild(n)}function limparCaixaTexto(){document.getElementById("text").value=" "}alert("Olá,Seja bem vindo!!!");

/*
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