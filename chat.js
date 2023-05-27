let listaMensagens = []

let chatMessages = document.querySelector('#chat-messages')
let messageCommit = document.querySelector('#message-commit');
let messageInput = document.querySelector('#message-input');


const adicionarMensagem = (apelido, mensagem) => {
    listaMensagens.push({
        "apelido": apelido,
        "mensagem": mensagem
    })
}

const formatarMensagens = () => {

    let htmlData = ''

    for (let i in listaMensagens){
        htmlData += `
        <div class="chat-message">
            <span class="chat-message-apelido">
                ${listaMensagens[i].apelido}
            </span>
            <span class="chat-message-item">
                ${listaMensagens[i].mensagem}
            </span>
        </div>
        `
        
    }
    return htmlData;
}

const atualizarHTML = () => {
    chatMessages.innerHTML = formatarMensagens();
    
};

const commitMessageClickHandler = ( ) => {
    if (messageInput.value.trim().length === 0){
        messageInput.focus();
        return;
    }
    let palavras = messageInput.value.split(' ');
    let apelido = palavras.shift(); // Remove a primeira palavra e a retorna
    let mensagem = palavras.join(' '); // Junta as palavras restantes com espaço entre elas
    adicionarMensagem(apelido, mensagem);
    
    
    atualizarHTML();
    messageInput.value = '';

}


