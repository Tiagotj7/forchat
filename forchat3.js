alert('Olá,Seja bem vindo!!!')

function enviarMensagem(){

    var mensagem = document.getElementById9("text").value;

    if (Mensagem.trim() !== "") {

        adicionarComentario(mensagem);

        limparCaixaTexto();
    }
}

function adicionarComentario(mensagem){

    var comentariosDiv = document.getElementById("Comentarios");

    var novoComentario = document.getElementById("p");

    novoComentario.textContent = mensagem;

    comentariosDiv.appendChild(novoComentario);

}

function limparCaixaTexto(){

    document.getElementById("text").value = " ";

}