// Verifica se o usuário já aceitou os cookies anteriormente
// Se não tiver aceitado, exibe o popup de cookies
if (!localStorage.getItem("cookiesAceitos")) {
  // Se não existir a chave "cookiesAceitos" no localStorage,
  // significa que o usuário ainda não aceitou os cookies
  document.getElementById("cookiePopup").style.display = "block";
  // Exibe o elemento com id "cookiePopup" (o aviso de cookies)
}

// Função chamada quando o usuário clica no botão "Aceitar"
// Essa função salva a escolha no localStorage e esconde o popup
function aceitarCookies() {
  localStorage.setItem("cookiesAceitos", "sim");
  // Armazena no localStorage a informação de que o usuário aceitou os cookies

  document.getElementById("cookiePopup").style.display = "none";
  // Esconde o aviso de cookies após o usuário aceitar
}