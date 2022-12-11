var imagens = ["_imagens/perfil-adriel1.jpg", "_imagens/perfil-adriel1.png"];
var imagemAtual = 0;
var tempo = 2000;

function trocarImagem(){
    imagemAtual = (imagemAtual +1) % 2;
    document.querySelector('.imagem-perfil img').src = imagens[imagemAtual];
}

setInterval(trocarImagem, tempo);