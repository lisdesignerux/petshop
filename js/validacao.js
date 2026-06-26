// Quando o formulário for enviado...
document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede que o formulário seja enviado automaticamente

  // Pegamos o que a pessoa digitou
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;
  var mensagemErro = document.getElementById("mensagemErro");

  // Verificamos se os campos estão vazios
  if (nome === "" || email === "" || mensagem === "") {
    mensagemErro.textContent = "Por favor, preencha todos os campos.";
  } else {
    mensagemErro.style.color = "green";
    mensagemErro.textContent = "Formulário enviado com sucesso!";
  }

  // Aqui entra a limpeza dos campos:
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";

});