
function iniciarCarrossel() {
  const imagens = document.querySelectorAll('#carrossel img'); // pega todas as imagens
  let indice = 0; // começa na primeira imagem

  setInterval(() => {
    imagens[indice].classList.remove('ativo'); // tira a imagem atual - ClassList é do Java Script
    // imagens.length é o total de imagem que tem, então pega o índice e divide pelo total de imagem
    indice = (indice + 1) % imagens.length;     // vai pra próxima (volta pro início no final) --- % (módulo): é um operador que pega o resto da divisão. Isso é usado aqui para voltar ao início quando chegamos no fim
    imagens[indice].classList.add('ativo');     // mostra a nova imagem
  }, 3000); // troca a cada 3 segundos
}

window.onload = iniciarCarrossel; // roda o carrossel quando a página carregar