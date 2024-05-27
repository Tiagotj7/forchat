const messagesInput = document.getElementById('messagesInput');
        const SendButton = document.getElementById('SendButton');
        const messagesContainer = document.getElementById('messages');

        SendButton.addEventListener('click', sendMensage);

        function sendMensage(){

            const messages = messagesInput.value.trim();
            if (messages !== '') {
                displayMessage(messages);
                messagesInput.value = '';
            }
        }

        function displayMessage(messages) {

            const messageElement = document.createElement('div');
            messageElement.classList.add('message-container');
            messageElement.innerHTML = '<span>User:</span> ${message}';
            messagesContainer.appendChild(messageElement);
// Você pode adicionar o código para enviar a mensagem para o servidor ou armazená-la em um banco de dados aqui

        }