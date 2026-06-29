// Localiza o botão "Enviar"
let botao = document.getElementById("botao-enviar");

// Quando o botão for clicado
botao.onclick = function () {

    // Captura os dados digitados pelo usuário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Verifica o nome
    if (nome == "") {

        alert("Por favor, informe o seu nome.");
        return;

    }

    // Verifica o e-mail
    if (email == "") {

        alert("Por favor, informe o seu e-mail.");
        return;

    }

    // Verifica a mensagem
    if (mensagem == "") {

        alert("Por favor, escreva uma mensagem.");
        return;

    }

    // Todos os campos foram preenchidos
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";

}